import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Recognition() {
  return (
    <section
      id="recognition"
      className="paper relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading eyebrow="05 — Recognition" title={site.recognition.heading} />

        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal
            as="p"
            className="lg:col-span-5 font-serif text-[24px] sm:text-[26px] leading-[1.4] text-ink/85 italic"
          >
            {site.recognition.summary}
          </Reveal>

          <RevealList className="lg:col-span-7 space-y-8" stagger={0.08}>
            {site.recognition.awards.map((award) => (
              <RevealItem key={award.title}>
                <article className="grid grid-cols-[12px_1fr] gap-x-4">
                  <span
                    className="mt-3 inline-block h-[1.5px] w-3 bg-brand"
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-serif text-[24px] sm:text-[26px] leading-snug text-ink">
                      {award.title}
                    </h3>
                    <p className="font-mono text-[12px] uppercase tracking-wider2 text-ink/55 mt-1">
                      {award.sub}
                    </p>
                    <p className="font-sans text-[16px] leading-[1.7] text-ink/80 mt-3 max-w-[60ch]">
                      {award.body}
                    </p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}
