import { EmailIcon, IconProps, LinkedInIcon, PhoneIcon } from '@/components/footer/icons'
import React from 'react'

interface ContactItem {
  icon: React.FC<IconProps>
  href: string
  label: string
}

const contacts: ContactItem[] = [
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/minsky-in',
    label: 'LinkedIn',
  },
  {
    icon: EmailIcon,
    href: 'mailto:info@minsky.in',
    label: 'info@minsky.in',
  },
  {
    icon: PhoneIcon,
    href: 'tel:+918925196011',
    label: '+918925196011',
  },
]

const ContactLinks = () => {
  return (
    <>
      {contacts.map((contact, index) => {
        const Icon = contact.icon
        return (
          <a
            key={index}
            href={contact.href}
            className={`flex items-center justify-start gap-2 group hover:text-matrix-green`}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <Icon className="text-white group-hover:text-matrix-green transition-colors" />
            <h5>{contact.label}</h5>
          </a>
        )
      })}
    </>
  )
}

export default ContactLinks
