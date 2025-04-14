'use client'

import React from 'react'

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col bg-background p-6 font-mono text-matrix-green">
      <div className="mb-4 border-b border-matrix-green/30 pb-1">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-wider">SYSTEM.TERMINAL v1.0</div>
          <div className="text-xs opacity-70">[ESC] to abort</div>
        </div>
      </div>
      <TerminalLoader />
    </div>
  )
}

function TerminalLoader() {
  return (
    <div className="font-mono text-sm">
      <div className="mb-2">$ initiating system boot sequence...</div>
      <div className="mb-2">$ loading modules...</div>
      <div className="mb-2">
        <span className="mr-1">$</span>
        <LoadingBar />
      </div>
      <div className="flex items-center">
        <span className="mr-2">$</span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  )
}

function LoadingBar() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const progressChars = Math.floor(progress / 5)
  const loadingText = `[${Array(20)
    .fill('')
    .map((_, i) => (i < progressChars ? '=' : ' '))
    .join('')}] ${progress}%`

  return <span>{loadingText}</span>
}
