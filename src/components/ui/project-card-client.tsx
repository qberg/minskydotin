'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
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
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div animate={{ opacity: isHovering ? 0.6 : 1 }} transition={{ duration: 0.2 }}>
          {children}
        </motion.div>

        {isHovering && (
          <motion.div
            className="absolute bg-background py-2 px-4 rounded-lg pointer-events-none"
            style={{
              x: mousePosition.x + 15,
              y: mousePosition.y + 15,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-matrix-green">View Work</p>
          </motion.div>
        )}
      </div>

      <p>{description}</p>
    </Link>
  )
}

export default ProjectCardClient
