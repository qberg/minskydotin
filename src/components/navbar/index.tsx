'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import NavMenu from '@/components/navbar/navmenu'
import { navItems } from '@/data/navbar'
import TransitionLink from '@/components/TransitionLink'

const Navbar: React.FC = () => {
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
      <nav className="w-full max-w-[1760px] 3xl:max-w-[2160px] 4xl:max-w-[2200px] mx-auto px-8 py-4 flex justify-between items-center h-[var(--navbar-height)]">
        <TransitionLink href="/" className="flex items-center bg-transparent">
          <div className="relative w-28 h-28 -ml-4 md:ml-0 mt-1">
            <Image src="/logo.svg" alt="Minsky logo" fill priority className="object-cover" />
          </div>
        </TransitionLink>

        <div className="hidden sm:flex  items-center justify-between w-[350px] bg-navbar-background px-2 py-2 rounded-lg">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-light-gray">|</span>}
              <TransitionLink
                href={item.path}
                className="flex px-4 py-1 rounded-sm transition duration-200"
              >
                {item.label}
              </TransitionLink>
            </React.Fragment>
          ))}
        </div>

        <NavMenu />
      </nav>
    </motion.header>
  )
}

export default Navbar
