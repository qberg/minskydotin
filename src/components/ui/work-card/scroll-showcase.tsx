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
  // Create separate animation controls for each column
  const controlsCol1 = useAnimation()
  const controlsCol2 = useAnimation()
  const controlsCol3 = useAnimation()

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
      // Different speeds for each column
      controlsCol1.start({
        y: [0, -500],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15, // Base speed
            ease: 'linear',
          },
        },
      })

      controlsCol2.start({
        y: [0, -500],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18, // Slower
            ease: 'linear',
          },
        },
      })

      controlsCol3.start({
        y: [0, -500],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 12, // Faster
            ease: 'linear',
          },
        },
      })
    } else {
      // Stop all animations when not scrolling
      controlsCol1.stop()
      controlsCol1.set({ y: 0 })
      controlsCol2.stop()
      controlsCol2.set({ y: 0 })
      controlsCol3.stop()
      controlsCol3.set({ y: 0 })
    }
  }, [isHovered, isMobile, controlsCol1, controlsCol2, controlsCol3])

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

      {/* Column 1 - Base speed */}
      <motion.div className="flex-1 flex flex-col gap-4" animate={controlsCol1} initial={{ y: 0 }}>
        {[...columns[0], ...columns[0]].map((imgSrc, imgIndex) => (
          <motion.div
            key={imgIndex}
            className="relative flex-shrink-0"
            style={{
              height: 'clamp(10rem, 14vh, 20rem)',
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

      {/* Column 2 - Slower speed */}
      <motion.div className="flex-1 flex flex-col gap-4" animate={controlsCol2} initial={{ y: 0 }}>
        {[...columns[1], ...columns[1]].map((imgSrc, imgIndex) => (
          <motion.div
            key={imgIndex}
            className="relative flex-shrink-0"
            style={{
              height: 'clamp(10rem, 14vh, 20rem)',
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

      {/* Column 3 - Faster speed */}
      <motion.div className="flex-1 flex flex-col gap-4" animate={controlsCol3} initial={{ y: 0 }}>
        {[...columns[2], ...columns[2]].map((imgSrc, imgIndex) => (
          <motion.div
            key={imgIndex}
            className="relative flex-shrink-0"
            style={{
              height: 'clamp(10rem, 14vh, 20rem)',
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
    </motion.div>
  )
}

export default ScrollShowcase
