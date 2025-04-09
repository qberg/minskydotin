export interface WorkData {
  slug: string
  clientName: string
  deliverables: string
  description: string
  images: string[]
}

export const workData: WorkData[] = [
  {
    slug: 'coord',
    clientName: 'COORD',
    deliverables: 'Website + CMS',
    description:
      'A chatbot that seamlessly integrates with your website, understands your business,  queries.',
    images: ['/c1.svg', '/c2.svg', '/c3.svg', '/c4.svg', '/c5.svg', '/c6.svg', '/c7.svg'],
  },
  {
    slug: 'icdic',
    clientName: 'ICDIC',
    deliverables: 'Website + CMS',
    description:
      'A chatbot that seamlessly integrates with your website, understands your business,  queries.',
    images: ['/c1.svg', '/c2.svg', '/c3.svg', '/c4.svg', '/c5.svg', '/c6.svg', '/c7.svg'],
  },
  {
    slug: 'tngss',
    clientName: 'TNGSS',
    deliverables: 'Website + CMS',
    description:
      'A chatbot that seamlessly integrates with your website, understands your business,  queries.',
    images: ['/c1.svg', '/c2.svg', '/c3.svg', '/c4.svg', '/c5.svg', '/c6.svg', '/c7.svg'],
  },
]
