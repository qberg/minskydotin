import PortfolioHero from '@/components/portfolio-hero'
import ProjectsGrid from '@/components/sections/portfolio/projects-grid'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full">
      <PortfolioHero />
      <ProjectsGrid />
    </div>
  )
}

export default page
