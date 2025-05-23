export interface ProductData {
  name: string
  description: string
  imageSrc: string
}

export const productsData: ProductData[] = [
  {
    name: 'Ursa',
    description:
      'A chatbot that seamlessly integrates with your website, understands your business, and delivers instant, accurate responses to customer queries.',
    imageSrc: '/chatpress.svg',
  },
]
