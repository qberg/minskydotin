'use client'

import { useState } from 'react'
import HoverText from '@/components/sketch-animations/hover-text'
import ArrowAnim from '@/components/sketch-animations/arrow-anim'

interface DirectionalAnimProps {
  direction: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'
  position: string
  hoverTextProps: {
    title: string
    description: string
    className?: string
  }
  arrowProps?: {
    className?: string
  }
  textPosition: 'before' | 'after'
}

const DirectionalAnim: React.FC<DirectionalAnimProps> = ({
  direction,
  position,
  hoverTextProps,
  arrowProps = {},
  textPosition,
}) => {
  const [svgAnimDone, setSvgAnimDone] = useState(false)

  const handleSvgAnimDone = () => {
    setSvgAnimDone(true)
  }

  return (
    <div className={`absolute ${position}`}>
      <div
        className={`flex flex-row ${textPosition === 'before' ? 'justify-end' : 'justify-start'}`}
      >
        {/* Render HoverText before arrow if textPosition is 'before' and animation is done */}
        {textPosition === 'before' && svgAnimDone && (
          <HoverText
            title={hoverTextProps.title}
            description={hoverTextProps.description}
            className={hoverTextProps.className}
          />
        )}

        {/* Arrow Animation */}
        <div
          className={
            !svgAnimDone && textPosition === 'before'
              ? 'translate-x-32'
              : arrowProps.className || ''
          }
        >
          <ArrowAnim direction={direction} onAnimationComplete={handleSvgAnimDone} />
        </div>

        {/* Render HoverText after arrow if textPosition is 'after' and animation is done */}
        {textPosition === 'after' && svgAnimDone && (
          <HoverText
            title={hoverTextProps.title}
            description={hoverTextProps.description}
            className={hoverTextProps.className}
          />
        )}
      </div>
    </div>
  )
}

interface ArrowAnimProps {
  title: string
  description: string
}

export const TopLeftAnim = ({ title, description }: ArrowAnimProps) => (
  <DirectionalAnim
    direction="topLeft"
    position="-top-55 -translate-x-48"
    hoverTextProps={{
      title: title,
      description: description,
      className: 'text-right -mt-1',
    }}
    textPosition="before"
  />
)

export const TopRightAnim = ({ title, description }: ArrowAnimProps) => (
  <DirectionalAnim
    direction="topRight"
    position="-top-55 translate-x-12"
    hoverTextProps={{
      title,
      description,
      className: 'text-left -mt-1',
    }}
    textPosition="after"
  />
)

export const BottomRightAnim = ({ title, description }: ArrowAnimProps) => (
  <DirectionalAnim
    direction="bottomRight"
    position="translate-x-6 top-2"
    hoverTextProps={{
      title,
      description,
      className: 'text-left mt-[104px] -ml-4',
    }}
    textPosition="after"
  />
)
