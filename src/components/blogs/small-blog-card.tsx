import Image from 'next/image'
import Link from 'next/link'

interface SmallMobileCardProps {
  title: string
  tag: string
  imageSrc: string
  date: string
  slug: string
}

const SmallBlogCard = ({ title, tag, imageSrc, date, slug }: SmallMobileCardProps) => {
  return (
    <Link className="w-full" href={`/blogs/${slug}`}>
      <div className="flex flex-col gap-4 mx-auto">
        <div className="flex justify-between items-center">
          <p className="rounded-lg bg-matrix-green w-fit px-4 py-2 text-black">{tag}</p>
          <p className="text-m text-teritary">{date}</p>
        </div>

        <div
          className="relative border-white border-4 rounded-lg w-full mx-auto"
          style={{ height: 'clamp(10.75rem, 9.7205rem + 4.1912vw, 14.75rem)' }}
        >
          <Image
            src={imageSrc}
            alt={`${title}-Cover Photo`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <h5>{title}</h5>
      </div>
    </Link>
  )
}

export default SmallBlogCard
