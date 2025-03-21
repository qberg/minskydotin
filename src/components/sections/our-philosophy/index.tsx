import DashedGridPattern from '@/components/backgrounds/dashed-grid-pattern'
import RetroMonitor from '@/components/ui/retro-monitor'

const OurPhilosophy = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <DashedGridPattern />
      <div
        className="container mx-auto flex flex-col"
        style={{ padding: 'clamp(1.5rem, 1.5vw, 2.5rem)', gap: 'clamp(1rem,4vw,3.5rem)' }}
      >
        <div style={{ fontSize: 'clamp(2rem,4vw, 3.75rem)' }}>/Our Development Philosophy</div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-5">
            <RetroMonitor />
          </div>
          <div className="col-span-12 xl:col-span-7">
            <div className="text-m" style={{ marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
              For us, building software is an act of care. Care for the end-users, whose time,
              privacy, and intelligence we deeply respect. Care for the developers who will maintain
              and evolve the system long after its built.  
            </div>
            <p style={{ marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
              We believe in building sustainable, human centric software that stands the test of
              time. Our approach leverages the open-source technologies not just for their cost
              effectiveness but also because they reflect our values— They allow us to create
              systems that are not only robust and adaptable but also grounded in a community-driven
              ethos.
            </p>
            <p>
              Our ultimate goal is to create software that doesn’t just work today but grows and
              evolves with the people who rely on it. Software that can be maintained without
              heroics, and scale without breaking the bank. This approach aligns with our belief
              that the best technology solutions are those that fade into the background, quietly
              and reliably serving human needs rather than demanding attention for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPhilosophy
