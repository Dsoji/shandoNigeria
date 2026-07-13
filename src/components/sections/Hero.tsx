import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { images } from '../../data/images'

// Cinematic full-bleed hero: a darkened photo under a deep-navy wash,
// with a light, tightly-tracked headline and two near-square CTAs.
// Monochrome headline (no accent-word) keeps it editorial, not templated.
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[86vh] items-end overflow-hidden bg-ink"
    >
      {/* Background image + cinematic navy grade */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Container port at dusk"
          className="size-full object-cover"
        />
        {/* Layered wash: darken globally, then anchor contrast to the left. */}
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <Container className="relative pb-20 pt-40 md:pb-24 md:pt-48">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Energy · Procurement · Supply Chain</p>
          <h1 className="text-[2.9rem] font-normal leading-[1.03] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.4rem]">
            The supply chain behind Nigeria's energy sector.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65 sm:text-[1.05rem]">
            Shando Nigeria Limited delivers efficient, reliable procurement and
            supply chain solutions for clients across the oil &amp; gas, power,
            industrial, and infrastructure sectors.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="accent">
              Get in Touch
            </Button>
            <Button href="#services" variant="outline">
              Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
