'use client'
import SketchAnimation from '../sketch-animations'
import Image from 'next/image'
import { type IconComponent } from '@/data/main-hero/icons'

interface IconsGridProps {
  icons: IconComponent[]
  hoveredIcon: number | null
  setHoveredIcon: (index: number | null) => void
}

const IconsGrid = ({ icons, hoveredIcon, setHoveredIcon }: IconsGridProps) => {
  return (
    <div
      className="col-span-9 w-full grid grid-cols-3 place-items-center lg:grid-cols-9 xl:grid-cols-9"
      style={{
        gap: 'clamp(0.5rem, 2vw, 1.5rem)',
      }}
    >
      {icons.map(({ Icon, LucideIcon, label }, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:justify-start transition-all hover:cursor-pointer group relative"
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
          style={{
            padding: 'clamp(0.25rem, 1vw, 1rem)',
          }}
        >
          {/* Static image (shown when not hovered) */}
          {hoveredIcon !== index && (
            <div
              className="relative"
              style={{
                width: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
                height: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
              }}
            >
              <Image
                src={Icon}
                alt={label}
                aria-hidden={true}
                fill
                priority
                className="transition-all duration-300"
              />
            </div>
          )}

          {/* Lucide icon (shown when hovered) */}
          {hoveredIcon === index && (
            <>
              <LucideIcon
                aria-hidden={true}
                className="text-primary transition-all duration-300 filter drop-shadow-[0_0_12px_#1D4AE4] stroke-blue-500"
                style={{
                  width: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
                  height: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
                }}
              />

              {/* SketchAnimation that appears on hover */}
              <div className="relative hidden xl:block">
                <SketchAnimation
                  direction={index < 5 ? 'bottomRight' : index === 8 ? 'topLeft' : 'topRight'}
                  title="[Server]"
                  description="We provide hosting and maintenance"
                />
              </div>
            </>
          )}

          <span className="sr-only">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default IconsGrid
