interface Project {
  name: string
  tags: string[]
  imageSrc: string
  description: string
}

const projects: Project[] = [
  {
    name: 'COORD',
    tags: ['Web App', 'CRM'],
    imageSrc: '/pf1.svg',
    description:
      'Expert of the work goes here: Lorem ipsum odor amet, consectetuer adipiscing elit. Magna hendrerit cursus',
  },
  {
    name: 'TNGSS',
    tags: ['Web App', 'Mobile App'],
    imageSrc: '/pf1.svg',
    description:
      'Expert of the work goes here: Lorem ipsum odor amet, consectetuer adipiscing elit. Magna hendrerit cursus',
  },
  {
    name: 'ICDIC',
    tags: ['Website'],
    imageSrc: '/pf2.svg',
    description:
      'Expert of the work goes here: Lorem ipsum odor amet, consectetuer adipiscing elit. Magna hendrerit cursus',
  },
]

export default projects
