import { Container } from '../ui/Container'
import { IconBadge } from '../ui/IconBadge'
import { features } from '../../data/features'

// "Why choose" as a bordered matrix: a two-column header, then a single
// bounded grid whose cells are separated by hairlines (not floating cards).
// Each cell lifts to white with a red top-rule on hover.
export function WhyChoose() {
  return (
    <section className="bg-muted py-24">
      <Container>
        {/* Split header: label + heading on the left, supporting line right */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-4">Why Shando Nigeria</p>
            <h2 className="max-w-md text-3xl font-medium tracking-[-0.03em] text-ink sm:text-[2.6rem]">
              Reliability, expertise &amp; value
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-ink/55 lg:justify-self-end lg:text-right">
            Everything we do is built on deep sector knowledge, dependable
            supplier relationships, and a commitment to getting the details
            right — every engagement, every time.
          </p>
        </div>

        {/* Hairline-divided matrix */}
        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-[4px] border-l border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group relative border-b border-r border-ink/10 bg-transparent p-8 transition-colors hover:bg-white"
            >
              {/* red top-rule reveals on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <IconBadge icon={icon} boxed />
              <h3 className="mt-5 text-lg font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
