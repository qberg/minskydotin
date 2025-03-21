const DashedGridPattern = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            radial-gradient(circle 3px at 80px 80px, transparent 99%, rgba(0, 0, 0, 0) 0)
          `,
          backgroundSize: '80px 80px, 80px 80px, 80px 80px',
          backgroundPosition: '0 0, 0 0, 0 0',
          maskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent 10%,
              #000 10%,
              #000 90%,
              transparent 90%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `linear-gradient(
            to bottom,
            transparent 0%,
            transparent 10%,
            black 10%,
            black 90%,
            transparent 90%,
            transparent 100%
          )`,
        }}
      ></div>
    </div>
  )
}

export default DashedGridPattern
