'use client'

import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import Image from 'next/image'

interface ProductProps {
  name: string
  description: string
  imageSrc: string
  index: number
  isMobile: boolean
}

const Product = ({ name, description, imageSrc, index, isMobile }: ProductProps) => {
  return (
    <div
      className="flex flex-col xl:flex-row xl:items-center"
      style={{ gap: 'clamp(1rem, 3vw, 3rem)' }}
    >
      <div className="w-full xl:w-3/5 order-1 xl:order-2">
        <div
          className="relative flex items-center justify-center bg-card-background rounded-xl overflow-hidden hover:cursor-pointer"
          style={{ minHeight: 'clamp(25rem, 60vh, 40rem)' }}
        >
          <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="45px 45px" />
          <div className="relative w-full h-full min-h-[400px] xl:min-h-[500px]">
            <Image
              src={imageSrc}
              alt="Chatpress screens"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* Product desc */}
      <div className="flex flex-col gap-2 xl:gap-4 xl:w-2/5 order-2 xl:order-1">
        <h3>{name}</h3>
        <p className="text-secondary w-full xl:w-lg">{description}</p>
      </div>
    </div>
  )
}

export default Product
