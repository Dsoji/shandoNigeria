import { Container } from '../ui/Container'
import { images } from '../../data/images'

// Editorial two-column: copy + an inline credentials strip on the left,
// a single strong image anchored by an overlapping navy stat card on the
// right. Replaces the old generic 3-image collage.
const credentials = [
  { value: '2018', label: 'Established in Lagos' },
  { value: 'Indigenous', label: 'Nigerian-owned' },
  { value: '4 lines', label: 'Core services' },
]

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* Text */}
        <div>
          <p className="eyebrow mb-4">About Shando Nigeria</p>
          <h2 className="max-w-xl text-3xl font-medium tracking-[-0.03em] text-ink sm:text-[2.6rem]">
            Your trusted partner in procurement &amp; supply chain
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ink/60">
            Shando Nigeria Limited is a Nigerian-owned company specializing in
            energy services, strategic procurement, supply chain management,
            logistics coordination, and industrial sourcing for the oil &amp;
            gas, power, industrial, and infrastructure sectors.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-ink/60">
            Since our incorporation in 2018, we have combined industry
            expertise, strategic partnerships, and efficient operations to help
            clients improve efficiency, reduce procurement risk, and achieve
            project success.
          </p>

          {/* Inline credentials strip */}
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-ink/10 pt-8">
            {credentials.map(({ value, label }) => (
              <div key={label}>
                <dt className="text-2xl font-medium tracking-[-0.02em] text-ink">
                  {value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink/45">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image + overlapping stat card */}
        <div className="relative">
          <img
            src={images.aboutMain}
            alt="Industrial energy facility at dusk"
            className="h-[26rem] w-full rounded-[4px] object-cover lg:h-[32rem]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-[4px] bg-ink p-6 pr-10 sm:block">
            <div className="text-4xl font-semibold tracking-[-0.02em] text-white">
              5+
            </div>
            <div className="mt-1 max-w-[9rem] text-xs uppercase leading-relaxed tracking-wider text-white/60">
              Industry sectors served across energy &amp; infrastructure
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
