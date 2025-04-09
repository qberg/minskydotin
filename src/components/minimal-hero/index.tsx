interface MinimalHeroProps {
  title: string
  count: number
}

const MinimalHero = ({ title, count }: MinimalHeroProps) => {
  const safeCount = typeof count === 'number' ? count : 0
  const formattedCount = safeCount < 10 ? `0${safeCount}` : `${safeCount}`
  return (
    <section
      className="relative"
      style={{
        padding: 'clamp(1.5rem, 0.2775rem + 4.9771vw, 6.25rem)',
      }}
    >
      <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-14">
        <h2>
          {title}
          <sup className="text-secondary">[{formattedCount}]</sup>
        </h2>
      </div>
    </section>
  )
}

export default MinimalHero
