import {
  BookOpen,
  BadgeCheck,
  Handshake,
  PiggyBank,
  Clock,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = { icon: LucideIcon; title: string; body: string }

// The 6 "Why Choose Shando Nigeria?" cards.
export const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Industry Knowledge',
    body: 'Strong understanding of procurement and supply chain requirements within the energy sector.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Service Delivery',
    body: 'Commitment to quality, transparency, and client satisfaction on every engagement.',
  },
  {
    icon: Handshake,
    title: 'Reliable Supplier Relationships',
    body: 'Access to trusted local and international suppliers and OEMs.',
  },
  {
    icon: PiggyBank,
    title: 'Cost Efficiency',
    body: 'Optimized procurement processes that deliver measurable value and savings.',
  },
  {
    icon: Clock,
    title: 'Timely Execution',
    body: 'Efficient systems designed to support project schedules and operational requirements.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnerships',
    body: 'Dedicated to building sustainable relationships with clients and stakeholders.',
  },
]
