'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 2.0,
        smoothWheel: true,
        wheelMultiplier: 1.4,
        touchMultiplier: 1.8,
        syncTouch: true,
        syncTouchLerp: 0.1,
        orientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  )
}
