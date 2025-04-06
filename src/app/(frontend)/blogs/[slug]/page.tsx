import BlogPost from '@/components/blog-post/BlogPost'
import BlogHero from '@/components/BlogHero'
import { getBlogBySlug } from '@/lib/blogs'
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="w-full h-full">
      <BlogHero {...blog} />
      <BlogPost blog={blog} />
    </div>
  )
}
