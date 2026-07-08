import { Target, Eye } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Pillar = {
  icon: LucideIcon
  title: string
  statement: string
  quote: string
}

// The Mission & Vision statements from the company profile.
export const pillars: Pillar[] = [
  {
    icon: Target,
    title: 'Mission Statement',
    statement:
      'To deliver world-class procurement and supply chain solutions that create value for our clients through integrity, operational excellence, strategic partnerships, and professional service delivery.',
    quote: 'We create value through integrity, excellence, and professional service.',
  },
  {
    icon: Eye,
    title: 'Vision Statement',
    statement:
      'To become a leading indigenous energy support, procurement, and supply chain management company recognized for excellence, reliability, and innovation across Africa.',
    quote: 'Excellence, reliability, and innovation — across Africa and beyond.',
  },
]
