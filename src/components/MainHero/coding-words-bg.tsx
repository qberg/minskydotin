'use client'
import React, { useState, useEffect } from 'react'

// Define the type for our line objects
interface Line {
  text: string
  opacity: number
  size: number
}

const CodingWordsBackground = () => {
  // Initialize with null dimensions to handle SSR
  const [lines, setLines] = useState<Line[]>([])
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  // List of coding-related words
  const codingWords = [
    'function',
    'component',
    'useState',
    'useEffect',
    'props',
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'API',
    'async',
    'await',
    'promise',
    'fetch',
    'render',
    'hook',
    'state',
    'lifecycle',
    'DOM',
    'virtual',
    'algorithm',
    'recursion',
    'iteration',
    'class',
    'object',
    'array',
    'method',
    'string',
    'boolean',
    'integer',
    'float',
    'compiler',
    'debugger',
    'console',
    'terminal',
    'Git',
    'branch',
    'commit',
    'merge',
    'pull',
    'push',
    'server',
    'client',
    'responsive',
    'frontend',
    'backend',
    'fullstack',
    'database',
    'query',
    'JSON',
    'XML',
    'REST',
    'GraphQL',
    'Node',
    'Express',
    'MongoDB',
    'SQL',
    'Python',
    'Java',
    'TypeScript',
    'Redux',
    'context',
    'middleware',
    'event',
    'listener',
    'callback',
    'closure',
    'prototype',
    'inheritance',
    'module',
    'export',
    'import',
    'dependency',
    'package',
    'npm',
    'yarn',
    'webpack',
    'babel',
    'ESLint',
    'Jest',
    'testing',
    'deployment',
    'production',
    'development',
    'staging',
    'docker',
    'kubernetes',
    'cloud',
    'AWS',
    'Azure',
    'GCP',
    'scaling',
    'performance',
    'optimization',
    'memory',
    'garbage',
    'collection',
    'thread',
    'asynchronous',
    'synchronous',
    'blocking',
    'non-blocking',
    'UI',
    'UX',
    'responsive',
    'component',
    'framework',
    'library',
    'syntax',
    'semantics',
    'variable',
    'constant',
    'loop',
  ]

  // Handle window initialization safely for SSR
  useEffect(() => {
    // Only execute on client-side
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    // Initial call to ensure proper rendering
    handleResize()

    // Only add event listener on client-side
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Generate lines of code words based on screen size
  useEffect(() => {
    // Only generate lines if we have valid dimensions
    if (dimensions.width === 0 || dimensions.height === 0) {
      return
    }

    const fontSize = 16 // Base font size
    const lineHeight = fontSize * 1.5 // Line height

    // Add extra lines to ensure full coverage with some buffer
    const numberOfLines = Math.ceil(dimensions.height / lineHeight) + 2

    const newLines: Line[] = [] // Explicitly type the array
    const generateFullLine = () => {
      const averageCharWidth = fontSize * 0.6 // Approximate width of characters in monospace font
      const charsNeeded = Math.ceil(dimensions.width / averageCharWidth) * 2 // Double it to ensure coverage
      let line = ''
      while (line.length < charsNeeded) {
        const randomWord = codingWords[Math.floor(Math.random() * codingWords.length)]
        line += randomWord + ' '
      }
      return line
    }

    for (let i = 0; i < numberOfLines; i++) {
      newLines.push({
        text: generateFullLine(),
        opacity: 0.2, // Set to exactly 15%
        size: fontSize,
      })
    }

    setLines(newLines)
  }, [dimensions, codingWords])

  // Don't render anything during SSR or before dimensions are set
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {lines.map((line, index) => (
        <div
          key={index}
          className="whitespace-nowrap overflow-hidden text-matrix-green"
          style={{
            fontSize: '16px',
            opacity: 0.15, // Ensure opacity is exactly 15%
            lineHeight: '1.5em',
            width: '100%',
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  )
}

export default CodingWordsBackground
