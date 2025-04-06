interface BlogFooterProps {
  author: string
  greeting: string
  linkedInUrl: string
}

const BlogFooter = ({ author, greeting, linkedInUrl }: BlogFooterProps) => {
  return (
    <footer className="w-full border-t border-secondary/50 border-dashed text-teritary">
      <p className="mt-8">
        Enjoyed the read? Share it with a friend on{' '}
        <a href="https://www.linkedin.com/" className="text-matrix-green">
          LinkedIn
        </a>{' '}
        or{' '}
        <a href="https://x.com/" className="text-matrix-green">
          X
        </a>
        . Got thoughts, feedback, or just want to say hello? Drop us a line at{' '}
        <a href="mailto:info@minsy.in" className="text-matrix-green">
          info@minsky.in
        </a>
        . Want to connect with the author? Reach out to{' '}
        <a href={linkedInUrl} className="text-matrix-green">
          {author}
        </a>{' '}
        — she&apos;d love to hear from you! ({greeting})
      </p>
    </footer>
  )
}

export default BlogFooter
