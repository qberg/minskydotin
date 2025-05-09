import React from 'react'

const RetroMonitor = () => {
  return (
    <div
      className="w-full max-w-[654px] p-0"
      style={{ height: 'clamp(14.75rem, 11.5329rem + 13.0976vw, 27.25rem)' }}
    >
      <div className="relative rounded-lg xl:rounded-2xl w-full h-full border-[2px] border-teritary shadow-grad-four bg-background z-10">
        {/* Original gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.2)_80%,rgba(0,0,0,0.4)_100%)] pointer-events-none rounded-lg xl:rounded-2xl"></div>

        {/* Retro green screen */}
        <div className="absolute inset-4 rounded overflow-hidden font-mono">
          <div className="p-4 xl:p-8 text-matrix-green text-sm overflow-y-hidden h-full">
            <div className="animate-pulse">C:\&gt; _</div>
            <div className="mt-1">C:\&gt; init system</div>
            <div className="mt-1">Loading webdev.sys...</div>
            <div className="mt-1">Loading webapp.sys...</div>
            <div className="mt-2">Systems Ready</div>
            <div className="mt-2">C:\&gt; run frontend.exe</div>
            <div className="mt-2">WELCOME TO MINSKY</div>
            <div className="mt-3 animate-pulse">C:\&gt; _</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetroMonitor
