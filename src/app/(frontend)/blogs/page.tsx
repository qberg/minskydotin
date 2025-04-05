import BlogsGrid from '@/components/blogs/blogs-grid'
import MinimalHero from '@/components/minimal-hero'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 -z-20">{/* Half grid */}</div>
      <MinimalHero title="/Blogs" count={4} />
      <BlogsGrid />
    </div>
  )
}

export default page
