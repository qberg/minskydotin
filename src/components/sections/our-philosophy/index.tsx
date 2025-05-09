'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import RetroMonitor from '@/components/ui/retro-monitor'
import { useRef } from 'react'
import type { FC } from 'react'
import GeometricPattern from '@/components/backgrounds/geometric-grid-pattern'

const animationOrder = {
  initial: 0,
  gridFadeInStart: 0.15,
  gridFadeInEnd: 0.5,
  gridFadeOutStart: 0.65,
  gridFadeOutEnd: 0.9,
  headerStart: 0.1,
  headerEnd: 0.25,
  monitorStart: 0.15,
  monitorEnd: 0.35,
  textStart: 0.2,
  textEnd: 0.35,
  sectionFadeOutStart: 0.65,
  final: 0.9,
}

const OurPhilosophy: FC = () => {
  const philRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: philRef,
    offset: ['start end', 'end start'],
  })

  const sectionOpacity = useTransform(
    scrollYProgress,
    [animationOrder.sectionFadeOutStart, animationOrder.final],
    [1, 0],
  )

  // Grid opacity animation
  const gridOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.gridFadeInStart,
      animationOrder.gridFadeInEnd,
      animationOrder.gridFadeOutStart,
      animationOrder.gridFadeOutEnd,
    ],
    [0, 1, 1, 0],
  )

  // Header animations
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

  // Monitor animations
  const monitorOpacity = useTransform(
    scrollYProgress,
    [animationOrder.monitorStart, animationOrder.monitorEnd],
    [0, 1],
  )

  const monitorScale = useTransform(
    scrollYProgress,
    [animationOrder.monitorStart, animationOrder.monitorEnd],
    [0.9, 1],
  )

  // Staggered text delays for each paragraph
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

  const text1Anim = useTextDelay(0)
  const text2Anim = useTextDelay(1)
  const text3Anim = useTextDelay(2)
  return (
    <motion.section
      ref={philRef}
      className="flex items-center justify-center relative overflow-hidden"
      style={{
        opacity: sectionOpacity,
        padding: 'clamp(1.5rem, 0.2775rem + 4.9771vw, 6.25rem)',
      }}
    >
      <motion.div style={{ opacity: gridOpacity }}>
        <GeometricPattern topLimit="5%" bottomLimit="95%" height="h-[100vh]" />
        <DashedGridPattern />
      </motion.div>
      <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-14">
        <motion.h2
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 90,
          }}
        >
          /Our Development Philosophy
        </motion.h2>

        <div
          className="grid grid-cols-12"
          style={{ gap: 'clamp(1rem, 0.3566rem + 2.6195vw, 3.5rem)' }}
        >
          <motion.div
            className="col-span-12 xl:col-span-5"
            style={{
              opacity: monitorOpacity,
              scale: monitorScale,
            }}
          >
            <RetroMonitor />
          </motion.div>

          <div className="col-span-12 xl:col-span-7 flex flex-col items-center">
            <motion.p
              style={{
                marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)',
                opacity: text1Anim.opacity,
                y: text1Anim.y,
              }}
            >
              For us, building software is an act of care. Care for the end-users, whose time,
              privacy, and intelligence we deeply respect. Care for the developers who will maintain
              and evolve the system long after its built.
            </motion.p>

            <motion.p
              style={{
                marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)',
                opacity: text2Anim.opacity,
                y: text2Anim.y,
              }}
            >
              We believe in building sustainable, human centric software that stands the test of
              time. Our approach leverages the open-source technologies not just for their cost
              effectiveness but also because they reflect our values— They allow us to create
              systems that are not only robust and adaptable but also grounded in a community-driven
              ethos.
            </motion.p>

            <motion.p
              style={{
                opacity: text3Anim.opacity,
                y: text3Anim.y,
              }}
            >
              Our ultimate goal is to create software that doesn&apos;t just work today but grows
              and evolves with the people who rely on it. Software that can be maintained without
              heroics, and scale without breaking the bank. This approach aligns with our belief
              that the best technology solutions are those that fade into the background, quietly
              and reliably serving human needs rather than demanding attention for themselves.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default OurPhilosophy
