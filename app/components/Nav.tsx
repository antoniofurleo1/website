'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-hairline'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Antonio Furleo Semeraro — home"
        >
          <span
            className={[
              'font-serif text-[17px] leading-none transition-colors',
              scrolled ? 'text-ink' : 'text-cream mix-blend-difference',
            ].join(' ')}
          >
            Antonio <span className="italic">Furleo Semeraro</span>
          </span>
          <span className="hidden sm:inline-block w-3 h-px bg-brand" aria-hidden />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[
                  'text-[13px] tracking-wider2 uppercase transition-colors',
                  scrolled
                    ? 'text-ink/70 hover:text-brand'
                    : 'text-cream/90 hover:text-cream mix-blend-difference',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            'md:hidden relative w-9 h-9 grid place-items-center rounded-sm',
            scrolled ? 'text-ink' : 'text-cream mix-blend-difference',
          ].join(' ')}
        >
          <span className="sr-only">Menu</span>
          <span
            className={[
              'block absolute h-px w-5 bg-current transition-transform duration-300',
              open ? 'rotate-45' : '-translate-y-1.5',
            ].join(' ')}
          />
          <span
            className={[
              'block absolute h-px w-5 bg-current transition-transform duration-300',
              open ? '-rotate-45' : 'translate-y-1.5',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={[
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-cream/95 backdrop-blur-md border-b border-hairline',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="px-6 py-4 space-y-3">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-serif text-2xl text-ink hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
