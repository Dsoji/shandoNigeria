import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

// White surface card with subtle border + hover lift. Used for the
// WhyChoose feature grid.
export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[4px] border border-ink/10 bg-white p-8 transition-colors hover:border-accent/40',
        className,
      )}
    >
      {children}
    </div>
  )
}
