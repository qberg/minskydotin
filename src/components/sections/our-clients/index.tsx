'use client'

import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

interface ClientLogo {
  src: string
  alt: string
}

const clientLogos: ClientLogo[] = [
  { src: '/tn-govt.svg', alt: 'TamilNadu Government' },
  { src: '/fametn.svg', alt: 'FAME TN' },
  { src: '/coord.svg', alt: 'Coord' },
  { src: '/startuptn.svg', alt: 'Startup TN' },
  { src: '/neumex.svg', alt: 'Neumex' },
  { src: '/tn-govt.svg', alt: 'TamilNadu Government' },
]

const animationOrder = {
  initial: 0,
  headerStart: 0.1,
  headerEnd: 0.25,
  imageStart: 0.2,
  imageEnd: 0.35,
  showcaseStart: 0.3,
  showcaseEnd: 0.4,
  textStart: 0.35,
  textEnd: 0.4,
  sectionFadeOutStart: 0.65,
  final: 0.9,
}

const OurClients = () => {
  const clientsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: clientsRef,
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
      ref={clientsRef}
      className=" flex items-center justify-center relative overflow-hidden"
      style={{ padding: 'clamp(1.5rem, 0.2775rem + 4.9771vw, 6.25rem)', opacity: sectionOpacity }}
    >
      <motion.div>
        <DashedGridPattern />
      </motion.div>

      <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-14">
        <motion.h2 style={{ opacity: headerOpacity, y: headerY }}>/Our Clients</motion.h2>
        {/* Logos grid */}
        <motion.div
          className="w-full grid grid-cols-3 place-items-center gap-8 md:flex md:items-center md:justify-between md:gap-12"
          style={{
            height: 'clamp(6.75rem, 6.225rem + 2.625vw, 9.375rem)',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              className="relative h-full w-full"
              style={{ maxWidth: 'clamp(10.25rem, 7.3rem + 14.75vw, 25rem)' }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                },
              }}
            >
              <Image src={client.src} alt={client.alt} fill className="object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default OurClients
