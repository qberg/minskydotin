import GeometricPattern from '@/components/backgrounds/geometric-grid-pattern'
import MinimalHero from '@/components/minimal-hero'
import ProjectsGrid from '@/components/sections/portfolio/projects-grid'
import projects from '@/data/projects'
import React from 'react'

const page = () => {
  const projectsCount = projects.length
  return (
    <div className="w-full h-full relative">
      <GeometricPattern topLimit="5%" bottomLimit="95%" />
      <MinimalHero title="/Our Works" count={projectsCount} />
      <ProjectsGrid />
    </div>
  )
}

export default page
