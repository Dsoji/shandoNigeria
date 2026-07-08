import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

// A accent line-icon holder. `boxed` gives the circular ring used on the
// WhyChoose cards; plain is used in the services strip.
export function IconBadge({
  icon: Icon,
  boxed = false,
  className,
}: {
  icon: LucideIcon
  boxed?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-accent',
        boxed && 'size-14 rounded-full bg-accent/10',
        className,
      )}
    >
      <Icon strokeWidth={1.5} className={cn(boxed ? 'size-7' : 'size-9')} />
    </span>
  )
}
