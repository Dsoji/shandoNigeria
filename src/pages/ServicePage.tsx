import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { IconBadge } from '../components/ui/IconBadge'
import { Button } from '../components/ui/Button'
import { AppLink } from '../components/ui/AppLink'
import { cn } from '../lib/cn'
import { services, serviceBySlug, type ServiceGroup } from '../data/services'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? serviceBySlug(slug) : undefined

  useEffect(() => {
    if (service) document.title = `${service.label} — Shando Nigeria Limited`
    return () => {
      document.title = 'Shando Nigeria Limited — Energy, Procurement & Supply Chain'
    }
  }, [service])

  if (!service) return <NotFound />

  const { icon: Icon, label, title, tagline, intro, heroImage, gallery, groups } =
    service
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      {/* Hero — cinematic navy grade, matching the home hero treatment */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img src={heroImage} alt={label} className="size-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />
        </div>
        <Container className="relative py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/55">
            <AppLink href="/" className="hover:text-accent">
              Home
            </AppLink>
            <ChevronRight className="size-3.5" />
            <AppLink href="#services" className="hover:text-accent">
              Services
            </AppLink>
            <ChevronRight className="size-3.5" />
            <span className="text-white/90">{label}</span>
          </nav>

          <div className="max-w-2xl">
            <IconBadge icon={Icon} boxed />
            <h1 className="mt-6 text-4xl font-normal leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.4rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-lg font-normal leading-snug text-accent">
              {tagline}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-white/65">{intro}</p>
            <Button href="#contact" variant="accent" className="mt-9">
              Request a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Content groups */}
      {groups.map((group, i) => (
        <Group key={group.heading} group={group} shaded={i % 2 === 1} />
      ))}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="bg-white pb-24">
          <Container>
            <div
              className={cn(
                'grid grid-cols-1 gap-4',
                gallery.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2',
              )}
            >
              {gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={label}
                  className="h-64 w-full rounded-[4px] object-cover"
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-[2.6rem]">
            Let's work together
          </h2>
          <p className="max-w-xl leading-relaxed text-white/60">
            Partner with Shando Nigeria Limited for reliable procurement and
            supply chain solutions that keep your operations moving.
          </p>
          <Button href="#contact" variant="accent">
            Get a Free Consultation
          </Button>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-muted py-20">
        <Container>
          <p className="eyebrow mb-3 text-center">Keep Exploring</p>
          <h2 className="mb-10 text-center text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">
            Explore our other services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map(({ slug: s, icon: OtherIcon, label: otherLabel }) => (
              <AppLink
                key={s}
                href={`/services/${s}`}
                className="group flex items-center gap-3 rounded-[4px] border border-ink/10 bg-white p-5 transition-colors hover:border-accent/40"
              >
                <IconBadge icon={OtherIcon} boxed />
                <span className="text-sm font-medium text-ink group-hover:text-accent">
                  {otherLabel}
                </span>
              </AppLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

// A single content block — either a card grid or a checklist.
function Group({ group, shaded }: { group: ServiceGroup; shaded: boolean }) {
  return (
    <section className={cn('py-20', shaded ? 'bg-muted' : 'bg-white')}>
      <Container>
        <h2 className="mb-10 text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">
          {group.heading}
        </h2>

        {group.layout === 'cards' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <Card key={item.title}>
                <h3 className="mb-2 text-lg font-medium text-ink">{item.title}</h3>
                {item.body && (
                  <p className="text-sm leading-relaxed text-ink/55">
                    {item.body}
                  </p>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-[4px] border border-ink/10 bg-white p-4"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-[4px] bg-accent/15 text-accent">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-ink">{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}

function NotFound() {
  return (
    <section className="bg-white py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-medium tracking-[-0.02em] text-ink">
          Service not found
        </h1>
        <p className="text-ink/60">
          The service you're looking for doesn't exist or may have moved.
        </p>
        <Button href="#services" variant="dark">
          View All Services
        </Button>
      </Container>
    </section>
  )
}
