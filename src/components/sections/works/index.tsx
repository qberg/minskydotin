import workData from '@/data/works-data'

const Works = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <h2>/Our Works</h2>
        <div className="flex flex-col gap-8">
          {workData.map((work, index) => (
            <div
              key={index}
              style={{ minHeight: 'clamp(7rem, 8vh, 11rem)' }}
              className="border-b border-widecard-border py-8 px-0 xl:py-8 xl:pl-12"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col justify-start items-start">
                  <span className="text-2xs text-widecard-secondary">[{`0${index + 1}`}]</span>
                  <h3> {work.clientName}</h3>
                  <span className="text-2xs text-widecard-secondary">{work.deliverables}</span>
                </div>
                <div className="hidden xl:block">{work.description}</div>
                <div>Images</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
