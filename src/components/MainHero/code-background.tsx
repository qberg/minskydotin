'use client'

import { codeLines } from '@/data/code-snippet'
import { useCallback, useEffect, useRef, useState } from 'react'

interface CodeBackgroundProps {
  lineHeight?: number
}

const CodeBackground = ({ lineHeight = 24 }: CodeBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineCount, setLineCount] = useState(0)

  const calculateLines = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const containerHeight = container?.clientHeight
    setLineCount(Math.ceil(containerHeight / lineHeight))
  }, [lineHeight])

  useEffect(() => {
    calculateLines()

    const resizeObservor = new ResizeObserver(calculateLines)

    if (containerRef.current) {
      resizeObservor.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObservor.unobserve(containerRef.current)
      }
      resizeObservor.disconnect()
    }
  }, [calculateLines])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full text-xs overflow-hidden opacity-15"
        aria-hidden="true"
      >
        {Array.from({ length: lineCount }).map((_, index) => (
          <div
            key={index}
            className="whitespace-nowrap overflow-hidden text-matrix-green"
            style={{ lineHeight: `${lineHeight}px` }}
          >
            {codeLines[index % codeLines.length]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodeBackground
