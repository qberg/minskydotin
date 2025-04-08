interface ParaBlocksProps {
  paragraphs: string[]
  heading: string
}

const ParaBlocks = ({ heading, paragraphs }: ParaBlocksProps) => {
  return (
    <div className="flex flex-col gap-4">
      {heading && <h2>{heading}</h2>}
      {paragraphs &&
        paragraphs.map((para, index) => (
          <p key={index} className="text-teritary">
            {para}
          </p>
        ))}
    </div>
  )
}

export default ParaBlocks
