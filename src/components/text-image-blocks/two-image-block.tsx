import ParaBlocks from '@/components/text-blocks/para-blocks'
import Image from 'next/image'

interface TwoImageBlockProps {
  title: string
  paragraphs: string[]
  image1: string
  image2: string
}

const TwoImageBlock = ({ title, paragraphs, image1, image2 }: TwoImageBlockProps) => {
  return (
    <section className="relative flex justify-center items-center">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{
          padding: 'clamp(1.5rem, 1.5vw, 2.5rem)',
          gap: 'clamp(2rem, 1.3566rem + 2.6195vw, 4.5rem)',
        }}
      >
        {/*text block */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <h2 className="w-full md:w-2/5 md:max-w-[712px]">{title}</h2>
          <div className="w-full md:w-3/5 md:max-w-[968px]">
            <ParaBlocks heading="" paragraphs={paragraphs} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div
            className="relative w-full md:w-2/5 md:max-w-[712px] rounded-xl overflow-hidden"
            style={{ height: 'clamp(16.6875rem, 12.0066rem + 19.057vw, 34.875rem)' }}
          >
            <Image
              src={image1}
              alt={`${title}-Overview Photo`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div
            className="relative w-full md:w-3/5 md:max-w-[968px] rounded-xl overflow-hidden"
            style={{ height: 'clamp(16.6875rem, 12.0066rem + 19.057vw, 34.875rem)' }}
          >
            <Image
              src={image2}
              alt={`${title}-Overview Photo 2`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoImageBlock
