'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const SECTION_HEIGHT = 1500

const Products = () => {
  const productsRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={productsRef}>
      <section
        className="relative flex flex-col items-center justify-center"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      >
        <div
          className="container mx-auto flex flex-col relative h-[90%]"
          style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
        >
          <h2>/Our Produts</h2>
          <ScrollProducts />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-secondary-background/10 to-background" />
      </section>
    </div>
  )
}

const ScrollProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative flex-1">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-between">
        <BgImage parentRef={containerRef} />
      </div>
    </div>
  )
}

const BgImage = ({ parentRef }: { parentRef: React.RefObject<HTMLDivElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  return (
    <motion.div
      ref={parentRef}
      className="inset-0 h-full w-full"
      style={{
        opacity,
        backgroundImage: `url('/prod-bg.svg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}

export default Products
