import GeometricPattern from '@/components/backgrounds/geometric-grid-pattern'
import BlogsGrid from '@/components/blogs/blogs-grid'
import MinimalHero from '@/components/minimal-hero'
import blogs from '@/data/blogs'
import React from 'react'

const page = () => {
  const blogsCount = blogs.length
  return (
    <div className="w-full h-full relative">
      <GeometricPattern topLimit="5%" bottomLimit="95%" />
      <MinimalHero title="/Blogs" count={blogsCount} />
      <BlogsGrid />
    </div>
  )
}

export default page
