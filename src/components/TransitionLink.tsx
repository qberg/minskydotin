'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransitionRouter } from 'next-view-transitions'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}

// Page transition animation
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

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = 'bg-background text-primary',
  inactiveClassName = 'text-teritary hover:bg-background/50 hover:text-primary/65',
}) => {
  const router = useTransitionRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  const finalClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`

  return (
    <Link
      href={href}
      className={finalClassName}
      onClick={(e) => {
        e.preventDefault()
        router.push(href, {
          onTransitionReady: pageAnimation,
        })
      }}
    >
      {children}
    </Link>
  )
}

export default TransitionLink
