export interface ServiceData {
  title: string
  svgPath: string
  tags: string[]
}

export const servicesData: ServiceData[] = [
  {
    title: 'Design',
    svgPath: '/s1.svg',
    tags: ['UX/UI Design', 'Intent-driven Design', 'Visual Identity'],
  },
  {
    title: 'Software Development',
    svgPath: '/s2.svg',
    tags: ['Web Application', 'Mobile Application', 'Website'],
  },
  {
    title: 'Deploy',
    svgPath: 's3.svg',
    tags: ['High Availability', 'Zero Downtime Deployments', 'Go-Live Support and Maintenance'],
  },
]
