import { site } from '@/content/site';
import { Reveal, RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';
import type { Project } from '@/content/site';

export function Work() {
  return (
    <section
      id="work"
      className="paper relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading eyebrow="03 — Work" title="Selected projects" />

        {/* Featured projects */}
        <RevealList className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {site.projects.map((project) => (
            <RevealItem key={project.id}>
              <article className="group h-full border border-ink/15 bg-cream/60 hover:bg-cream hover:border-ink/40 transition-all duration-500 p-7 sm:p-9 relative overflow-hidden">
                <span className="absolute top-0 right-0 h-px w-8 bg-brand" aria-hidden />
                <p className="font-mono text-[12px] uppercase tracking-wider2 text-ink/55 mb-3">
                  {project.kicker}
                </p>
                <h3 className="font-serif text-[32px] sm:text-[36px] leading-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ink/80 max-w-[52ch]">
                  {project.blurb}
                </p>
                {project.highlights && (
                  <ul className="mt-5 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="font-sans text-[15px] text-ink/75 pl-4 relative"
                      >
                        <span className="absolute left-0 top-[0.6em] w-2 h-px bg-brand" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-mono text-[12px] uppercase tracking-wider2 text-brand hover:text-ink transition-colors"
                  >
                    <span className="inline-block w-5 h-px bg-current" />
                    {project.link.label}
                  </a>
                )}
              </article>
            </RevealItem>
          ))}
        </RevealList>

        {/* Innovation portfolio (smaller, 3 across) */}
        <div className="mt-20 sm:mt-28">
          <Reveal
            as="p"
            className="font-mono text-[12px] uppercase tracking-wider2 text-ink/55 mb-6"
          >
            Earlier — innovation, robotics & social
          </Reveal>
          <RevealList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {site.portfolio.map((p) => (
              <RevealItem key={p.id}>
                <PortfolioCard project={p} />
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project: p }: { project: Project }) {
  const inner = (
    <article className="bg-cream/80 hover:bg-cream transition-colors duration-500 p-6 h-full relative">
      {p.link && (
        <span
          aria-hidden
          className="absolute top-3 right-3 font-serif text-ink/40 text-[18px] transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:translate-y-[-2px]"
        >
          ↗
        </span>
      )}
      <h4 className="font-serif text-[24px] text-ink leading-tight">
        {p.title}
      </h4>
      <p className="font-mono text-[11px] uppercase tracking-wider2 text-ink/50 mt-1.5">
        {p.kicker}
      </p>
      <p className="font-sans text-[15px] leading-[1.65] text-ink/80 mt-4">
        {p.blurb}
      </p>
    </article>
  );

  if (p.link) {
    return (
      <a
        href={p.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        aria-label={`${p.title} (opens in a new tab)`}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
