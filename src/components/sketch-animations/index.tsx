'use client'

import { motion } from 'motion/react'

import { sketchAnimationSVG } from './svg'
import React from 'react'
import TextAnim from './text-anim'

interface SketchAnimationProps {
  direction: string
  title: string
  description: string
}

const SketchAnimation = ({ direction, title, description }: SketchAnimationProps) => {
  const sketch = sketchAnimationSVG[direction]

  return (
    <div className="">
      <svg {...sketch.svgProps}>
        {sketch.paths.map((path, index) => (
          <motion.path
            key={index}
            d={path.d}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: path.duration,
                delay: path.delay,
                ease: 'easeInOut',
              },
              opacity: {
                duration: path.duration,
                delay: path.delay,
              },
            }}
          />
        ))}
      </svg>
      <TextAnim direction={direction} title={title} description={description} />
    </div>
  )
}

export default SketchAnimation
