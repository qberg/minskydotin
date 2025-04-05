'use client'
import Image from 'next/image'
import { motion } from 'motion/react'

interface WideBlogCardProps {
  title: string
  tag: string
  imageSrc: string
  date: string
}

const WideBlogCard = ({ title, tag, imageSrc, date }: WideBlogCardProps) => {
  return (
    <motion.div
      className="flex items-center justify-between w-full py-4 bg-background overflow-hidden relative"
      style={{ gap: 'clamp(4rem, 2.8418rem + 4.7151vw, 8.5rem)' }}
      initial={{
        borderRadius: '0px',
        borderBottom: '1px solid',
        borderTop: '0px solid',
        borderLeft: '0px solid',
        borderRight: '0px solid',
        borderBottomColor: 'var(--minsky-gray)',
      }}
      whileHover={{
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: 'var(--minsky-gray)',
        borderTopColor: 'rgba(255,255,255,0.8)',
        scale: 1.01,
        y: -4,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Left border gradient pseudo-element */}
      <motion.div
        className="flex items-center justify-between w-full"
        style={{ gap: 'inherit' }}
        initial={{ scale: 1 }}
        whileHover={{
          scale: 0.975,
          transition: { duration: 0.35, ease: 'easeOut' },
        }}
      >
        <div className="relative border-white border-4 rounded-lg w-full max-w-md h-[232px]">
          <Image
            src={imageSrc}
            alt={`${title}-Cover Photo`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <p className="rounded-lg bg-matrix-green w-fit px-4 py-2 text-black">{tag}</p>

        <h5 className="text-teritary">{title}</h5>

        <p className="text-m text-teritary">{date}</p>
      </motion.div>
    </motion.div>
  )
}

export default WideBlogCard
