'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import NavMenu from '@/components/navbar/navmenu'
import { navItems } from '@/data/navbar'

const Navbar: React.FC = () => {
  const router = useTransitionRouter()
  const pathname = usePathname()
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)
      lastYRef.current = y
    }
  })

  return (
    <motion.header
      variants={{ hidden: { y: '-90%' }, visible: { y: '0%' } }}
      transition={{ duration: 0.25 }}
      animate={isHidden ? 'hidden' : 'visible'}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      className="top-0 left-0 sticky z-50"
    >
      <nav className="w-full max-w-[1760px] mx-auto px-8 py-4 flex justify-between items-center h-[var(--navbar-height)]">
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
                onClick={(e) => {
                  e.preventDefault()
                  router.push(item.path, {
                    onTransitionReady: pageAnimation,
                  })
                }}
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Nav */}
        <NavMenu />
      </nav>
    </motion.header>
  )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)',
      },
      {
        opacity: 0.1,
        scale: 0.9,
        transform: 'translateY(-100px)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    },
  )

  document.documentElement.animate(
    [
      {
        transform: 'translateY(100%)',
      },
      {
        transform: 'translateY(0)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    },
  )
}

export default Navbar
