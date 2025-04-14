import { Project } from '@/types/projects'

const fametn: Project = {
  slug: 'fametn',
  card: {
    name: 'FaMe TN',
    tags: ['Website', 'CMS'],
    imageSrc: '/fametn/preview.png',
    description: 'Showcasing MSME growth with clean and government-friendly website',
  },
  hero: {
    title: 'A modern website for promoting MSME trade and investment in Tamil Nadu',
    imageSrc: '/fametn/preview.png',
    client: {
      name: 'Client',
      tags: ['FaMe TN'],
    },
    services: { name: 'Service Provided', tags: ['UX/UI', 'Development', 'CMS Integration'] },
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
      'FaMe TN (formerly the MSME Trade and Investment Promotion Bureau) was established in 2019 to strengthen trade, investment, and export opportunities in the Micro, Small, and Medium Enterprises (MSME) sector of Tamil Nadu.',
      'We designed and developed a responsive and scalable website using Next.js and Strapi CMS. The platform serves as an information hub and digital interface for MSMEs, government stakeholders, and potential investors, streamlining communication and public engagement.',
    ],
    image1: '/fametn/overview1.png',
    image2: '/fametn/overview2.png',
  },
  designDirection: {
    title: 'Approach',
    paragraphs: [
      'The site needed to feel both authoritative and accessible, reflecting FaMe TN’s mission of empowering local businesses. We opted for a clean layout with a strong focus on information clarity and multilingual support readiness.',
      'Navigation was tailored for different user groups — from business owners to international investors — making it easy to explore incentives, schemes, and policy updates.',
      'The integration with Strapi CMS enables government staff to update announcements, events, and documents without technical assistance, ensuring timely and efficient communication.',
    ],
    imageSrc: '/fametn/fametn-hp.png',
    imageAlt: 'FaMe TN Homepage',
    aspectWidth: 400,
    aspectHeight: 1881,
  },
}

export default fametn
