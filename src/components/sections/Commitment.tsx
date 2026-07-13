import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { stats } from '../../data/stats'

// Dark band: commitment copy + CTA on the left, 4 stat counters on the right.
export function Commitment() {
  return (
    <section className="bg-ink py-16">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <p className="eyebrow mb-4">Our Commitment</p>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-[2.6rem]">
            Building Long-Term Partnerships
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            We build sustainable relationships that create mutual value —
            delivering quality, dependable solutions across every engagement.
          </p>
          <Button href="#contact" variant="accent" className="mt-8">
            Let's Work Together
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon strokeWidth={1.5} className="mx-auto mb-3 size-8 text-accent" />
              <div className="text-4xl font-semibold tracking-[-0.02em] text-white">
                {value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-white/55">
                {label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
