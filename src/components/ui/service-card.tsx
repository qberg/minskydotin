'use client'

import { motion, MotionValue, useScroll, useTransform } from 'motion/react'

import { type ServiceData } from '@/data/service'
import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import Image from 'next/image'
import { useState, useRef } from 'react'

interface ServiceCardProps {
  service: ServiceData
  index: number
  parentScrollYProgress: MotionValue<number>
}

const ServiceCard = ({ service, index, parentScrollYProgress }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const startShow = 0.25 + index * 0.05
  const endShow = 0.4 + index * 0.05

  const parentOpacity = useTransform(parentScrollYProgress, [startShow, endShow], [0, 1])

  // Card-specific scroll controls fine-tuned animations
  const y = useTransform(cardScrollProgress, [0, 0.4, 0.95], [60, 0, -30])
  const scale = useTransform(cardScrollProgress, [0, 0.4, 0.95], [0.8, 1, 0.9])

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-card-background rounded-xl overflow-hidden hover:cursor-pointer"
      style={{ minHeight: 'clamp(21rem, 40vh, 35rem)', opacity: parentOpacity, y, scale }}
      initial={{ y: 0 }}
      whileHover={{
        y: -32,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="60px 60px" />

      <motion.div
        className="flex flex-col h-full p-8 bg-transparent"
        animate={{
          background: isHovered
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2))'
            : 'transparent',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* icon */}
        <motion.div
          className="flex justify-end"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
        >
          <div
            className="relative"
            style={{
              width: 'clamp(5.5rem, 10vw,11.5rem )',
              height: 'clamp(5.5rem, 10vw, 11.5rem)',
            }}
          >
            <Image src={service.svgPath} alt={service.title} fill className={`object-contain`} />
          </div>
        </motion.div>
        {/*title */}
        <motion.div
          className="flex flex-col justify-start items-start gap-1 -mt-8 mb-auto"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span className="text-2xs" animate={{ opacity: isHovered ? 0.9 : 0.6 }}>
            [{index + 1}]
          </motion.span>
          <motion.h3
            className="w-[60%] md:w-[90%]"
            animate={{
              textShadow: isHovered ? '0 0 8px rgba(255,255,255,0.3)' : 'none',
            }}
          >
            {service.title}
          </motion.h3>
        </motion.div>
        {/*tags*/}
        <motion.div className="flex flex-col gap-4 mt-8">
          {service.tags.map((tag, index) => (
            <motion.div
              key={index}
              className="bg-badge-background border border-badge-border w-max rounded-lg py-1 md:py-2 px-2 md:px-4"
              animate={{
                x: isHovered ? 10 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <span className="text-2xs text-badge-foreground">{tag}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceCard
