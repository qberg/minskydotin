import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

import { WorkData } from '@/data/works-data'
import { CircleArrowOutUpRight } from 'lucide-react'
import React, { useRef } from 'react'

interface WorkCardProps {
  work: WorkData
  index: number
  handleMouseEnter: (index: number) => void
  handleMouseLeave: () => void
  isHovered: boolean
  isMobile: boolean
}

const WorkCard = ({
  work,
  index,
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
  isMobile,
}: WorkCardProps) => {
  const imageSrc = work.images[0]

  const targetRef = useRef<HTMLDivElement | null>(null)
  const animationState = isHovered ? 'hover' : 'initial'

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const imgTop = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%'])
  const imgLeft = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!targetRef.current) return

    const rect = targetRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const variants = {
    container: {},
    clientInfo: {
      initial: { x: 0 },
      hover: { x: 10 },
    },
    title: {
      initial: { textShadow: 'none' },
      hover: { textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' },
    },
    description: {
      initial: { opacity: 0, y: 20 },
      hover: { opacity: 1, y: 0 },
    },
    divider: {
      initial: { width: 0 },
      hover: { width: '60%' },
    },
    icon: {
      initial: { opacity: 0, y: 10 },
      hover: { opacity: 1, y: 0 },
    },
    image: {
      initial: { scale: 0, rotate: '-12.5deg' },
      hover: { scale: 1, rotate: '0deg' },
    },
  }

  const transitions = {
    fast: { duration: 0.3 },
    medium: { duration: 0.4 },
    spring: { type: 'spring', stiffness: 200, damping: 20 },
    delayed: { duration: 0.4, delay: 0.1 },
    image: { type: 'spring', stiffness: 150, damping: 20 },
  }

  return (
    <Link href="/clients">
      <motion.div
        ref={targetRef}
        style={{ minHeight: 'clamp(7rem, 8vh, 11rem)' }}
        className={` relative border-b border-widecard-border py-8 px-0 xl:py-8 xl:pl-12 overflow-hidden ${isHovered ? 'rounded-xl cursor-pointer border' : ''}`}
        variants={variants.container}
        initial="initial"
        animate={animationState}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt={`${work.clientName} project`}
            className="absolute z-0 rounded-lg object-cover h-32 w-40 md:h-48 md:w-64"
            style={{
              top: imgTop,
              left: imgLeft,
              translateX: '10%',
              translateY: '-50%',
              position: 'absolute',
              zIndex: 0,
              opacity: 0.7,
            }}
            variants={variants.image}
            animate={animationState}
            transition={transitions.image}
          />
        )}
        <div className="flex items-center justify-between w-[60%] overflow-hidden">
          {/* Client name */}
          <motion.div
            className="flex flex-col justify-start items-start"
            variants={variants.clientInfo}
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xs">[{`0${index + 1}`}]</span>
            <motion.h3
              className={`${isHovered || isMobile ? 'text-primary' : 'text-widecard-secondary'}`}
              variants={variants.title}
              animate={animationState}
            >
              {' '}
              {work.clientName}
            </motion.h3>
            <span className="text-2xs text-widecard-secondary">{work.deliverables}</span>
          </motion.div>
          {/* works description */}
          {!isMobile && (
            <div className="hidden xl:flex max-w-md flex-col gap-2">
              <motion.p
                className="text-widecard-secondary"
                variants={variants.description}
                animate={animationState}
                transition={transitions.spring}
              >
                {work.description}
              </motion.p>
              <motion.div
                className="w-3/5 h-px bg-widecard-divder my-1"
                variants={variants.divider}
                animate={animationState}
                transition={transitions.medium}
              />
              <motion.span
                className="text-widecard-secondary my-1"
                variants={variants.icon}
                animate={animationState}
                transition={transitions.delayed}
              >
                <CircleArrowOutUpRight />
              </motion.span>
            </div>
          )}
          {/* Images show case */}
        </div>
      </motion.div>
    </Link>
  )
}

export default WorkCard
