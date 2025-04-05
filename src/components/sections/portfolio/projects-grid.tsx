import ProjectCard from '@/components/ui/project-card'
import projects from '@/data/projects'
import Image from 'next/image'

const ProjectsGrid = () => {
  return (
    <section
      className="flex flex-col items-center justify-center relative w-full max-w-[1760px] mx-auto"
      style={{
        padding: 'clamp(1.5rem, 1.5vw, 2.5rem)',
        gap: 'clamp(1rem, 0.072rem + 3.778vw, 3rem)',
      }}
    >
      <div className="w-full flex items-center justify-end">Filter</div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        style={{
          gap: 'clamp(3.75rem, -1.0059rem + 19.3625vw, 14rem)',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
