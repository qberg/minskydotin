'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'

import ContactForm from '@/components/footer/contact-form'
import ContactLinks from '@/components/footer/contact-links'
import { quickLinks, servicesLinks } from '@/data/footer-data'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

const Footer = () => {
  const headerRef = useRef(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const mobileContactRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const linksInView = useInView(linksRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })
  const mobileContactInView = useInView(mobileContactRef, { once: true, amount: 0.3 })
  const formInView = useInView(formRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          Let&apos;s Collaborate!
        </motion.h2>
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="w-full xl:w-1/2 flex flex-col justify-between">
            <motion.div
              ref={linksRef}
              initial="hidden"
              animate={linksInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="flex gap-10"
            >
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                <h5>Quick Links</h5>
                <motion.div variants={staggerContainer} className="flex flex-col">
                  {quickLinks.map((item, index) => (
                    <Link key={index} href={item.src}>
                      <p className="text-secondary">{item.label}</p>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                <h5>Services</h5>
                <motion.div variants={staggerContainer} className="flex flex-col">
                  {servicesLinks.map((item, index) => (
                    <Link key={index} href={item.src}>
                      <p className="text-secondary">{item.label}</p>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="hidden xl:flex flex-col"
            >
              <ContactLinks />
            </motion.div>
          </div>
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={scaleIn}
            className="w-full xl:w-1/2 max-w-[850px]"
          >
            <ContactForm />
          </motion.div>
        </div>
        {/* Mobile Contacts */}
        <motion.div
          ref={mobileContactRef}
          initial="hidden"
          animate={mobileContactInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="flex flex-col xl:hidden"
        >
          <ContactLinks />
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
