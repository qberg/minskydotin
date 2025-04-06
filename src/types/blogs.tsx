export interface Block {
  heading: string
  paragraphs: string[]
}

export interface ParaWithTitle {
  subTitle: string
  para: string
}

export interface OtherBlock {
  heading: string
  otherParas: ParaWithTitle[]
}

export interface BlogArticle {
  slug: string
  title: string
  date: string
  author: string
  firstName: string
  linkedInUrl: string
  greeting: string
  tag: string
  imageSrc: string
  blocks: Block[]
  otherBlock: OtherBlock
}
