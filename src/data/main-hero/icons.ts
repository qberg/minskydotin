import {
  Lightbulb,
  FileText,
  Code,
  Database,
  Globe,
  TextSearch,
  Figma,
  ChartPie,
  CodeXml,
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
    label: 'Ideation',
    desc: 'Define vision and goals',
  },
  {
    Icon: '/hero/content.svg',
    LucideIcon: FileText,
    label: 'Research',
    desc: 'Market and User Insights',
  },
  {
    Icon: '/hero/research.svg',
    LucideIcon: TextSearch,
    label: 'Strategy',
    desc: 'Plan Features and Scope',
  },
  {
    Icon: '/hero/figma.svg',
    LucideIcon: Figma,
    label: 'Design',
    desc: 'UX/UI Wireframes and Flows',
  },
  {
    Icon: '/hero/minsky.svg',
    LucideIcon: Code,
    label: 'Development',
    desc: 'We Craft Code with Care',
  },
  {
    Icon: '/hero/code.svg',
    LucideIcon: CodeXml,
    label: 'Architecture',
    desc: 'Clean, Scalabale Codebases',
  },
  {
    Icon: '/hero/research.svg',
    LucideIcon: Database,
    label: 'Data Modelling',
    desc: 'Structured for Scale and Clarity',
  },
  {
    Icon: '/hero/globe.svg',
    LucideIcon: Globe,
    label: 'Deployment',
    desc: 'Scalable Server Setup',
  },
  {
    Icon: '/hero/analytics.svg',
    LucideIcon: ChartPie,
    label: 'Analytics',
    desc: 'Track and Optimize Usage',
  },
]
