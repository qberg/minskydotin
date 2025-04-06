import BlogPost from '@/components/blog-post/BlogPost'
import BlogHero from '@/components/BlogHero'

const page = () => {
  return (
    <div className="w-full h-full">
      <BlogHero />
      <BlogPost />
    </div>
  )
}

export default page
