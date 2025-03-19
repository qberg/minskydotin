'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/clients' },
  { label: 'Blog', path: '/blog' },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className="top-0 left-0">
      <nav className="container mx-auto px-8 py-4 flex justify-between h-[var(--navbar-height)]">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Minsky logo" width={80} height={40} priority />
        </Link>

        <div className="hidden sm:flex  items-center justify-between w-[350px] bg-secondary-background px-2 py-2 rounded-lg">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-light-gray">|</span>}
              <Link
                href={item.path}
                className={`flex px-4 py-1 rounded-sm transition duration-200 ${
                  pathname === item.path
                    ? 'bg-background text-primary'
                    : 'text-teritary hover:bg-background/50 hover:text-primary/65'
                }`}
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Nav */}
        <button className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
