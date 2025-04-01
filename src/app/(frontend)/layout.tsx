import React from 'react'
import '@/styles/frontend-globals.css'
import { spaceGrotesk, outfit } from '@/fonts'
import Navbar from '@/components/Navbar'
import LenisProvider from '@/components/LenisProvider'

export const metadata = {
  description: 'Digital presence of Minsky labs',
  title: 'Minsky Labs',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable} antialiased`}>
      <body>
        <Navbar />
        <LenisProvider>
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  )
}
