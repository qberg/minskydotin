import { Project } from '@/types/projects'

const icdic: Project = {
  slug: 'icdic',
  card: {
    name: 'ICDIC',
    tags: ['Website', 'CMS'],
    imageSrc: '/icdic/cover.png',
    description:
      'A public-facing platform for MSME support, offering guidance, incentives, and access to vital resources for entrepreneurs across Tamil Nadu.',
  },
  hero: {
    title: 'Empowering MSMEs with incentives, support schemes, and expert facilitation',
    imageSrc: '/icdic/preview.png',
    client: {
      name: 'Client',
      tags: ['ICDIC'],
    },
    services: {
      name: 'Service Provided',
      tags: ['UX/UI', 'Development', 'CMS Integration'],
    },
    deliverables: {
      name: 'Deliverables',
      tags: ['Website', 'CMS'],
    },
    techStack: {
      name: 'Tech Stack',
      tags: ['Next.js', 'Strapi CMS'],
    },
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      'The Industries Commissionerate and Directorate of Industries and Commerce (ICDIC) plays a crucial role in the MSME ecosystem of Tamil Nadu. It offers support across the entire MSME journey—from startup guidance to export facilitation.',
      'We created a centralized digital platform to clearly communicate the breadth of ICDIC’s services. The site helps MSMEs access financial schemes, land acquisition support, marketing aid, and business facilitation. It also allows easy discovery of policy documents, contact information, and program updates.',
    ],
    image1: '/icdic/overview1.png',
    image2: '/icdic/overview2.png',
  },
  designDirection: {
    title: 'Design Direction',
    paragraphs: [
      'The site was designed to be direct and functional, with a strong emphasis on accessibility. Icons and bold typographic cues guide users through a wide set of services without feeling overwhelmed.',
      'Given the site’s government backing and diverse audience, the interface was developed with clarity and trust in mind. Users can quickly identify their needs—whether financial assistance or export facilitation—and act with confidence.',
      'We also built a CMS-backed system using Strapi, empowering officials to manage updates, events, and scheme-related content with ease, ensuring the platform stays fresh and relevant.',
    ],
    imageSrc: '/icdic/icdic-hp.png',
    imageAlt: 'ICDIC Homepage',
    aspectWidth: 2048,
    aspectHeight: 4750,
  },
}

export default icdic
