import BlurImage from '@/components/BlurImage'
import ParaBlocks from '@/components/text-blocks/para-blocks'
import React from 'react'

interface StickyScrollBlockProps {
  title: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  aspectHeight: number
  aspectWidth: number
}

const StickyScrollBlock: React.FC<StickyScrollBlockProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  aspectHeight,
  aspectWidth,
}) => {
  return (
    <section
      className="w-full max-w-[1760px] mx-auto flex flex-col md:flex-row justify-between relative"
      style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
    >
      <div className="w-full md:w-1/2 md:sticky md:h-fit top-24 flex flex-col gap-4">
        <h2 className="">{title}</h2>
        <ParaBlocks heading="" paragraphs={paragraphs} />
      </div>

      <div className={`w-full mt-2 md:mt-0 md:w-1/2 aspect-[2/9] relative`}>
        <BlurImage src={imageSrc} alt={imageAlt} fill priority className="object-contain" />
      </div>
    </section>
  )
}

export default StickyScrollBlock
