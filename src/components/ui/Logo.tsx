import { cn } from '../../lib/cn'
import { AppLink } from './AppLink'
import markUrl from '../../assets/brand/logo-mark.png'

// Brand lockup: the Shando monogram mark + wordmark. `theme` flips the
// wordmark colour for light vs dark backgrounds. `tagline` renders the
// small strapline under the wordmark (used in the footer).
export function Logo({
  theme = 'light',
  tagline,
  className,
}: {
  theme?: 'light' | 'dark'
  tagline?: string
  className?: string
}) {
  const wordColor = theme === 'dark' ? 'text-white' : 'text-ink'
  return (
    <AppLink href="/" className={cn('flex items-center gap-3', className)}>
      <img
        src={markUrl}
        alt="Shando Nigeria Limited"
        width={40}
        height={47}
        className="h-11 w-auto shrink-0 select-none"
        loading="eager"
        decoding="async"
      />
      <span className="leading-none">
        <span className={cn('block text-xl font-extrabold tracking-[0.06em]', wordColor)}>
          SHANDO
        </span>
        <span className="block text-[0.62rem] font-medium uppercase tracking-[0.28em] text-accent">
          Nigeria Limited
        </span>
        {tagline && (
          <span className="mt-1 block text-xs italic text-white/50">{tagline}</span>
        )}
      </span>
    </AppLink>
  )
}
