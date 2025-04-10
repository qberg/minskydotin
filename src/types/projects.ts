export interface ProjectTags {
  name: string
  tags: string[]
}

export interface ProjectHeroBlock {
  title: string
  imageSrc: string
  client: ProjectTags
  services: ProjectTags
  deliverables: ProjectTags
  techStack: ProjectTags
}

export interface ProjectCard {
  name: string
  tags: string[]
  imageSrc: string
  description: string
}

export interface ProjectOverviewBlock {
  title: string
  paragraphs: string[]
  image1: string
  image2: string
}

export interface ProjectTextBlock {
  title: string
  paragraphs: string[]
}

export interface ProjectStickyBlock {
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  aspectHeight: number
  aspectWidth: number
}

export interface Project {
  slug: string
  card: ProjectCard
  hero: ProjectHeroBlock
  overview: ProjectOverviewBlock
  designDirection: ProjectStickyBlock
}
