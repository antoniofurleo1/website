import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  return (
    <section
      id="contact"
      className="paper relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading eyebrow="06 — Contact" title={site.contact.heading} />

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Reveal
              as="p"
              className="font-serif text-[28px] sm:text-[36px] leading-[1.25] text-ink max-w-[26ch]"
            >
              {site.contact.cta}
            </Reveal>
            <Reveal as="div" delay={0.15}>
              <a
                href={site.contact.primaryEmail.href}
                className="inline-flex items-center gap-3 mt-8 font-serif text-[26px] sm:text-[32px] text-ink hover:text-brand transition-colors group"
              >
                <span className="inline-block h-[1.5px] w-6 bg-brand transition-all group-hover:w-10" />
                Say hello
                <span className="font-sans text-[20px]">↗</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-hairline">
            <RevealList className="space-y-7" stagger={0.06}>
              <RevealItem>
                <ContactBlock label="Email">
                  {site.contact.emails.map((e) => (
                    <a
                      key={e.href}
                      href={e.href}
                      className="block font-sans text-[18px] text-ink hover:text-brand transition-colors"
                    >
                      {e.label}
                    </a>
                  ))}
                </ContactBlock>
              </RevealItem>

              <RevealItem>
                <ContactBlock label="Phone">
                  {site.contact.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="block font-mono text-[16px] text-ink hover:text-brand transition-colors"
                    >
                      {p.label}{' '}
                      <span className="text-ink/45 text-[13px]">({p.note})</span>
                    </a>
                  ))}
                </ContactBlock>
              </RevealItem>

              <RevealItem>
                <ContactBlock label="Elsewhere">
                  {site.contact.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mr-5 font-sans text-[18px] text-ink hover:text-brand transition-colors"
                    >
                      {l.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ))}
                </ContactBlock>
              </RevealItem>
            </RevealList>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink/55 mb-2">
        {label}
      </p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}
