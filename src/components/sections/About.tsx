import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { images } from '../../data/images'

// Two-column: copy + CTA on the left, a 3-image collage on the right.
export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <SectionHeader
            eyebrow="About Shando Nigeria"
            title="Your Trusted Partner in Procurement & Supply Chain"
          />
          <p className="mt-6 max-w-lg leading-relaxed text-ink/60">
            Shando Nigeria Limited is a Nigerian-owned company specializing in
            energy services, strategic procurement, supply chain management,
            logistics coordination, and industrial sourcing solutions for the
            oil &amp; gas, power, industrial, and infrastructure sectors.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink/60">
            Since our incorporation in 2018, we have combined industry
            expertise, strategic partnerships, and efficient operations to help
            clients improve operational efficiency, reduce procurement risks,
            and achieve project success.
          </p>
          <Button href="#about" variant="dark" className="mt-8">
            Learn More About Us
          </Button>
        </div>

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={images.aboutMain}
            alt="Industrial energy facility"
            className="col-span-2 h-64 w-full rounded-lg object-cover"
          />
          <img
            src={images.aboutSmall1}
            alt="Freight and logistics"
            className="h-40 w-full rounded-lg object-cover"
          />
          <img
            src={images.aboutSmall2}
            alt="Team partnership"
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>
      </Container>
    </section>
  )
}
