'use client'

import { AnimatePresence, motion } from 'motion/react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blogs' },
]

import NavButton from '@/components/NavButton'
import Link from 'next/link'
import React, { useState } from 'react'

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="relative block sm:hidden">
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute -top-2 -right-2 rounded-lg w-48 min-h-48 p-10 z-10 flex flex-col bg-background origin-top-right"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <ul className="flex flex-col gap-2 flex-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavMenu
