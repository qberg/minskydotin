import { sketchAnimationSVG } from '@/components/sketch-animations/svg'
import { motion } from 'motion/react'

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
  },
}

interface AnimatedSvgProps {
  direction: string
  onAnimationComplete: () => void
}

const ArrowAnim = ({ direction, onAnimationComplete }: AnimatedSvgProps) => {
  const arrow = sketchAnimationSVG[direction]

  return (
    <svg {...arrow.svgProps}>
      {arrow.paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
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
          onAnimationComplete={onAnimationComplete}
        />
      ))}
    </svg>
  )
}

export default ArrowAnim
