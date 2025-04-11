'use client'
import React from 'react'

interface ShweayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

const ShweayButton = ({ label = 'Contact', className = '', ...buttonProps }: ShweayButtonProps) => {
  return (
    <button
      className={`relative text-center w-full h-full z-40 group hover:cursor-pointer transform transition-all duration-200 hover:scale-95 hover:shadow-inner ${className}`}
      {...buttonProps}
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-linear-to-t from-grad-two to-grad-one rounded-lg transition-opacity duration-200 group-hover:opacity-90"></div>
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-linear-to-r from-black/0 to-black/100 opacity-40 rounded-lg transition-opacity duration-200 group-hover:opacity-50"></div>
      <div className="absolute inset-0 bg-linear-to-b from-grad-three to-white/0 opacity-20 rounded-lg clip-path-[polygon(50%_0%,100%_50%,50%_100%,0%_50%)] transition-opacity duration-200 group-hover:opacity-30"></div>
      {/* Inner layers with responsive insets */}
      <div
        className="absolute bg-linear-to-b from-grad-four to-grad-five transition-all duration-200 group-hover:brightness-95"
        style={{
          inset: 'clamp(0.375rem, 1vw, 0.75rem)',
          borderRadius: 'clamp(0.25rem, 0.5vw, 0.5rem)',
        }}
      ></div>
      <div
        className="absolute bg-grad-five opacity-50 transition-opacity duration-200 group-hover:opacity-70"
        style={{
          inset: 'clamp(0.375rem, 1vw, 0.75rem)',
          borderRadius: 'clamp(0.25rem, 0.5vw, 0.5rem)',
        }}
      ></div>
      {/* Border gradient with pressed effect on hover */}
      <div
        className="absolute border-[2px] border-transparent bg-gradient-to-r from-grad-five/50 to-grad-five bg-clip-border transition-all duration-200 group-hover:from-grad-five/30 group-hover:to-grad-five/70"
        style={{
          inset: 'clamp(0.375rem, 1vw, 0.75rem)',
          borderRadius: 'clamp(0.25rem, 0.5vw, 0.5rem)',
        }}
      ></div>
      {/* Text container */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          inset: 'clamp(0.375rem, 1vw, 0.75rem)',
          borderRadius: 'clamp(0.25rem, 0.5vw, 0.5rem)',
        }}
      >
        <span
          className="uppercase text-black font-bold transition-transform duration-200 group-hover:translate-y-px"
          style={{
            fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
          }}
        >
          {label}
        </span>
      </div>
    </button>
  )
}

export default ShweayButton
