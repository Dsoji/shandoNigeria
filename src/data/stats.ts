import { Award, Factory, Layers, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Stat = { icon: LucideIcon; value: string; label: string }

// The 4 counters in the dark "Our Commitment" band.
export const stats: Stat[] = [
  { icon: Award, value: '2018', label: 'Established in Lagos' },
  { icon: Factory, value: '5+', label: 'Industry Sectors Served' },
  { icon: Layers, value: '4', label: 'Core Service Lines' },
  { icon: Globe, value: 'Global', label: 'Supplier Network' },
]
