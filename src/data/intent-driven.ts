interface Block {
  heading: string
  paragraphs: string[]
}

interface ParaWithTitle {
  subTitle: string
  para: string
}

interface OtherBlock {
  heading: string
  otherParas: ParaWithTitle[]
}

interface BlogArticle {
  title: string
  date: string
  author: string
  tag: string
  imageSrc: string
  blocks: Block[]
  otherBlock: OtherBlock
}

const intentDrivenBlog: BlogArticle = {
  title: 'The future of UX: Why intent-driven design reshapes digital products',
  date: '17/03/2025',
  author: 'Shwetha SenthilKumar',
  tag: 'Design',
  imageSrc: '/intent/p1.svg',
  blocks: [
    {
      heading: '',
      paragraphs: [
        'Most users don\'t follow a predefined path when navigating a website or using a mobile app. Instead, they have intent. Whether searching for "black sneakers" or a specific SAAS feature, they expect the experience to adapt to their needs in real time.',

        'How often do users follow "Men\'s Shoes" → "Sneakers" → "Nike"? Not often. Instead, most users head directly to the search bar and type "Nike Black Sneakers." At that moment, the user\'s intent is clear. When the user knows exactly what they want, and the site doesn\'t deliver that, the user experience suffers. At times like this, a goal-based interaction- where users are taken through specific steps- might not cut it anymore.',
      ],
    },
    {
      heading: 'The Shift to Intent-Driven UX',
      paragraphs: [
        'Traditional goal-based design structures the user journey in a linear fashion. Users follow a predefined path to complete an action—like booking a flight or purchasing a product. This model assumes all users take the same logical steps, but in reality, users are unpredictable. Intent-based design, on the other hand, recognizes user behavior as dynamic and adapts in real-time.',

        'For example, an e-commerce store with a goal-based design may guide users through product categories. However, an intent-driven approach surfaces relevant products immediately based on user history, search behavior, or contextual cues. This shift reduces cognitive load and improves engagement.',
      ],
    },
    {
      heading: 'Why Intent Matters in UX',
      paragraphs: [
        'User intent is at the core of seamless digital experiences. When designers map out the user’s intent rather than their journey, interactions become more intuitive. With advancements in AI and predictive analysis, digital products can now anticipate user needs before they explicitly state them. Machine learning models analyze user behavior, preferences, and contextual data to tailor experiences dynamically.',

        'For example, Spotify’s Discover Weekly playlist curates songs based on listening habits, demonstrating how intent-driven design can enhance engagement.',
      ],
    },
  ],
  otherBlock: {
    heading: 'Common Misconceptions About Intent-Based Design',
    otherParas: [
      {
        subTitle: " It\'s Not Just Personalization",
        para: 'Intent-driven design goes beyond personalization. While personalization tailors experiences based on past behavior, intent-based design reacts to real-time needs, making digital products more responsive and adaptive.',
      },
      {
        subTitle: 'Over-Engineering the User Journey',
        para: 'Some believe intent-driven design requires complex AI models and heavy engineering. In reality, even simple solutions—like intelligent search suggestions or context-aware UI changes—can vastly improve user experience.',
      },
    ],
  },
}

export default intentDrivenBlog
