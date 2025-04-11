import { type NextRequest, NextResponse } from 'next/server'
import React from 'react'
import { Resend } from 'resend'
import { EmailTemplateProps } from '@/types/form'
import EmailTemplate from '@/components/forms/email-template'

// Initialize Resend properly
const resend = new Resend(process.env.RESEND_API_KEY)
const SENDER_EMAIL = 'notifications@newsletter.qbergnoe.com'

const renderEmail = (props: EmailTemplateProps) => React.createElement(EmailTemplate, props)

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phone, message } = await request.json()

    // Validate required fields
    if (!email || !fullName) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Send admin notification
    await resend.emails.send({
      from: `MINSKY <${SENDER_EMAIL}>`,
      to: ['info@minsky.in', 'shweta@minsky.in'],
      subject: `New Form Submission at Minsky.in from ${fullName}`,
      react: renderEmail({
        fullName,
        email,
        phone,
        message,
      }),
    })

    return NextResponse.json(
      { success: true, message: 'Form submitted and emails sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 },
    )
  }
}
