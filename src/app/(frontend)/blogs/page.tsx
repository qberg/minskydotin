import GeometricPattern from '@/components/backgrounds/geometric-grid-pattern'
import BlogsGrid from '@/components/blogs/blogs-grid'
import MinimalHero from '@/components/minimal-hero'
import allBlogs from '@/data/blogs'
import React from 'react'

const page = () => {
  const blogsCount = allBlogs.length
  return (
    <div className="w-full h-full relative">
      <GeometricPattern topLimit="5%" bottomLimit="95%" />
      <MinimalHero title="/Blogs" count={blogsCount} />
      <BlogsGrid />
    </div>
  )
}

export default page
