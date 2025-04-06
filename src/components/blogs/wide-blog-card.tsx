'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'

interface WideBlogCardProps {
  title: string
  tag: string
  imageSrc: string
  date: string
  slug: string
}

const WideBlogCard = ({ title, tag, imageSrc, date, slug }: WideBlogCardProps) => {
  return (
    <Link className="w-full" href={`/blogs/${slug}`}>
      <motion.div
        className="flex items-center justify-between w-full py-4 px-2 bg-background overflow-hidden relative"
        style={{
          gap: 'clamp(4rem, 2.8418rem + 4.7151vw, 8.5rem)',
        }}
        initial={{
          borderRadius: '0px',
          borderBottom: '1px solid',
          borderTop: '0px solid',
          borderLeft: '0px solid',
          borderRight: '0px solid',
          borderBottomColor: 'var(--minsky-gray)',
        }}
        whileHover={{
          borderRadius: '12px',
          borderWidth: '1px',
          borderTopColor: 'rgba(255,255,255,0.8)',
          transition: { type: 'tween', duration: 0.5, ease: 'easeInOut' },
        }}
      >
        <motion.div
          className="flex items-center justify-between w-full"
          style={{ gap: 'inherit' }}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 0.995,
            transition: { duration: 0.4, ease: 'easeOut' },
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
    </Link>
  )
}

export default WideBlogCard
