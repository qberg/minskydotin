'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { motion, useSpring } from 'motion/react'

interface ProjectCardProps {
  name: string
  tags: string[]
  description: string
  slug: string
  children: React.ReactNode
}

const ProjectCardClient: React.FC<ProjectCardProps> = ({
  name,
  tags,
  description,
  slug,
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  // Create spring animations for the magnetic effect
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect()

      // Calculate mouse position relative to container
      const relativeX = e.clientX - rect.left
      const relativeY = e.clientY - rect.top

      // Update spring values for the magnetic effect
      x.set(relativeX + 15)
      y.set(relativeY + 15)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)

    // Reset spring positions to center when mouse leaves
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect()
      x.set(rect.width / 2)
      y.set(rect.height / 2)
    }
  }

  return (
    <Link
      href={`/work/${slug}`}
      className="flex flex-col gap-4 w-full max-w-md overflow-hidden"
      style={{
        height: 'clamp(29rem, 24.0121rem + 20.307vw, 39.75rem)',
      }}
    >
      <div className="flex justify-between items-center">
        <h3>{name}</h3>
        <p>{tags[0]}</p>
      </div>
      <div
        ref={imageContainerRef}
        className="relative rounded-xl w-full mx-auto overflow-hidden"
        style={{ height: 'clamp(23rem, 19.8101rem + 12.987vw, 29.875rem)' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <motion.div animate={{ opacity: isHovering ? 0.7 : 1 }} transition={{ duration: 0.2 }}>
          {children}
        </motion.div>

        {isHovering && (
          <motion.div
            className="absolute bg-background py-2 px-4 rounded-lg pointer-events-none"
            style={{
              x,
              y,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-matrix-green text-sm">View Work</p>
          </motion.div>
        )}
      </div>
      <p>{description}</p>
    </Link>
  )
}

export default ProjectCardClient
