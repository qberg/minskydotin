'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import servicesData from '@/data/service'
import { useRef } from 'react'

const animationOrder = {
  initial: 0,
  headerStart: 0.2,
  headerEnd: 0.35,
  cardsStart: 0.25,
  cardsEnd: 0.4,
}

const Services = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

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

  const cardsOpcaity = useTransform(
    scrollYProgress,
    [animationOrder.cardsStart, animationOrder.cardsEnd],
    [0, 1],
  )

  const cardsY = useTransform(
    scrollYProgress,

    [animationOrder.cardsStart, animationOrder.cardsEnd],
    [60, 0],
  )

  return (
    <section ref={targetRef} className="min-h-screen flex items-center justify-center relative">
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <motion.div
          style={{ fontSize: 'clamp(2rem,4vw, 3.75rem)', opacity: headerOpacity, y: headerY }}
        >
          /Our Services
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ opacity: cardsOpcaity, y: cardsY }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative bg-card-background rounded-xl overflow-hidden"
              style={{ minHeight: 'clamp(21rem, 40vh, 35rem)' }}
            >
              <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="60px 60px" />
              <div className="flex flex-col h-full p-8 bg-transparent">
                <div className="flex justify-end">
                  <div
                    className="relative"
                    style={{
                      width: 'clamp(5.5rem, 10vw,11.5rem )',
                      height: 'clamp(5.5rem, 10vw, 11.5rem)',
                    }}
                  >
                    <Image
                      src={service.svgPath}
                      alt={service.title}
                      fill
                      className={`object-contain`}
                    />
                  </div>
                </div>
                {/*title */}
                <div className="flex flex-col justify-start items-start gap-1 -mt-8 mb-auto">
                  <span className="text-2xs">[{index + 1}]</span>
                  <h3 className="w-[60%] md:w-[90%]">{service.title}</h3>
                </div>
                {/*tags*/}
                <div className="flex flex-col gap-4 mt-8">
                  {service.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-badge-background border border-badge-border w-max rounded-lg py-1 md:py-2 px-2 md:px-4"
                    >
                      <span className="text-2xs text-badge-foreground">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
