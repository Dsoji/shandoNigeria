import { cn } from '../../lib/cn'

// The accent eyebrow-with-dash + heading pattern that repeats across
// About, WhyChoose and Commitment sections.
export function SectionHeader({
  eyebrow,
  title,
  align = 'left',
  onDark = false,
  className,
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <div className={cn('eyebrow mb-4', align === 'center' && 'text-center')}>
        {eyebrow}
      </div>
      <h2
        className={cn(
          'text-3xl font-medium tracking-[-0.03em] sm:text-[2.6rem]',
          onDark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
