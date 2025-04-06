interface ParaWithTitle {
  subTitle: string
  para: string
}

interface OtherParaBlockProps {
  heading: string
  otherParas: ParaWithTitle[]
}

const OtherParaBlock = ({ heading, otherParas }: OtherParaBlockProps) => {
  return (
    <section className="flex flex-col gap-4">
      {heading && <h2>{heading}</h2>}
      {otherParas &&
        otherParas.map((para, index) => (
          <div key={index} className="flex flex-col gap-2 text-teritary">
            <h5 className="font-semibold">{para.subTitle}</h5>
            <p>{para.para}</p>
          </div>
        ))}
    </section>
  )
}

export default OtherParaBlock
