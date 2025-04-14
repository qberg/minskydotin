import BlurImage from '@/components/BlurImage'
import ProjectCardClient from '@/components/ui/project-card-client'

interface ProjectCardProps {
  name: string
  tags: string[]
  imageSrc: string
  description: string
  slug: string
}

const ProjectCard = async ({ name, tags, imageSrc, description, slug }: ProjectCardProps) => {
  return (
    <ProjectCardClient name={name} tags={tags} description={description} slug={slug}>
      <BlurImage
        src={imageSrc}
        alt={`${name} Project Showcase Image`}
        fill
        priority
        className="object-cover"
        sizes="30vw"
      />
    </ProjectCardClient>
  )
}

export default ProjectCard
