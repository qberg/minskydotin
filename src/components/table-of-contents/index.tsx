'use client'
import { TOCContext } from '@/lib/TOCContext'
import { motion, useScroll, useTransform } from 'motion/react'
import { useContext, useState } from 'react'

const HIDDEN_OFFSET = 0.15

const TableOfContents = () => {
  const { sections, activeSection } = useContext(TOCContext)
  const { scrollYProgress } = useScroll()

  const progressHeight = useTransform(scrollYProgress, [0, 0.85], ['0%', '100%'])

  const [showTOC, setShowTOC] = useState(activeSection >= 0)
  scrollYProgress.on('change', (val) => {
    setShowTOC(val >= HIDDEN_OFFSET && val <= 1 - HIDDEN_OFFSET)
  })

  return (
    <div className="hidden 2xl:block w-full max-w-sm border-r border-secondary-background">
      <motion.div
        className="sticky top-25 flex gap-4 h-[75vh]"
        initial={{
          opacity: 0,
          display: 'none',
        }}
        animate={{
          opacity: showTOC ? 1 : 0,
          display: showTOC ? 'flex' : 'none',
        }}
      >
        <div className="relative h-full w-1 bg-secondary/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute w-full origin-top rounded-full bg-secondary/40"
            style={{ height: progressHeight }}
          />

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(sections.length)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-secondary/40"
                initial={{ y: '100%', x: '-50%', opacity: 0 }}
                animate={{
                  y:
                    scrollYProgress.get() > 0
                      ? `-${scrollYProgress.get() * 100 + i * 25}%`
                      : '100%',
                  opacity: scrollYProgress.get() > 0 ? 0.8 : 0,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ left: '50%' }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {sections.map(({ id, title }) => (
            <motion.div
              key={`${id}-${title}`}
              className="cursor-pointer transition-all duration-300"
              style={{
                color:
                  activeSection === id
                    ? 'var(--matrix-green, #00ff9d)'
                    : 'rgba(150, 150, 150, 0.5)',
                fontWeight: activeSection === id ? 500 : 400,
                scale: activeSection === id ? 1.05 : 1,
                translateX: activeSection === id ? 4 : 0,
              }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              onClick={() =>
                document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <div className="flex items-center gap-2">
                {activeSection === id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-1.5 h-1.5 rounded-full bg-matrix-green"
                  />
                )}
                <p>{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TableOfContents
