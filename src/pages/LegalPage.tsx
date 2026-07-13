import { useEffect, type ReactNode } from 'react'
import { Container } from '../components/ui/Container'

export type LegalSection = { heading: string; body: ReactNode }

// Shared layout for the Privacy and Terms pages: a dark header band in the
// site's type system, a "placeholder" notice, and a narrow prose column.
export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  useEffect(() => {
    document.title = `${title} — Shando Nigeria Limited`
    return () => {
      document.title =
        'Shando Nigeria Limited — Energy, Procurement & Supply Chain'
    }
  }, [title])

  return (
    <>
      <section className="bg-ink py-20 md:py-24">
        <Container>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/45">Last updated: {updated}</p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="rounded-[4px] border border-accent/25 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-ink/70">
            <strong className="font-medium text-ink">
              Placeholder content.
            </strong>{' '}
            This is starter text to fill the page — review and finalize it with
            legal counsel before you go live.
          </div>

          <p className="mt-8 leading-relaxed text-ink/70">{intro}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-medium text-ink">{s.heading}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-ink/65">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
