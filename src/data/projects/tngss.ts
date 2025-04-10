import { Project } from '@/types/projects'

const tngss: Project = {
  slug: 'tngss',
  card: {
    name: 'TNGSS',
    tags: ['Mobile App'],
    imageSrc: '/tngss/im1.png',
    description:
      'Expert of the work goes here: Lorem ipsum odor amet, consectetuer adipiscing elit. Magna hendrerit cursus',
  },

  hero: {
    title: 'A Feature-Rich App Built for Networking and Navigation',
    imageSrc: '/pf2.svg',

    client: {
      name: 'Client',
      tags: ['COORD'],
    },
    services: { name: 'Service Provided', tags: ['UX/UI', 'Development'] },
    deliverables: {
      name: 'Deliverables',
      tags: ['Mobile Application'],
    },
    techStack: {
      name: 'Tech Stack',
      tags: ['React Native', 'NodeJS'],
    },
  },
  overview: {
    title: 'Overview',
    paragraphs: [
      'The official mobile app for the Tamil Nadu Global Startup Summit (TNGSS) is your gateway to everything happening at the summit — all in one place.',
      'Designed and developed by Minsky, the app delivers a seamless experience for attendees, investors, startups, and speakers. From networking to scheduling, Minsky ensured every touchpoint on the app aligns with the spirit of innovation and ease.',
    ],
    image1: '/coord/overview1.png',
    image2: '/coord/overview2.png',
  },

  designDirection: {
    title: 'Design Direction',
    paragraphs: [
      'The primary design goal for COORD’s design was simplicity and ease of use. With a content-rich platform featuring multiple layers of navigation, every interaction was carefully structured to minimize friction. Users needed a seamless way to browse crafts, understand their options, and take action without confusion.',
      'Subtle rocket-inspired elements were integrated across the UI — from iconography to micro-interactions — to evoke motion, ambition, and lift-off.',
      'The navigation was kept clean and intuitive, ensuring users could quickly access sessions, speakers, and networking tools without friction. The design aimed to balance a sense of excitement with clarity and usability — delivering a seamless experience for every kind of attendee.',
    ],
    imageSrc: '/coord/coord-hp.png',
    imageAlt: 'Coord Homepage',
    aspectWidth: 1920,
    aspectHeight: 8625,
  },
}

export default tngss
