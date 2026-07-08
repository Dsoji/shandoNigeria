import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { images } from '../../data/images'

// Full-bleed hero: building photo with a left-anchored dark gradient
// for legibility, split-color headline, and two CTAs.
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Container port at dusk"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
      </div>

      {/* Content */}
      <Container className="relative py-24 md:py-32">
        <div className="max-w-xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <span className="h-px w-6 bg-accent" />
            Energy · Procurement · Supply Chain
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
            Powering Nigeria's
            <br />
            <span className="text-accent">Energy</span> Supply Chain
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Shando Nigeria Limited delivers innovative, efficient, and reliable
            procurement and supply chain solutions that support clients across
            the oil &amp; gas, power, industrial, and infrastructure sectors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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
