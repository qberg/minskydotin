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
import { useState } from 'react'
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

  return (
    <div
      className="col-span-9 w-full grid grid-cols-3 lg:grid-cols-9 xl:grid-cols-9"
      style={{
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
              width: 'clamp(3rem, 5vw, 6rem)',
              height: 'clamp(3rem, 5vw, 6rem)',
            }}
          />
          <span className="sr-only">{label}</span>
          {hoveredIcon === index && (
            <div className="relative hidden lg:block">
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
