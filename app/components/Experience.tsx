'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import { RevealList, RevealItem } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-ink text-cream grain-ink relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading eyebrow="04 — Experience" title="Roles & internships" dark />

        <RevealList className="divide-y divide-darkline" stagger={0.05}>
          {site.experience.map((job, i) => {
            const isOpen = open === i;
            const hasDetails = !!(job.details && job.details.length);
            const expandable = hasDetails || !!job.blurb;

            return (
              <RevealItem key={`${job.org}-${i}`}>
                <article>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-${i}`}
                    className="w-full flex md:grid md:grid-cols-12 items-start gap-3 md:gap-4 py-5 sm:py-6 text-left group hover:bg-cream/[0.02] transition-colors -mx-3 px-3 rounded-sm"
                  >
                    <p className="hidden md:block md:col-span-3 font-mono text-[12px] uppercase tracking-wider2 text-peach/70 pt-1.5 self-start">
                      {job.period}
                    </p>
                    <div className="flex-1 md:col-span-8 grid sm:grid-cols-[1fr_max-content] gap-x-6 gap-y-1 items-baseline">
                      <h3 className="font-serif text-[20px] sm:text-[26px] leading-snug text-cream">
                        {job.role}{' '}
                        <span className="italic text-peach">· {job.org}</span>
                      </h3>
                      <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-wider2 text-peach/70 self-center">
                        {job.location}
                      </p>
                      <p className="md:hidden font-mono text-[11px] uppercase tracking-wider2 text-peach/60 sm:col-span-2 -mt-0.5">
                        {job.period}
                      </p>
                    </div>
                    <div className="md:col-span-1 flex md:justify-end items-start pt-1 shrink-0">
                      <Chevron open={isOpen} />
                    </div>
                  </button>

                  <div
                    id={`exp-${i}`}
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      maxHeight: isOpen && expandable ? '600px' : '0px',
                      opacity: isOpen && expandable ? 1 : 0,
                    }}
                    aria-hidden={!isOpen}
                  >
                    <div className="md:grid md:grid-cols-12 gap-4 pb-7 pt-1">
                      <div className="md:col-start-4 md:col-span-8 max-w-[68ch]">
                        <p className="font-sans text-[16px] leading-[1.7] text-cream/85">
                          {job.blurb}
                        </p>
                        {hasDetails && (
                          <ul className="mt-4 space-y-1.5">
                            {job.details!.map((d, di) => (
                              <li
                                key={di}
                                className="font-sans text-[15px] text-cream/80 pl-4 relative"
                              >
                                <span
                                  className="absolute left-0 top-[0.65em] w-2 h-px bg-brand"
                                  aria-hidden
                                />
                                {d}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center w-7 h-7 border border-peach/30 text-peach/70 group-hover:border-brand group-hover:text-brand transition-all duration-300',
        open ? 'rotate-90' : 'rotate-0',
      ].join(' ')}
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2 L8 6 L4 10" strokeLinecap="square" />
      </svg>
    </span>
  );
}
