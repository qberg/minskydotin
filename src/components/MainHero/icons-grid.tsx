'use client'
import Image from 'next/image'
import { iconComponents, type IconComponent } from '@/data/main-hero/icons'
import { BottomRightAnim, TopLeftAnim, TopRightAnim } from '@/components/sketch-animations/new'

interface IconsGridProps {
  icons: IconComponent[]
  hoveredIcon: number | null
  setHoveredIcon: (index: number | null) => void
}

const IconsGrid = ({ icons, hoveredIcon, setHoveredIcon }: IconsGridProps) => {
  const getAnimationComponent = (index: number) => {
    if (index < 5) return BottomRightAnim
    if (index === 8) return TopLeftAnim
    return TopRightAnim
  }

  const iconSizeStyle = {
    width: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
    height: 'clamp(2.625rem, 1.692rem + 3.7983vw, 6.25rem)',
  }

  const gridPaddingStyle = {
    padding: 'clamp(0.25rem, 1vw, 1rem)',
  }

  const gridGapStyle = {
    gap: 'clamp(0.5rem, 2vw, 1.5rem)',
  }

  return (
    <div
      className="col-span-9 w-full grid grid-cols-3 place-items-center lg:grid-cols-9"
      style={gridGapStyle}
    >
      {icons.map(({ Icon, LucideIcon, label }, index) => {
        const isHovered = hoveredIcon === index

        const AnimationComponent = isHovered ? getAnimationComponent(index) : null

        return (
          <div
            key={index}
            className="flex items-center justify-center sm:justify-start transition-all hover:cursor-pointer group relative"
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={gridPaddingStyle}
          >
            {/* Static image (shown when not hovered) */}
            {!isHovered && (
              <div className="relative aspect-[0.78/1] w-[3.25rem] md:w-[2.75rem] lg:w-[3.75rem] sxl:w-[5.5rem] 2xl:w-[6.5rem] 3xl:w-[6.75rem] 4xl:w-[7rem]">
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

            {/* Lucide icon and animation (shown when hovered) */}
            {isHovered && (
              <div className="relative">
                <LucideIcon
                  aria-hidden={true}
                  className="text-primary transition-all duration-300 filter drop-shadow-[0_0_12px_#1D4AE4] stroke-blue-500"
                  style={iconSizeStyle}
                />

                {/* Animation component - only shown on xl screens */}
                {AnimationComponent && (
                  <div className="relative hidden">
                    <AnimationComponent
                      title={`[${iconComponents[hoveredIcon].label}]`}
                      description={iconComponents[hoveredIcon].desc}
                    />
                  </div>
                )}
              </div>
            )}

            <span className="sr-only">{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default IconsGrid
