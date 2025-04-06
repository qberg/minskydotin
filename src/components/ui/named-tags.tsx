interface NamedTagsProps {
  name: string
  tags: string[]
}

const NamedTags = ({ name, tags }: NamedTagsProps) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <h5>{name}</h5>

      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="rounded-lg px-4 py-2 bg-secondary-background border border-teritary/50 text-teritary"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default NamedTags
