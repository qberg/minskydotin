import { Project } from '@/types/projects'

const tngss: Project = {
  slug: 'tngss',
  card: {
    name: 'TNGSS',
    tags: ['Mobile App'],
    imageSrc: '/tngss/im1.png',
    description: 'A sleek summit app for networking, scheduling, and startup discovery',
  },

  hero: {
    title: 'A Feature-Rich App Built for Networking and Navigation',
    imageSrc: '/tngss/im2.png',

    client: {
      name: 'Client',
      tags: ['StartupTN'],
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
    image1: '/tngss/im3.png',
    image2: '/tngss/im4.png',
  },

  designDirection: {
    title: 'Design Direction',
    paragraphs: [
      'For the TNGSS app, we took a bold, modern approach — going with a dark theme inspired by the energy of space exploration and rocket launches. The theme not only created a premium, futuristic feel but also aligned with the summit’s mission: propelling startups to global heights.',
      'Subtle rocket-inspired elements were integrated across the UI — from iconography to micro-interactions — to evoke motion, ambition, and lift-off.',
      'The navigation was kept clean and intuitive, ensuring users could quickly access sessions, speakers, and networking tools without friction. The design aimed to balance a sense of excitement with clarity and usability — delivering a seamless experience for every kind of attendee.',
    ],
    imageSrc: '/tngss/tngss-mob-hp.png',
    imageAlt: 'TNGSS App Homepage',
    aspectWidth: 1920,
    aspectHeight: 8625,
  },
}

export default tngss
