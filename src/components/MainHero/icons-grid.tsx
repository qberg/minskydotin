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
    <div className="grid grid-cols-3 sm:grid-cols-9 gap-6">
      {icons.map(({ Icon, label }, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:justify-start transition-all hover:cursor-pointer group"
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Icon
            size={44}
            className={`
              md:w-24 md:h-24 
              transition-all duration-300 
              ${hoveredIcon === index ? 'text-glow-blue filter drop-shadow-[0_0_12px_#1D4AE4]' : 'text-secondary'}
            `}
            aria-hidden={true}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="4,2"
          />
          <span className="sr-only">{label}</span>
          {hoveredIcon === index && (
            <div className="relative hidden sm:block">
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
