import BlogsGrid from '@/components/blogs/blogs-grid'
import MinimalHero from '@/components/minimal-hero'
import blogs from '@/data/blogs'
import React from 'react'

const page = () => {
  const blogsCount = blogs.length
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 -z-20">{/* Half grid */}</div>
      <MinimalHero title="/Blogs" count={blogsCount} />
      <BlogsGrid />
    </div>
  )
}

export default page
