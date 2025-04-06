import GeometricPattern from '@/components/backgrounds/geometric-grid-pattern'
import intentDrivenBlog from '@/data/intent-driven'
import Image from 'next/image'

interface BlogHeroProps {
  title: string
  date: string
  author: string
  tag: string
  imageSrc: string
}

const BlogHero = ({ title, date, author, tag, imageSrc }: BlogHeroProps) => {
  return (
    <header className="relative">
      <GeometricPattern topLimit="5%" bottomLimit="95%" />
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <div className="flex items-center justify-between">
          <p className="rounded-lg bg-matrix-green w-fit px-4 py-2 text-black">{tag}</p>
          <p className="text-secondary">{date}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="w-full max-w-4xl">{title}</h1>
          <p>A blog by {author}</p>
        </div>

        <div
          className="relative w-full"
          style={{ height: 'clamp(14rem, 6.0216rem + 32.482vw, 45rem)' }}
        >
          <Image
            src={imageSrc}
            alt={`${title}-Cover Photo`}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

export default BlogHero

{
  /* Bit beauty Image

          style={{ height: 'clamp(14rem, 12.1984rem + 7.3346vw, 21rem)' }}
          style={{ height: 'clamp(14rem, 6.0216rem + 32.482vw, 45rem)' }}
          */
}
