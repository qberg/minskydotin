import ProjectHero from '@/components/ProjectHero'
import TwoImageBlock from '@/components/text-image-blocks/two-image-block'
import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectsPage({ params }: ProjectPageProps) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="w-full h-full">
      <ProjectHero {...project.hero} />
      <TwoImageBlock {...project.overview} />
    </div>
  )
}
