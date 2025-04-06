import BlogFooter from '@/components/BlogFooter'
import OtherParaBlock from '@/components/text-blocks/other-para-blocks'
import ParaBlocks from '@/components/text-blocks/para-blocks'
import { BlogArticle } from '@/types/blogs'

interface BlogPostProps {
  blog: BlogArticle
}

const BlogPost = ({ blog }: BlogPostProps) => {
  return (
    <main
      className="w-full max-w-[1760px] mx-auto flex items-center justify-between"
      style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
    >
      <div className="hidden 2xl:block bg-red-500 w-full max-w-sm">Table of contents</div>

      <main className="w-full 2xl:max-w-6xl flex flex-col gap-8 2xl:gap-16 items-center justify-center">
        <article className="w-full flex flex-col gap-8 2xl:gap-16">
          {blog.blocks.map((block, index) => (
            <ParaBlocks key={index} heading={block.heading} paragraphs={block.paragraphs} />
          ))}
          {blog.otherBlock && <OtherParaBlock {...blog.otherBlock} />}
        </article>

        <BlogFooter
          author={blog.firstName}
          greeting={blog.greeting}
          linkedInUrl={blog.linkedInUrl}
        />
      </main>
    </main>
  )
}

export default BlogPost
