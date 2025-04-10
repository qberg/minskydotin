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
    deliverables: 'Website + CRM',
    description: 'A  dynamic website and a simple CRM for a craft community platform.',
    images: ['/c1.svg', '/c2.svg', '/c3.svg', '/c4.svg', '/c5.svg', '/c6.svg', '/c7.svg'],
  },
  {
    slug: 'icdic',
    clientName: 'ICDIC',
    deliverables: 'Website + CMS',
    description: 'Empowering MSMEs with incentives, support schemes, and expert facilitation',
    images: [
      '/icdic/im1.png',
      '/icdic/cover.png',
      '/icdic/im2.png',
      '/icdic/im2.png',
      '/icdic/im1.png',
      '/icdic/cover.png',
    ],
  },
  {
    slug: 'tngss',
    clientName: 'TNGSS',
    deliverables: 'Website + Mobile App',
    description: 'A Feature-Rich App Built for Networking and Navigation',
    images: [
      '/tngss/im1.png',
      '/tngss/im2.png',
      '/tngss/im3.png',
      '/tngss/im4.png',
      '/tngss/im5.png',
      '/tngss/im6.png',
      '/tngss/im4.png',
    ],
  },
]
