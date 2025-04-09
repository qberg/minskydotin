import React from 'react'
import '@/styles/frontend-globals.css'
import { spaceGrotesk, outfit } from '@/fonts'
import LenisProvider from '@/components/LenisProvider'
import { ViewTransitions } from 'next-view-transitions'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/navbar'

import type { Viewport } from 'next'

export const metadata = {
  description: 'Digital presence of Minsky labs',
  title: 'Minsky Labs',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0.75,
  maximumScale: 0.75,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <ViewTransitions>
      <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable} antialiased`}>
        <body>
          <Navbar />
          <LenisProvider>
            <main>{children}</main>
            <Toaster />
            <Footer />
          </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
