interface MinimalHeroProps {
  title: string
  count: number
}

const MinimalHero = ({ title, count }: MinimalHeroProps) => {
  const safeCount = typeof count === 'number' ? count : 0
  const formattedCount = safeCount < 10 ? `0${safeCount}` : `${safeCount}`
  return (
    <section className="relative">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <h2>
          {title}
          <sup className="text-secondary">[{formattedCount}]</sup>
        </h2>
      </div>
    </section>
  )
}

export default MinimalHero
