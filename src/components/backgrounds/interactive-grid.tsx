'use client'

import { motion, AnimatePresence } from 'motion/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'

interface GridCell {
  row: number
  col: number
  id: string
  timestamp: number
}

interface InteractiveGridProps {
  cellSize?: number
  gridColor?: string
  highlightColor?: string
  trailLength?: number
  fadeTime?: number
}

const InteractiveGrid = ({
  cellSize = 70,
  gridColor = 'rgba(128, 128, 128, 0.1)',
  highlightColor = 'rgba(1, 212, 107, 0.5)',
  trailLength = 8,
  fadeTime = 1500,
}: InteractiveGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cells, setCells] = useState<GridCell[]>([])
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 })
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const lastUpdateRef = useRef<number>(0)

  // Calculate grid dimenstions
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimenstions = () => {
      const container = containerRef.current
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight

      const cols = Math.ceil(width / cellSize)
      const rows = Math.ceil(height / cellSize)

      setGridDimensions({ rows, cols })
    }

    updateDimenstions()

    const resizeObserver = new ResizeObserver(updateDimenstions)
    const currentRef = containerRef.current

    if (currentRef) {
      resizeObserver.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef)
      }
      resizeObserver.disconnect()
    }
  }, [cellSize])

  // Mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now()

    if (now - lastUpdateRef.current < 16) return

    lastUpdateRef.current = now

    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }, [])

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    // setCells([]);
  }, [])

  // Update cells based on mouse movement
  useEffect(() => {
    if (!mousePosition || gridDimensions.rows === 0 || gridDimensions.cols === 0) return

    const { x, y } = mousePosition
    const col = Math.floor(x / cellSize)
    const row = Math.floor(y / cellSize)

    if (row >= 0 && row < gridDimensions.rows && col >= 0 && col < gridDimensions.cols) {
      const now = Date.now()
      const newCellId = `${row}-${col}-${now}`

      setCells((prevCells) => {
        const cellExists = prevCells.some((cell) => cell.row === row && cell.col === col)
        if (cellExists) return prevCells

        const newCell = { row, col, id: newCellId, timestamp: now }

        const filteredCells = prevCells.filter((cell) => now - cell.timestamp < fadeTime)
        const updatedCells = [...filteredCells, newCell]

        if (updatedCells.length > trailLength) {
          return updatedCells.slice(updatedCells.length - trailLength)
        }

        return updatedCells
      })
    }
  }, [mousePosition, gridDimensions, cellSize, trailLength, fadeTime])

  // Clean up old cells
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setCells((prevCells) => prevCells.filter((cell) => now - cell.timestamp < fadeTime))
    }, 100)

    return () => clearInterval(cleanupInterval)
  }, [fadeTime])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${gridColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
        backgroundPosition: '0 0',
      }}
    >
      <AnimatePresence>
        {cells.map((cell) => {
          const age = Date.now() - cell.timestamp
          const progress = Math.min(1, age / fadeTime)

          return (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 0.7 - progress * 0.7,
                scale: 1,
                backgroundColor: highlightColor,
              }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5, ease: 'easeOut' },
              }}
              style={{
                position: 'absolute',
                left: `${cell.col * cellSize}px`,
                top: `${cell.row * cellSize}px`,
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                boxShadow: `0 0 20px 0 ${highlightColor}`,
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveGrid
