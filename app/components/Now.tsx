import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Now() {
  return (
    <section
      id="now"
      className="bg-ink text-cream relative scroll-mt-20 grain-ink"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="02 — Now" title={site.now.heading} dark />
            <Reveal
              as="p"
              className="font-serif italic text-peach/90 text-lg max-w-md"
            >
              A live snapshot of what I'm focused on.
            </Reveal>
          </div>

          <RevealList className="lg:col-span-7 space-y-10">
            {site.now.items.map((item) => (
              <RevealItem key={item.label}>
                <article className="sm:grid sm:grid-cols-[max-content_1fr] sm:gap-x-8 sm:items-baseline">
                  <p className="font-mono text-[12px] uppercase tracking-wider2 text-peach/70 mb-2 sm:mb-0 sm:pt-2">
                    {item.label}
                  </p>
                  <div>
                    <p className="font-serif text-[22px] sm:text-[30px] leading-snug text-cream">
                      {item.body}
                    </p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 font-mono text-[13px] uppercase tracking-wider2 text-brand hover:text-cream transition-colors py-2 -my-2"
                      >
                        <span className="inline-block w-4 h-px bg-current" />
                        {item.link.label}
                      </a>
                    )}
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
