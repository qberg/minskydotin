import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import servicesData from '@/data/service'
import Image from 'next/image'

const Services = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <div style={{ fontSize: 'clamp(2rem,4vw, 3.75rem)' }}>/Our Services</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative bg-card-background rounded-xl overflow-hidden"
              style={{ minHeight: 'clamp(21rem, 40vh, 35rem)' }}
            >
              <DashedGridPattern topLimit="0%" bottomLimit="100%" backgroundSize="60px 60px" />
              <div className="flex flex-col h-full p-8 bg-transparent">
                <div className="flex justify-end">
                  <div
                    className="relative"
                    style={{
                      width: 'clamp(5.5rem, 10vw,11.5rem )',
                      height: 'clamp(5.5rem, 10vw, 11.5rem)',
                    }}
                  >
                    <Image
                      src={service.svgPath}
                      alt={service.title}
                      layout="fill"
                      className={`object-contain`}
                    />
                  </div>
                </div>
                {/*title */}
                <div className="flex flex-col justify-start items-start gap-1 -mt-8 mb-auto">
                  <span className="text-2xs">[{index + 1}]</span>
                  <h3 className="w-[60%] md:w-[90%]">{service.title}</h3>
                </div>
                {/*tags*/}
                <div className="flex flex-col gap-4 mt-8">
                  {service.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-badge-background border border-badge-border w-max rounded-lg py-1 md:py-2 px-2 md:px-4"
                    >
                      <span className="text-2xs text-badge-foreground">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
