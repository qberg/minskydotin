'use client'

import { motion, useScroll, useTransform } from 'motion/react'

import InteractiveGrid from '../backgrounds/interactive-grid'
import CodeBackground from './code-background'
import IconsGrid from './icons-grid'
import { useRef } from 'react'
import ShweayButton from '../ui/shweay-button'

const MainHero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [1, 0.75, 0.25, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.75], [1, 0.8, 0.6])

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={heroRef}
      className="relative min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <CodeBackground />
      </div>
      <motion.div style={{ scale }} className="container">
        <div
          className="w-[90%] h-[80vh] max-h-[800px] mx-auto relative z-10 px-8 lg:px-12 py-16 border-1 border-background bg-background rounded-2xl sm:rounded-2xl shadow-lg"
          style={{
            boxShadow:
              '0 0 20px 10px rgba(128, 128, 128, 0.3), 0 0 40px 20px rgba(128, 128, 128, 0.1)',
          }}
        >
          <InteractiveGrid
            cellSize={24}
            gridColor="rgba(128, 128, 128, 0.1)"
            highlightColor="rgba(1, 212, 107, 0.5)"
            fadeTime={1500}
          />

          <div className="relative grid grid-cols-9 gap-y-20 sm:gap-y-24 md:gap-y-20 lg:gap-y-24 xl:gap-y-24 2xl:gap-y-32">
            <h1 className="col-span-9 md:col-span-9 lg:col-span-7 xl:col-span-6 2xl:col-span-5 z-0">
              <span className="text-secondary">We Design, Develop, & Deploy</span>
              <span className="text-primary"> Websites.</span>
            </h1>

            {/* Icons Grid */}
            <div className="col-span-9 z-20">
              <IconsGrid />
            </div>

            <div className="col-span-9">
              <div className="flex items-center justify-end pr-4 z-20">
                <div className="w-[108px] h-[40px] xl:w-[180px] xl:h-[72px]">
                  <ShweayButton label="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default MainHero
