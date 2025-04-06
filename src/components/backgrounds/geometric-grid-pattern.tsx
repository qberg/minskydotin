import React from 'react'

interface GeometricPatternProps {
  size?: number
  granularity?: number
  thickness?: number
  gap?: number
  percentage?: number
  color?: string
  topLimit?: string
  bottomLimit?: string
}

const GeometricPattern = ({
  size = 80,
  granularity = 2,
  thickness = 2,
  gap = 10,
  color = 'rgba(128,128,128,0.1)',
  percentage = 25,
  topLimit = '20%',
  bottomLimit = '80%',
}: GeometricPatternProps) => {
  const patternStyle = {
    width: '100%',
    height: '100%',
    minHeight: '200px',
    '--s': `${size}px`,
    '--n': granularity,
    '--t': `${thickness}px`,
    '--g': `${gap}px`,
    '--c': `${color} ${percentage}%, #0000 0`,
    background: `
      conic-gradient(at var(--g) var(--t), var(--c))
       calc((var(--s)/var(--n) - var(--g) + var(--t))/2) 0/
       calc(var(--s)/var(--n)) var(--s),
      conic-gradient(from 180deg at var(--t) var(--g), var(--c))
       0 calc((var(--s)/var(--n) - var(--g) + var(--t))/2)/
       var(--s) calc(var(--s)/var(--n))
    `,
    maskImage: `
      linear-gradient(
        to bottom,
        transparent 0%,
        transparent ${topLimit},
        black ${topLimit},
        black ${bottomLimit},
        transparent ${bottomLimit},
        transparent 100%
      )
    `,
    WebkitMaskImage: `
      linear-gradient(
        to bottom,
        transparent 0%,
        transparent ${topLimit},
        black ${topLimit},
        black ${bottomLimit},
        transparent ${bottomLimit},
        transparent 100%
      )
    `,
  }

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none h-[45vh]">
      <div className="w-full h-full" style={patternStyle} />
    </div>
  )
}

export default GeometricPattern
