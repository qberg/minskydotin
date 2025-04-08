'use client'

import NavButton from '@/components/navbar/navbutton'
import TransitionLink from '@/components/TransitionLink'
import { navItems } from '@/data/navbar'
import { AnimatePresence, motion } from 'motion/react'

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
                  <TransitionLink href={item.path}>{item.label}</TransitionLink>
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
