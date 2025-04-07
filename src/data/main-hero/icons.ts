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

export interface IconComponent {
  Icon: string
  LucideIcon: typeof Lightbulb
  label: string
  desc: string
}

export const iconComponents: IconComponent[] = [
  {
    Icon: '/hero/bulb.svg',
    LucideIcon: Lightbulb,
    label: 'Ideas',
    desc: 'We Provide Hosting & maintenance',
  },
  {
    Icon: '/hero/content.svg',
    LucideIcon: FileText,
    label: 'Documentation',
    desc: 'Research matching Industry Standard Solutions',
  },
  {
    Icon: '/hero/research.svg',
    LucideIcon: Settings,
    label: 'Configuration',
    desc: 'We Provide Hosting & maintenance',
  },
  { Icon: '/hero/figma.svg', LucideIcon: Network, label: 'Networking', desc: 'We Design websites' },
  { Icon: '/hero/minsky.svg', LucideIcon: Code, label: 'Development', desc: 'We Design websites' },
  {
    Icon: '/hero/code.svg',
    LucideIcon: Database,
    label: 'Development',
    desc: 'Scalable and Clean Codebases',
  },
  { Icon: '/hero/research.svg', LucideIcon: Settings, label: 'Web', desc: 'We Design websites' },
  {
    Icon: '/hero/globe.svg',
    LucideIcon: Globe,
    label: 'Server',
    desc: 'We Provide Hosting & Maintenance',
  },
  {
    Icon: '/hero/analytics.svg',
    LucideIcon: TimerOff,
    label: 'Analytics',
    desc: 'Data Insights for Performance and Growth',
  },
]
