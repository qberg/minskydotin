'use client'
import { motion, useAnimation } from 'motion/react'
import { WorkData } from '@/data/works-data'
import { useEffect } from 'react'
import Image from 'next/image'

interface ScrollShowcaseProps {
  work: WorkData
  index: number
  isHovered: boolean
  isMobile: boolean
}

const ScrollShowcase = ({ work, index, isHovered, isMobile }: ScrollShowcaseProps) => {
  const controls = useAnimation()

  const ensureEnoughImages = () => {
    const minImagesNeeded = 9
    let processedImages = [...work.images]
    while (processedImages.length < minImagesNeeded) {
      processedImages = [...processedImages, ...work.images]
    }
    return processedImages.slice(0, Math.max(minImagesNeeded, work.images.length))
  }

  const images = ensureEnoughImages()
  const imagesPerCol = Math.ceil(images.length / 3)
  const columns = [
    images.slice(0, imagesPerCol),
    images.slice(imagesPerCol, imagesPerCol * 2),
    images.slice(imagesPerCol * 2),
  ]

  useEffect(() => {
    const shouldScroll = !isMobile || isHovered
    if (shouldScroll) {
      controls.start({
        y: [0, -500], // Increased scrolling range for larger images
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15, // Slightly slower for better visibility of larger images
            ease: 'linear',
          },
        },
      })
    } else {
      controls.stop()
      controls.set({ y: 0 })
    }
  }, [isHovered, isMobile, controls])

  const shouldShow = isMobile || isHovered

  return (
    <motion.div
      className="flex gap-3 overflow-hidden relative" // Increased gap between columns
      style={{
        width: 'clamp(15rem, 30vw, 40rem)', // Doubled width
        height: 'clamp(12rem, 16vh, 24rem)', // Doubled height
      }}
      animate={{
        opacity: shouldShow ? 1 : 0,
        transition: { duration: 0.3 },
      }}
    >
      {/* Taller gradient overlays for the larger container */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none opacity-40"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none opacity-40"></div>

      {columns.map((column, colIndex) => (
        <motion.div
          key={colIndex}
          className="flex-1 flex flex-col gap-4" // Increased gap between images
          animate={controls}
          initial={{ y: 0 }}
        >
          {[...column, ...column].map((imgSrc, imgIndex) => (
            <motion.div
              key={imgIndex}
              className="relative flex-shrink-0"
              style={{
                height: 'clamp(10rem, 14vh, 20rem)', // Doubled height
                width: '100%',
              }}
              initial={{ scale: 0.98 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`${work.clientName} image ${imgIndex}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="shadow-sm"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ScrollShowcase
