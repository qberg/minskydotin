import {
  Lightbulb,
  FileText,
  Settings,
  Network,
  Code,
  Database,
  Globe,
  TimerOff,
} from 'lucide-react'

const iconComponents = [
  { Icon: '/hero/bulb.svg', LucideIcon: Lightbulb, label: 'Ideas' },
  { Icon: '/hero/content.svg', LucideIcon: FileText, label: 'Documentation' },
  { Icon: '/hero/research.svg', LucideIcon: Settings, label: 'Configuration' },
  { Icon: '/hero/figma.svg', LucideIcon: Network, label: 'Networking' },
  { Icon: '/hero/minsky.svg', LucideIcon: Code, label: 'Development' },
  { Icon: '/hero/code.svg', LucideIcon: Database, label: 'Database' },
  { Icon: '/hero/research.svg', LucideIcon: Settings, label: 'Web' },
  { Icon: '/hero/globe.svg', LucideIcon: Globe, label: 'Scheduling' },
  { Icon: '/hero/analytics.svg', LucideIcon: TimerOff, label: 'Performance' },
]

export default iconComponents
