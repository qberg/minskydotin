import { motion } from 'motion/react'

interface TextAnimProps {
  direction: string
  title: string
  description: string
}

// Position classes for different screen sizes using Tailwind's responsive utilities
const classMap: Record<string, string> = {
  topRight: 'absolute -top-18 -right-60 transform -translate-y-full lg:translate-x-1/2',
  bottomRight:
    'absolute top-29 -right-55 transform translate-y-1/2 translate-x-1/4 lg:translate-x-1/2',
  topLeft:
    'absolute -top-18 -left-25 transform -translate-y-full -translate-x-1/4 lg:-translate-x-1/2',
}

const textContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
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
    },
  },
}

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1, // Fixed this from 0 to 1
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const TextAnim = ({ direction, title, description }: TextAnimProps) => {
  return (
    <motion.div
      className={`${classMap[direction]} text-left w-xs pointer-events-none z-10`}
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 variants={titleVariants} className={`font-bold`}>
        {title}
      </motion.h5>
      <motion.p
        variants={descriptionVariants}
        className={` w-full pl-1 mt-1 tracking-tight leading-tight`}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default TextAnim
