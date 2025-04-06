import allBlogs from '@/data/blogs'
import { BlogArticle } from '@/types/blogs'

export const getBlogBySlug = (slug: string): BlogArticle | undefined => {
  return allBlogs.find((blog) => blog.slug === slug)
}
