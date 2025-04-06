import allProjects from '@/data/projects/index'
import { Project } from '@/types/projects'

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find((project) => project.slug === slug)
}
