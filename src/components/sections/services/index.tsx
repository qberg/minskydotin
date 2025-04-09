'use client'

import { motion, useScroll, useTransform } from 'motion/react'

import { servicesData } from '@/data/service'
import { useRef } from 'react'
import ServiceCard from '@/components/ui/service-card'

const animationOrder = {
  initial: 0,
  headerStart: 0.1,
  headerEnd: 0.25,
  cardsStart: 0.15,
  cardsEnd: 0.35,
  sectionFadeOutStart: 0.65,
  final: 0.9,
}

const Services = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
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

  return (
    <motion.section
      ref={targetRef}
      className="min-h-screen flex items-center justify-center relative"
      style={{ padding: 'clamp(1.5rem, 0.2775rem + 4.9771vw, 6.25rem)', opacity: sectionOpacity }}
    >
      <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-14">
        <motion.h2 style={{ opacity: headerOpacity, y: headerY }}>/Our Services</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              parentScrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services
