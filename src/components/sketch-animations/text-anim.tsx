'use client'
import { motion } from 'motion/react'

interface TextAnimProps {
  direction: string
  title: string
  description: string
}

const classMap: Record<string, string> = {
  topRight: 'absolute -top-40 -left-16 translate-x-32',
  bottomRight: 'absolute top-38 -left-18 translate-x-28',
  topLeft: 'absolute -top-40 -left-36 -translate-x-18',
}

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.2,
    },
  },
}

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.0,
    },
  },
}

const TextAnim = ({ direction, title, description }: TextAnimProps) => {
  return (
    <div className={classMap[direction]}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="font-bold text-primary"
      >
        {title}
      </motion.div>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-sm mt-1 text-primary"
      >
        {description}
      </motion.div>
    </div>
  )
}

export default TextAnim
