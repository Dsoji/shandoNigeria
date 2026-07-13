import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'

type Variant = 'accent' | 'outline' | 'dark' | 'light'

const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white hover:bg-accent-600',
  outline: 'border border-white/35 text-white hover:bg-white/10',
  dark: 'bg-ink text-white hover:bg-ink-800',
  light: 'bg-white text-ink hover:bg-silver/40',
}

// The single button primitive. Everything that looks like a button
// in the design routes through here via the `variant` prop.
//
// Treatment mirrors the reference: near-square corners, an uppercase
// tracked label, and a diagonal ↗ arrow that nudges out on hover.
export function Button({
  children,
  variant = 'accent',
  href = '#',
  withArrow = true,
  className,
}: {
  children: ReactNode
  variant?: Variant
  href?: string
  withArrow?: boolean
  className?: string
}) {
  return (
    <AppLink
      href={href}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-[3px] px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </AppLink>
  )
}
