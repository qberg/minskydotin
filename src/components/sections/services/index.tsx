'use client'

import { motion, useScroll, useTransform } from 'motion/react'

import { servicesData } from '@/data/service'
import { useRef } from 'react'
import ServiceCard from '@/components/ui/service-card'

const animationOrder = {
  initial: 0,
  headerStart: 0.2,
  headerEnd: 0.35,
  cardsStart: 0.25,
  cardsEnd: 0.4,
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
      style={{ opacity: sectionOpacity }}
    >
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
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
