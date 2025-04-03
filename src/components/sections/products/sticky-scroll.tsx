'use client'

import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import { productsData } from '@/data/products-data'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

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
          className="w-full max-w-[1760px] mx-auto flex flex-col relative h-[90%]"
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
      <div className="sticky top-0 h-screen w-full flex items-center">
        <BgImage parentRef={containerRef} />
        <ProductsDisplay parentRef={containerRef} />
      </div>
    </div>
  )
}

const ProductsDisplay = ({ parentRef }: { parentRef: React.RefObject<HTMLDivElement | null> }) => {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start end', 'end start'],
  })

  const product1Progress = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7], [0, 1, 1, 0])
  const product2Progress = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9], [0, 1, 1, 0])

  // useMotionValueEvent(product1Progress, 'change', (latest) => console.log(latest))

  const product1Opacity = useTransform(product1Progress, [0, 1], [0, 1])
  const product1TranslateY = useTransform(product1Progress, [0, 1], [0, -1000])

  const product2Opacity = useTransform(product2Progress, [0, 1], [0, 1])
  const product2TranslateY = useTransform(product2Progress, [0, 1], [50, 0])

  return (
    <div className="absolute flex flex-col justify-center h-full w-full bg-transparent gap-4">
      {/* Product 1 */}
      <motion.div className="flex items-center justify-between w-full gap-16">
        {/*name + description */}
        <motion.div
          className="flex flex-col gap-4 w-2/5"
          style={{ opacity: product1Opacity, y: product1TranslateY }}
        >
          <h3>{productsData[0].name}</h3>
          <p className="text-secondary max-w-[550px] tracking-tight leading-tight">
            {productsData[0].description}
          </p>
        </motion.div>
        {/*Image */}
        <div
          className="relative flex items-center justify-center bg-card-background rounded-xl overflow-hidden hover:cursor-pointer ml-4 opacity-80 w-3/5 max-w-[900px]"
          style={{ minHeight: 'clamp(25rem, 60vh, 40rem)' }}
        >
          <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="45px 45px" />

          <div className="relative w-full h-full min-h-[400px] xl:min-h-[500px]">
            <Image
              src={productsData[0].imageSrc}
              alt="Chatpress screens"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </motion.div>
      {/* Product 2 */}

      <motion.div className="flex items-center justify-between w-full">
        {/*name + description */}
        <motion.div
          className="flex flex-col gap-4 w-2/5"
          style={{ opacity: product2Opacity, y: product2TranslateY }}
        >
          <h3>{productsData[1].name}</h3>
          <p className="text-secondary max-w-[550px] tracking-tight leading-tight">
            {productsData[1].description}
          </p>
        </motion.div>
        {/*Image */}
        <div
          className="relative flex items-center justify-center bg-card-background rounded-xl overflow-hidden hover:cursor-pointer ml-4 opacity-80 w-3/5 max-w-[900px]"
          style={{ minHeight: 'clamp(25rem, 60vh, 40rem)' }}
        >
          <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="45px 45px" />

          <div className="relative w-full h-full min-h-[400px] xl:min-h-[500px]">
            <Image
              src={productsData[1].imageSrc}
              alt="Chatpress screens"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </motion.div>
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
      className="inset-0 h-full w-full mx-auto"
      style={{
        opacity,
        backgroundImage: `url('/prod-bg.svg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    />
  )
}

export default Products
