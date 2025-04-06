import NamedTags from '@/components/ui/named-tags'
import { ProjectTags } from '@/types/projects'
import Image from 'next/image'

interface ProjectHeroProps {
  title: string
  imageSrc: string
  client: ProjectTags
  services: ProjectTags
  deliverables: ProjectTags
  techStack: ProjectTags
}

const ProjectHero = ({
  title,
  imageSrc,
  client,
  services,
  deliverables,
  techStack,
}: ProjectHeroProps) => {
  const tagGroups = [client, services, deliverables, techStack]
  return (
    <header className="relative md:min-h-[calc(100vh-var(--navbar-height))] flex justify-center items-center">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col md:flex-row"
        style={{
          padding: 'clamp(1.5rem, 1.5vw, 2.5rem)',
          gap: 'clamp(2rem, 1.3566rem + 2.6195vw, 4.5rem)',
        }}
      >
        <div
          className="relative w-full order-2 md:w-1/2 md:max-w-4xl lg:order-1 rounded-xl overflow-hidden"
          style={{ height: 'clamp(23rem, 17.2736rem + 23.3137vw, 45.25rem)' }}
        >
          <Image
            src={imageSrc}
            alt={`${title}-Cover Photo`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 md:gap-8 order-1 md:order-2">
          <h2 className="w-full max-w-2xl">{title}</h2>

          <div className="flex flex-col gap-2 md:gap-4">
            {tagGroups.map((group, index) => (
              <NamedTags key={index} name={group.name} tags={group.tags} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default ProjectHero
