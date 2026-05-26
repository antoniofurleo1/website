import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section
      id="about"
      className="paper relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="01 — About" title={site.about.heading} />

          <div className="space-y-6 max-w-[58ch]">
            {site.about.body.map((p, i) => (
              <Reveal
                key={i}
                as="p"
                delay={i * 0.08}
                className="font-sans text-[19px] sm:text-[21px] leading-[1.65] text-ink/90"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-hairline">
          <RevealList className="space-y-6">
            {site.about.facts.map((fact) => (
              <RevealItem key={fact.label}>
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-wider2 text-ink/50 mb-1.5">
                    {fact.label}
                  </p>
                  <p className="font-serif text-[22px] leading-snug text-ink">
                    {fact.value}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </aside>
      </div>
    </section>
  );
}
