import BlurImage from '@/components/BlurImage'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  tags: string[]
  imageSrc: string
  description: string
  slug: string
}

const ProjectCard = async ({ name, tags, imageSrc, description, slug }: ProjectCardProps) => {
  return (
    <Link
      href={`/portfolio/${slug}`}
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
        <BlurImage
          src={imageSrc}
          alt={`${name} Project Showcase Image`}
          fill
          priority
          className="object-cover"
          sizes="30vw"
        />
      </div>

      <p>{description}</p>
    </Link>
  )
}

export default ProjectCard
