import { Project } from '@/types/projects'

const tngssWeb: Project = {
  slug: 'tngss-web',
  card: {
    name: 'TNGSS',
    tags: ['Ticketing Plateform'],
    imageSrc: '/tngss/web-cover.png',
    description: 'Crafting a Dynamic Website for a Global-Scale Event',
  },

  hero: {
    title: 'Crafting a Dynamic Website for a Global-Scale Event',
    imageSrc: '/tngss/web-cover.png',

    client: {
      name: 'Client',
      tags: ['StartupTN'],
    },
    services: { name: 'Service Provided', tags: ['UX/UI', 'Development'] },
    deliverables: {
      name: 'Deliverables',
      tags: ['Website', 'Booking System'],
    },
    techStack: {
      name: 'Tech Stack',
      tags: ['React Native', 'NodeJS'],
    },
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      'The Tamil Nadu Global Startup Summit (TNGSS) website was built to do more than inform — it was crafted to inspire action. From ticket sales to showcasing the scale of the summit, every element was designed to drive engagement. ',
      'Minsky led the end-to-end website design and development — translating the summit’s energy, ambition, and global outlook into a high-impact digital experience.',
    ],
    image1: '/tngss/im5.png',
    image2: '/tngss/im6.png',
  },

  designDirection: {
    title: 'Approach',
    paragraphs: [
      'The TNGSS website was designed to feel like the launchpad it represents — bold, energetic, and future-facing.',
      'Minsky led the design with a clear intent: To build a digital experience that matches the scale, ambition, and global outlook of the summit.',
      'We took inspiration from tech conferences, rocket launches, and futuristic grids to create a sense of motion and momentum. The visual language is dominated by deep blacks, neon gradients, and sharp contrasts — all working together to create an immersive, high-stakes atmosphere',
    ],
    imageSrc: '/tngss/tngss-web-hp.png',
    imageAlt: 'TNGSS App Homepage',
    aspectWidth: 400,
    aspectHeight: 3828,
  },
}

export default tngssWeb
