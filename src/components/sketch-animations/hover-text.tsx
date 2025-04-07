import { motion } from 'motion/react'

const textContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
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

interface HoverTextProps {
  title: string
  description: string
  className?: string
}

const HoverText = ({ title, description, className = 'text-right -mt-1' }: HoverTextProps) => {
  return (
    <motion.div
      className={className}
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 className="font-bold" variants={titleVariants}>
        {title}
      </motion.h5>
      <motion.p className="w-full" variants={descriptionVariants}>
        {description}
      </motion.p>
    </motion.div>
  )
}

export default HoverText
