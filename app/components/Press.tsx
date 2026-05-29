import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';
import type { PressItem } from '@/content/site';

export function Press() {
  const featured = site.press.items.filter((i) => i.featured);
  const rest = site.press.items.filter((i) => !i.featured);

  return (
    <section
      id="press"
      className="paper relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading eyebrow="— Press" title={site.press.heading} />
        <Reveal
          as="p"
          className="font-serif italic text-[22px] text-ink/70 -mt-6 mb-12"
        >
          {site.press.blurb}
        </Reveal>

        {featured.length > 0 && (
          <RevealList className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6">
            {featured.map((item) => (
              <RevealItem key={item.href}>
                <PressCard item={item} large />
              </RevealItem>
            ))}
          </RevealList>
        )}

        {rest.length > 0 && (
          <RevealList className="grid sm:grid-cols-2 gap-px bg-ink/10 mt-2">
            {rest.map((item) => (
              <RevealItem key={item.href}>
                <PressCard item={item} />
              </RevealItem>
            ))}
          </RevealList>
        )}
      </div>
    </section>
  );
}

function PressCard({ item, large = false }: { item: PressItem; large?: boolean }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'group block relative transition-all duration-500',
        large
          ? 'border border-ink/15 bg-cream/60 hover:bg-cream hover:border-ink/40 p-7 sm:p-9'
          : 'bg-cream/80 hover:bg-cream p-6',
      ].join(' ')}
    >
      <span
        className={[
          'absolute top-0 right-0 h-px bg-brand transition-all',
          large ? 'w-8 group-hover:w-16' : 'w-6 group-hover:w-10',
        ].join(' ')}
        aria-hidden
      />
      <Wordmark
        outlet={item.outlet}
        style={item.outletStyle ?? 'serif'}
        large={large}
      />
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink/55">
          {item.date}
        </p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider2 text-brand group-hover:text-ink transition-colors">
          Read
          <span aria-hidden>{'↗︎'}</span>
        </span>
      </div>
    </a>
  );
}

function Wordmark({
  outlet,
  large,
}: {
  outlet: string;
  style?: PressItem['outletStyle'];
  large: boolean;
}) {
  const size = large ? 'text-[28px] sm:text-[34px]' : 'text-[22px]';
  return (
    <p className={`font-serif leading-[1.05] text-ink ${size}`}>
      {outlet}
    </p>
  );
}
