import React from 'react'
import '@/styles/frontend-globals.css'
import { spaceGrotesk, outfit } from '@/fonts'
import LenisProvider from '@/components/LenisProvider'
import { ViewTransitions } from 'next-view-transitions'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/navbar'

export const metadata = {
  description: 'Digital presence of Minsky labs',
  title: 'Minsky Labs',
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
