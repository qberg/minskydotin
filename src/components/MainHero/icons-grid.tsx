'use client'
import {
  Lightbulb,
  FileText,
  Settings,
  Network,
  FileCode,
  Database,
  Globe,
  Clock,
  Timer,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import SketchAnimation from '../sketch-animations'

const icons = [
  { Icon: Lightbulb, label: 'Ideas' },
  { Icon: FileText, label: 'Documentation' },
  { Icon: Settings, label: 'Configuration' },
  { Icon: Network, label: 'Networking' },
  { Icon: FileCode, label: 'Development' },
  { Icon: Database, label: 'Database' },
  { Icon: Globe, label: 'Web' },
  { Icon: Clock, label: 'Scheduling' },
  { Icon: Timer, label: 'Performance' },
]

const IconsGrid = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)
  const [columns, setColumns] = useState(3)

  // Responsive columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setColumns(9)
      } else if (window.innerWidth >= 640) {
        setColumns(3)
      } else {
        setColumns(3)
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="col-span-9 w-full"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 'clamp(0.5rem, 2vw, 1.5rem)',
      }}
    >
      {icons.map(({ Icon, label }, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:justify-start transition-all hover:cursor-pointer group"
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{
            padding: 'clamp(0.25rem, 1vw, 1rem)',
          }}
        >
          <Icon
            aria-hidden={true}
            className={`transition-all duration-300
              ${hoveredIcon === index ? 'text-glow-blue filter drop-shadow-[0_0_12px_#1D4AE4]' : 'text-secondary'}
            `}
            style={{
              width: 'clamp(3rem, 5vw, 5.5rem)',
              height: 'clamp(3rem, 5vw, 5.5rem)',
            }}
          />
          <span className="sr-only">{label}</span>
          {hoveredIcon === index && (
            <div
              className="relative"
              style={{
                display: window.innerWidth >= 1024 ? 'block' : 'none',
              }}
            >
              <SketchAnimation
                direction={index < 5 ? 'bottomRight' : index === 8 ? 'topLeft' : 'topRight'}
                title="[Server]"
                description="We provide hosting and maintenance"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default IconsGrid
