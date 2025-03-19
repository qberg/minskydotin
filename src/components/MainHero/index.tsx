import CodeBackground from './code-background'

const MainHero = () => {
  return (
    <div className="relative min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <CodeBackground />
      </div>
      <div className="relative z-10 max-w-4xl px-4 border">
        <h1 className="">
          <span className="text-secondary">We Design, Develop, & Deploy</span>
          <span className="text-primary"> Websites.</span>
        </h1>
      </div>
    </div>
  )
}

export default MainHero
