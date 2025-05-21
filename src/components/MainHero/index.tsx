'use client'

import { motion, useScroll, useTransform } from 'motion/react'

import { useRef, useState } from 'react'
import CodingWordsBackground from '@/components/MainHero/coding-words-bg'
import ShweayButton from '@/components/ui/shweay-button'
import { iconComponents } from '@/data/main-hero/icons'
import IconsGrid from '@/components/MainHero/icons-grid'
import { WordAnimation } from '@/components/word-animation'

const fontSize = {
  fontSize: 'clamp(2.25rem, 1.6379rem + 2.4919vw, 5.625rem)',
}

{
  /*
const boxShadowVariants: Variants = {
  initial: {
    boxShadow: '0px 0px 0px 0px rgba(128, 128, 128, 0.1)',
  },
  animate: {
    boxShadow: [
      '0px 0px 80px 30px rgba(128, 128, 128, 0.25)',
      '0px 0px 120px 50px rgba(128, 128, 128, 0.35)',
      '0px 0px 120px 50px rgba(128, 128, 128, 0.35)',
      '0px 0px 80px 30px rgba(128, 128, 128, 0.25)',
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: [0.42, 0, 0.58, 1], // easeInOutCubic
    },
  },
}
*/
}

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
      className="relative h-[calc(100svh-var(--navbar-height))] flex items-center justify-center p-5 md:px-10 lg:px-16 sxl:px-24 2xl:px-28 3xl:px-32 4xl:px-40 md:py-5 lg:py-8 sxl:py-12 2xl:py-14 3xl:py-16 4xl:py-20"
    >
      <div className="absolute inset-0 -z-20">
        <CodingWordsBackground />
      </div>

      <motion.div
        className="bg-black w-full rounded-2xl overflow-hidden h-[80svh] md:h-full md:max-h-[62rem] relative"
        style={{
          scale,
          boxShadow: '0px 0px 160px 70px rgba(128, 128, 128, 0.3)',
        }}
      >
        <div className="bg-[url('/grid-bg-sm.svg')] md:bg-[url('/grid-bg-md.svg')] sxl:bg-[url('/grid-bg-sxl.svg')] 2xl:bg-[url('/grid-bg-2xl.svg')] 3xl:bg-[url('/grid-bg.svg')] bg-repeat absolute inset-0 w-full h-full"></div>
        {/*Monitor Content */}
        <div className="flex flex-col justify-between h-full w-full px-5 md:px-16 sxl:px-20 2xl:px-24 3xl:px-32 4xl:px-36 py-6 md:py-10 sxl:py-12 2xl:py-20 3xl:py-24 4xl:py-28 overflow-hidden">
          <h1 style={fontSize} className="text-secondary">
            We Design, Develop, <br /> & Deploy{' '}
            <span className="text-primary block sm:inline">
              <WordAnimation />
            </span>
          </h1>

          {/* Icons grid */}
          <div className="z-20">
            <IconsGrid
              icons={iconComponents}
              hoveredIcon={hoveredIcon}
              setHoveredIcon={setHoveredIcon}
            />
          </div>

          <div className="flex items-end">
            <div className="block md:hidden">
              {hoveredIcon !== null && (
                <div>
                  <h5>[{iconComponents[hoveredIcon].label}]</h5>
                  <p className="mt-1 max-w-[25ch]">{iconComponents[hoveredIcon].desc}</p>
                </div>
              )}
            </div>

            <div className="ml-auto aspect-[3/1] w-[6.375rem] md:w-[7.875rem] sxl:w-[9.875rem] 2xl:w-[11.875rem] 3xl:w-[13.875rem] 4xl:w-[15.875rem] z-20">
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
      </motion.div>
    </motion.section>
  )
}

export default MainHero
