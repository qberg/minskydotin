import { LucideIcon } from 'lucide-react'
import React from 'react'

interface HatchedIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  size?: number
  color?: string
  strokeWidth?: number
  hatchAngle?: number
  hatchSpacing?: number
  hatchWidth?: number
}

const HatchedIcon = ({
  icon: Icon,
  size = 44,
  color = '#fff',
  strokeWidth = 1.5,
  hatchAngle = 45,
  hatchSpacing = 2,
  hatchWidth = 1,
  className,
  ...divProps
}: HatchedIconProps) => {
  const patternId = `hatched-pattern-${Math.random().toString(36).substring(2, 9)}`

  return (
    <div className={className} {...divProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={0}
      >
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={hatchSpacing}
            height={hatchSpacing}
            patternTransform={`rotate(${hatchAngle})`}
          >
            <line x1="0" y1="0" x2="0" y2={hatchSpacing} stroke={color} strokeWidth={hatchWidth} />
          </pattern>
        </defs>
        <Icon
          size={size}
          stroke={`url(#${patternId})`}
          fill="none"
          strokeWidth={8} // Make stroke wider to show pattern better
        />
      </svg>
    </div>
  )
}

export default HatchedIcon
