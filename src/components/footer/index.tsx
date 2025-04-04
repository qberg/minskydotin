import ContactForm from '@/components/footer/contact-form'
import ContactLinks from '@/components/footer/contact-links'
import { quickLinks, servicesLinks } from '@/data/footer-data'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        <h2>Let&apos;s Collaborate!</h2>
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="w-full xl:w-1/2 flex flex-col justify-between">
            <div className="flex gap-10">
              <div className="flex flex-col gap-4">
                <h5>Quick Links</h5>
                <div className="flex flex-col">
                  {quickLinks.map((item, index) => (
                    <Link key={index} href={item.src}>
                      <p className="text-secondary">{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5>Services</h5>
                <div className="flex flex-col">
                  {servicesLinks.map((item, index) => (
                    <Link key={index} href={item.src}>
                      <p className="text-secondary">{item.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col">
              <ContactLinks />
            </div>
          </div>
          <div className="w-full xl:w-1/2 max-w-[850px]">
            <ContactForm />
          </div>
        </div>
        {/* Mobile Contacts */}
        <div className="flex flex-col xl:hidden">
          <ContactLinks />
        </div>
      </div>
    </div>
  )
}

export default Footer
