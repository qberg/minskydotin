'use client'

import { motion, useAnimation } from 'motion/react'
import { useEffect } from 'react'

interface NavButtonProps {
  menuOpen: boolean
  setMenuOpen: (_: boolean) => void
}

const NavButton: React.FC<NavButtonProps> = ({ menuOpen, setMenuOpen }) => {
  const path1Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 8.5L24 8.5' },
  }

  const path2Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    closed: { d: 'M0 15.5L24 15.5' },
  }

  const path1Controls = useAnimation()
  const path2Controls = useAnimation()

  useEffect(() => {
    if (menuOpen) {
      path1Controls.start(path1Variants.open)
      path2Controls.start(path2Variants.open)
    } else {
      path1Controls.start(path1Variants.closed)
      path2Controls.start(path2Variants.closed)
    }
  }, [
    menuOpen,
    path1Controls,
    path2Controls,
    path1Variants.open,
    path1Variants.closed,
    path2Variants.open,
    path2Variants.closed,
  ])

  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-primary stroke-2 z-50"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          {...path1Variants.closed}
          animate={path1Controls}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          {...path2Variants.closed}
          animate={path2Controls}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </div>
  )
}

export default NavButton
