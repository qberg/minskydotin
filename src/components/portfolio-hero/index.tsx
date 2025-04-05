import projects from '@/data/projects'

const totalProjects = projects.length
const projectCount = totalProjects < 10 ? `0${totalProjects}` : totalProjects

const PortfolioHero = () => {
  return (
    <section className="relative">
      <div
        className="w-full max-w-[1760px] mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem, 4vw, 3.5rem)' }}
      >
        <h2>
          /Our Works<sup className="text-secondary">[{projectCount}]</sup>
        </h2>
      </div>
    </section>
  )
}

export default PortfolioHero
