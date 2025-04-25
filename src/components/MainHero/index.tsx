'use client'

import { motion, useScroll, useTransform } from 'motion/react'

import InteractiveGrid from '../backgrounds/interactive-grid'
import CodeBackground from './code-background'
import IconsGrid from './icons-grid'
import { useRef, useState } from 'react'
import ShweayButton from '../ui/shweay-button'
import { iconComponents } from '@/data/main-hero/icons'
import { WordAnimation } from '@/components/word-animation'

const MainHero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)

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
      className="relative h-full min-h-[calc(100svh-var(--navbar-height))] flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-20">
        <CodeBackground />
      </div>
      <motion.div
        className="max-w-[1760px] h-full flex items-center justify-center"
        style={{
          scale,
        }}
      >
        {/* monitor thingy */}
        <div
          className="mx-auto w-[95%] h-[95%] relative z-10 border-1 border-background bg-background rounded-2xl sm:rounded-2xl shadow-lg overflow-hidden flex items-center justify-center"
          style={{
            height: 'clamp(39.5rem, 37.7628rem + 7.0727vw, 46.25rem)',
            padding: 'clamp(1rem, 4vw, 3rem)',
            boxShadow:
              '0 0 50px 40px rgba(128, 128, 128, 0.3), 0 0 100px 80px rgba(128, 128, 128, 0.1)',
          }}
        >
          <InteractiveGrid
            cellSize={64}
            gridColor="rgba(128, 128, 128, 0.1)"
            highlightColor="rgba(1, 212, 107, 1.0)"
            fadeTime={1500}
          />
          <div
            className="relative grid grid-rows-[auto_1fr_auto] h-[90%] w-[90%] mx-auto"
            style={{ gap: 'clamp(1rem, 4vh, 2.5rem)' }}
          >
            {/* Row 1 : Heading */}
            <div className="grid grid-cols-4">
              <h1 className="col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-2 3xl:col-span-3">
                <span className="text-secondary">We Design, Develop, & Deploy </span>
                <span>
                  <WordAnimation />
                </span>
              </h1>
            </div>

            {/* Row 2: Icons Grid */}
            <div className="grid grid-cols-9 z-20">
              <IconsGrid
                icons={iconComponents}
                hoveredIcon={hoveredIcon}
                setHoveredIcon={setHoveredIcon}
              />
            </div>

            {/* Row 3: Button*/}
            <div className="grid grid-cols-9">
              <div className="col-span-9 flex items-center justify-end z-20">
                {hoveredIcon !== null && (
                  <div className="xl:hidden flex flex-col">
                    <h5>[{iconComponents[hoveredIcon].label}]</h5>
                    <p
                      className="w-full"
                      style={{
                        maxWidth: 'clamp(7.5rem, 4.177rem + 13.5287vw, 15rem)',
                      }}
                    >
                      {iconComponents[hoveredIcon].desc}
                    </p>
                  </div>
                )}
                <div
                  className="ml-auto"
                  style={{
                    width: 'clamp(108px, 15vw, 180px)',
                    height: 'clamp(40px, 6vw, 72px)',
                  }}
                >
                  <ShweayButton
                    label="contact"
                    onClick={() =>
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                      })
                    }
                  />
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
