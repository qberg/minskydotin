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
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75], [1, 0.9, 0.7])

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={heroRef}
      className="relative min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-20">
        <CodeBackground />
      </div>
      <motion.div
        style={{ scale, maxHeight: '500px' }}
        className="max-w-[2200px] flex items-center justify-center"
      >
        <div
          className="mx-auto relative z-10 border-1 border-background bg-background rounded-2xl sm:rounded-2xl shadow-lg"
          style={{
            width: 'clamp(20rem, 90%, 108rem)',
            height: 'clamp(25rem, 80vh, 46rem)',
            padding: 'clamp(1rem, 4vw, 3rem)',
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
          <div
            className="relative grid grid-rows-[auto_1fr_auto] h-[90%] w-[90%] mx-auto"
            style={{ gap: 'clamp(1rem, 4vh, 2.5rem)' }}
          >
            {/* Row 1 : Heading */}
            <div className="grid grid-cols-9">
              <h1 className="col-span-9 md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-5 -z-10">
                <span className="text-secondary">We Design, Develop, & Deploy</span>
                <span className="text-primary"> Websites.</span>
              </h1>
            </div>

            {/* Row 2: Icons Grid */}
            <div className="grid grid-cols-9 z-20">
              <IconsGrid />
            </div>

            {/* Row 3: Button*/}
            <div className="grid grid-cols-9">
              <div className="col-span-9 flex items-center justify-end pr-4 z-20">
                {' '}
                <div
                  style={{
                    width: 'clamp(108px, 15vw, 180px)',
                    height: 'clamp(40px, 6vw, 72px)',
                  }}
                >
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
