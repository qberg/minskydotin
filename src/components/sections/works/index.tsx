'use client'

import WorkCard from '@/components/ui/work-card'
import { workData } from '@/data/works-data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <div className="flex items-center justify-between">
          <h2>/Our Works</h2>
          <Link href="/clients" className="text-widecard-secondary">
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {workData.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              index={index}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              isHovered={hoveredIndex === index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
