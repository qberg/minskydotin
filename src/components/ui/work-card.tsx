import ScrollShowcase from '@/components/ui/scroll-showcase'
import { WorkData } from '@/data/works-data'

interface WorkCardProps {
  work: WorkData
  index: number
  handleMouseEnter: (index: number) => void
  handleMouseLeave: () => void
  isHovered: boolean
  isMobile: boolean
}

const WorkCard = ({
  work,
  index,
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
  isMobile,
}: WorkCardProps) => {
  return (
    <div
      style={{ minHeight: 'clamp(7rem, 8vh, 11rem)' }}
      className="border border-widecard-border py-8 px-0 xl:py-8 xl:pl-12 xl:rounded-xl overflow-hidden"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        {/* Client name */}
        <div className="flex flex-col justify-start items-start">
          <span className="text-2xs text-widecard-secondary">[{`0${index + 1}`}]</span>
          <h3> {work.clientName}</h3>
          <span className="text-2xs text-widecard-secondary">{work.deliverables}</span>
        </div>
        {/* workd description */}
        <div className="hidden xl:block max-w-md">{work.description}</div>
        {/* Images show case */}
        <ScrollShowcase work={work} index={index} isHovered={isHovered} isMobile={isMobile} />
      </div>
    </div>
  )
}

export default WorkCard
