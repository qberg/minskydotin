'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { workData } from '@/data/works-data'
import TransitionLink from '@/components/TransitionLink'
import WorkCard from '@/components/ui/work-card'

const animationOrder = {
  initial: 0,
  headerStart: 0.1,
  headerEnd: 0.25,
  sectionFadeOutStart: 0.65,
  final: 0.9,
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Works = () => {
  const worksRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: worksRef,
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <motion.section
      ref={worksRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ padding: 'clamp(1.5rem, 0.2775rem + 4.9771vw, 6.25rem)', opacity: sectionOpacity }}
    >
      <motion.div className="w-full max-w-[1720px] mx-auto flex flex-col gap-14">
        <motion.div
          className="flex items-center justify-between"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <h2>/Our Works</h2>
          <TransitionLink href="/portfolio" className="text-widecard-secondary text-m">
            View All
          </TransitionLink>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workData.map((work, index) => (
            <motion.div key={index} variants={cardVariants}>
              <WorkCard
                work={work}
                index={index}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                isHovered={hoveredIndex === index}
                isMobile={isMobile}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Works
