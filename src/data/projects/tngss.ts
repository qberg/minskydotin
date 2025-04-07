import { Project } from '@/types/projects'

const tngss: Project = {
  slug: 'tngss',
  card: {
    name: 'TNGSS',
    tags: ['Web App', 'Mobile App'],
    imageSrc: '/pf1.svg',
    description:
      'Expert of the work goes here: Lorem ipsum odor amet, consectetuer adipiscing elit. Magna hendrerit cursus',
  },

  hero: {
    title: 'A  dynamic website and a simple CRM for a craft community platform',
    imageSrc: '/pf2.svg',

    client: {
      name: 'Client',
      tags: ['COORD'],
    },
    services: { name: 'Service Provided', tags: ['UX/UI', 'Development'] },
    deliverables: {
      name: 'Deliverables',
      tags: ['Website', 'CRM'],
    },
    techStack: {
      name: 'Tech Stack',
      tags: ['Nextjs', 'Payload CMS'],
    },
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      'COORD connects artists, designers, and businesses with handcrafted works. The website enables users to browse artist collections, request catalog pieces, or commission custom crafts—whether for personal use, décor projects, or corporate needs.',
      'Minsky was responsible for UX/UI design, strategy, and development, ensuring a seamless experience for both craft seekers and artists. We built a robust CRM and website, allowing COORD to manage artist collaborations, streamline craft sourcing, and handle bulk or custom orders efficiently.',
    ],
    image1: '/coord/overview1.png',
    image2: '/coord/overview2.png',
  },
}

export default tngss
