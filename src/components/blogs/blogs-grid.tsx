'use client'

import SmallBlogCard from '@/components/blogs/small-blog-card'
import WideBlogCard from '@/components/blogs/wide-blog-card'
import blogs from '@/data/blogs'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const BlogsGrid = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    if (typeof window !== 'undefined') {
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const cardVariants = {
    out: {
      opacity: 0,
      y: 30,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.5,
      },
    },
  }

  return (
    <section
      className="flex flex-col items-center justify-center relative w-full max-w-[1760px] mx-auto"
      style={{
        padding: 'clamp(1.5rem, 1.5vw, 2.5rem)',
        gap: 'clamp(1rem, 0.072rem + 3.778vw, 3rem)',
      }}
    >
      <div className="w-full flex items-center justify-end">Filter</div>

      <div className="w-full flex flex-col items-center justify-center gap-16 xl:gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="w-full"
            variants={cardVariants}
            initial="out"
            whileInView="in"
            viewport={{ once: true }}
          >
            {isMobile ? <SmallBlogCard {...blog} /> : <WideBlogCard {...blog} />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BlogsGrid
