import Image from 'next/image'

interface ProjectCardProps {
  name: string
  tags: string[]
  imageSrc: string
  description: string
}

const ProjectCard = ({ name, tags, imageSrc, description }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col gap-4 w-full max-w-md overflow-hidden"
      style={{
        height: 'clamp(29rem, 24.0121rem + 20.307vw, 39.75rem)',
      }}
    >
      <div className="flex justify-between items-center">
        <h3>{name}</h3>
        <p>{tags[0]}</p>
      </div>

      <div
        className="relative rounded-xl w-full mx-auto overflow-hidden"
        style={{ height: 'clamp(23rem, 19.8101rem + 12.987vw, 29.875rem)' }}
      >
        <Image
          src={imageSrc}
          alt={`${name} Project Showcase Image`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <p>{description}</p>
    </div>
  )
}

export default ProjectCard
