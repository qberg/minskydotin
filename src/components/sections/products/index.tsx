'use client'

import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import { productsData } from '@/data/products-data'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

const animationOrder = {
  initial: 0,
  headerStart: 0.1,
  headerEnd: 0.25,
  imageStart: 0.2,
  imageEnd: 0.35,
  showcaseStart: 0.3,
  showcaseEnd: 0.4,
  textStart: 0.35,
  textEnd: 0.4,
  sectionFadeOutStart: 0.65,
  final: 0.9,
}

const Products = () => {
  const productsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: productsRef,
    offset: ['start end', 'end start'],
  })

  const sectionOpacity = useTransform(
    scrollYProgress,
    [animationOrder.sectionFadeOutStart, animationOrder.final],
    [1, 0],
  )
  const headerOpacity = useTransform(
    scrollYProgress,

    [animationOrder.headerStart, animationOrder.headerEnd],
    [0, 1],
  )

  const headerY = useTransform(
    scrollYProgress,
    [animationOrder.headerStart, animationOrder.headerEnd],
    ['20px', '0px'],
  )

  const imageOpcaity = useTransform(
    scrollYProgress,
    [animationOrder.imageStart, animationOrder.imageEnd],
    [0.5, 1],
  )

  const imageScale = useTransform(
    scrollYProgress,
    [animationOrder.imageStart, animationOrder.imageEnd],
    [0.9, 1],
  )

  const showcaseOpacity = useTransform(
    scrollYProgress,
    [animationOrder.showcaseStart, animationOrder.showcaseEnd],
    [0, 0.8],
  )

  const useTextDelay = (index: number) => {
    return {
      opacity: useTransform(
        scrollYProgress,
        [animationOrder.textStart + index * 0.05, animationOrder.textEnd + index * 0.05],
        [0, 1],
      ),
      y: useTransform(
        scrollYProgress,
        [animationOrder.textStart + index * 0.05, animationOrder.textEnd + index * 0.05],
        ['30px', '0px'],
      ),
    }
  }

  const nameAnim = useTextDelay(0)
  const descAnim = useTextDelay(1)

  return (
    <motion.section
      ref={productsRef}
      className="min-h-screen flex items-center justify-center relative"
      style={{ opacity: sectionOpacity }}
    >
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        <motion.h2 style={{ opacity: headerOpacity, y: headerY }}>/Our Products</motion.h2>
        <div className="relative">
          <motion.div
            className="hidden sm:block absolute inset-0 -z-20 overflow-hidden h-full w-full mx-auto"
            style={{
              scale: imageScale,
              opacity: imageOpcaity,
              backgroundImage: `url('/prod-bg.svg')`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          ></motion.div>
          {productsData.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-center sm:justify-between w-full"
            >
              {/* Text with description */}
              <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-2/5 order-2 sm:order-1">
                <motion.h3 style={{ opacity: nameAnim.opacity, y: nameAnim.y }}>
                  {product.name}
                </motion.h3>
                <motion.p
                  className="text-secondary max-w-[550px] tracking-tight leading-tight"
                  style={{ opacity: descAnim.opacity, y: descAnim.y }}
                >
                  {product.description}
                </motion.p>
              </div>
              {/*Showcase */}
              <motion.div
                className="relative flex items-center justify-center bg-card-background rounded-xl overflow-hidden hover:cursor-pointer opacity-80 w-full  sm:w-auto order-1 sm:order-2"
                style={{
                  opacity: showcaseOpacity,
                  height: 'clamp(25rem, 60vh, 40rem)',
                  width: 'clamp(22rem, 90vw, 57rem)',
                }}
              >
                <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="45px 45px" />

                <div
                  className="relative w-full flex items-center justify-center"
                  style={{ minHeight: 'clamp(30rem, 40vh, 50rem)' }}
                >
                  <Image
                    src={product.imageSrc}
                    alt="Chatpress screens"
                    width={528}
                    height={528}
                    style={{
                      height: 'clamp(19rem, 50vh, 33rem)',
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Products
