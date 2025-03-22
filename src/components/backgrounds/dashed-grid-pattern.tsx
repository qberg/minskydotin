interface DashedGridPatternProps {
  topLimit?: string
  bottomLimit?: string
  backgroundSize?: string
}

const DashedGridPattern = ({
  topLimit = '20%',
  bottomLimit = '80%',
  backgroundSize = '80px 80px',
}: DashedGridPatternProps) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: backgroundSize,
          backgroundPosition: '0 0',
          maskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent ${topLimit},
              black ${topLimit},
              black ${bottomLimit},
              transparent ${bottomLimit},
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent ${topLimit},
              black ${topLimit},
              black ${bottomLimit},
              transparent ${bottomLimit},
              transparent 100%
            )
          `,
        }}
      />
    </div>
  )
}

export default DashedGridPattern
