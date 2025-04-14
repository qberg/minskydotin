import { Project } from '@/types/projects'

const coord: Project = {
  slug: 'coord',
  card: {
    name: 'COORD',
    tags: ['CRM', 'Website'],
    imageSrc: '/coord/im2.png',
    description: 'A  dynamic website and a simple CRM for a craft community platform',
  },
  hero: {
    title: 'A  dynamic website and a simple CRM for a craft community platform',
    imageSrc: '/coord/im2.png',
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
  designDirection: {
    title: 'Approach',
    paragraphs: [
      'The primary design goal for COORD’s design was simplicity and ease of use. With a content-rich platform featuring multiple layers of navigation, every interaction was carefully structured to minimize friction. Users needed a seamless way to browse crafts, understand their options, and take action without confusion.',
      'Navigation was a critical focus—each pathway was designed to reduce the number of steps required to reach the final action: connecting with a COORD representative. The browsing experience was streamlined to ensure that users could explore crafts effortlessly while always having a clear next step.',
      'Visually, the design embraced clean aesthetics and an intuitive layout. A refined color palette and well-structured content ensured clarity, allowing the crafts to take center stage. The result was a platform that balanced visual elegance with functional efficiency.',
      'The website is integrated with Payload CMS, giving the client a drag and drop building blocks for webpages and also the power to change the content at will.',
    ],
    imageSrc: '/coord/coord-hp.png',
    imageAlt: 'Coord Homepage',
    aspectWidth: 1920,
    aspectHeight: 8625,
  },
}

export default coord
