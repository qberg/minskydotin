'use client'
import {
  Lightbulb,
  FileText,
  Settings,
  Network,
  FileCode,
  Database,
  Globe,
  Clock,
  Timer,
} from 'lucide-react'
import { useState } from 'react'
import { delay, motion } from 'motion/react'

const icons = [
  { Icon: Lightbulb, label: 'Ideas' },
  { Icon: FileText, label: 'Documentation' },
  { Icon: Settings, label: 'Configuration' },
  { Icon: Network, label: 'Networking' },
  { Icon: FileCode, label: 'Development' },
  { Icon: Database, label: 'Database' },
  { Icon: Globe, label: 'Web' },
  { Icon: Clock, label: 'Scheduling' },
  { Icon: Timer, label: 'Performance' },
]

const IconsGrid = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.2,
      },
    },
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.0,
      },
    },
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-9 gap-6">
      {icons.map(({ Icon, label }, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:justify-start transition-all hover:cursor-pointer group"
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Icon
            size={44}
            className={`
              md:w-24 md:h-24 
              transition-all duration-300 
              ${hoveredIcon === index ? 'text-glow-blue filter drop-shadow-[0_0_12px_#1D4AE4]' : 'text-secondary'}
            `}
            aria-hidden={true}
          />
          <span className="sr-only">{label}</span>
          {hoveredIcon === index && (
            <div className="relative hidden sm:block">
              <svg
                width="119"
                height="113"
                viewBox="0 0 119 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-40 -left-16 translate-x-4"
              >
                <motion.path
                  d="M1.96875 111.408C5.0562 91.6601 6.94121 69.3399 22.0038 54.4141C29.7556 46.7329 43.2415 41.6109 53.3227 47.7968C59.0804 51.3298 62.9373 58.2181 61.8793 65.1224C60.232 75.8728 45.3018 80.1171 36.0837 79.416C23.1651 78.4336 18.9685 66.1148 19.0863 54.7995C19.2764 36.5253 33.4665 18.2953 48.6325 9.13154C63.1377 0.367032 81.6024 -0.226327 97.3504 5.32221C101.63 6.83005 110.463 10.3749 113.99 13.5842"
                  stroke="#00D46B"
                  stroke-width="3"
                  stroke-linecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.0,
                    ease: 'easeInOut',
                  }}
                />
                <motion.path
                  d="M108.184 18.4453C110.862 17.2187 113.804 16.2993 116.372 14.8377C116.929 14.5204 117.824 14.3835 117.123 13.681C115.194 11.7495 113.497 9.27085 112.778 6.60469"
                  stroke="#00D46B"
                  stroke-width="3"
                  stroke-linecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    ease: 'easeInOut',
                    delay: 1.0,
                  }}
                />
              </svg>
              <div className="absolute -top-40 -left-16 translate-x-32">
                <motion.div
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-bold text-primary"
                >
                  [Server]
                </motion.div>
                <motion.div
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm mt-1 text-primary"
                >
                  We provide hosting &<br />
                  maintenance
                </motion.div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default IconsGrid
