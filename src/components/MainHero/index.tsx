import GridPattern from '../backgrounds/grid-pattern'
import InteractiveGrid from '../backgrounds/interactive-grid'
import CodeBackground from './code-background'
import IconsGrid from './icons-grid'

const MainHero = () => {
  return (
    <div className="relative min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <CodeBackground />
      </div>
      <div className="container">
        <div
          className="w-[90%] min-h-[600px] xl:min-h-[700px] mx-auto relative z-10 px-8 lg:px-12 py-16 border-1 border-background bg-background rounded-2xl sm:rounded-2xl shadow-lg"
          style={{
            boxShadow:
              '0 0 20px 10px rgba(128, 128, 128, 0.3), 0 0 40px 20px rgba(128, 128, 128, 0.1)',
          }}
        >
          <InteractiveGrid
            cellSize={24}
            gridColor="rgba(128, 128, 128, 0.1)"
            highlightColor="rgba(1, 212, 107, 0.5)"
            fadeTime={1500}
          />
          <div className="relative grid grid-cols-9 gap-8 xl:gap-32">
            <h1 className="col-span-9 xl:col-span-5 z-0">
              <span className="text-secondary">We Design, Develop, & Deploy</span>
              <span className="text-primary"> Websites.</span>
            </h1>

            {/* Icons Grid */}
            <div className="col-span-9 z-20">
              <IconsGrid />
            </div>

            <div className="col-span-9">
              <div className="flex items-center justify-end pr-4">
                <p>Button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero
