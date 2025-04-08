'use client'

import BlogFooter from '@/components/BlogFooter'
import TableOfContents from '@/components/table-of-contents'
import OtherParaBlock from '@/components/text-blocks/other-para-blocks'
import ParaBlocks from '@/components/text-blocks/para-blocks'
import TrackedSection from '@/components/TrackedSection'
import { TOCContext, useTOCContextValues } from '@/lib/TOCContext'
import { BlogArticle } from '@/types/blogs'

interface BlogPostProps {
  blog: BlogArticle
}

const BlogPost = ({ blog }: BlogPostProps) => {
  const { values } = useTOCContextValues()
  return (
    <TOCContext.Provider value={values}>
      <main
        className="w-full max-w-[1760px] mx-auto flex justify-between"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <TableOfContents />

        <div className="w-full 2xl:max-w-6xl flex flex-col gap-8 2xl:gap-16 items-center justify-center">
          <article className="w-full flex flex-col gap-8 2xl:gap-16">
            <div className="flex flex-col gap-4 text-teritary">
              {blog.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            {blog.blocks.map((block, index) => (
              <TrackedSection
                key={index}
                sectionId={index}
                tocTitle={block.heading}
                isFirst={index === 0}
              >
                <ParaBlocks key={index} heading={block.heading} paragraphs={block.paragraphs} />
              </TrackedSection>
            ))}
            {blog.otherBlock && (
              <TrackedSection
                sectionId={blog.blocks.length}
                tocTitle={blog.otherBlock.heading}
                isLast
              >
                <OtherParaBlock {...blog.otherBlock} />
              </TrackedSection>
            )}
          </article>

          <BlogFooter
            author={blog.firstName}
            greeting={blog.greeting}
            linkedInUrl={blog.linkedInUrl}
          />
        </div>
      </main>
    </TOCContext.Provider>
  )
}

export default BlogPost
