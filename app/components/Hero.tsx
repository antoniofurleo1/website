'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { site } from '@/content/site';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const ruleScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 2.4]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain-ink relative min-h-[100svh] bg-ink text-cream flex items-center overflow-hidden"
    >
      {/* Big LinkedIn pill — first thing people see, easy to share */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-[72px] sm:top-24 left-6 sm:left-10 z-10"
      >
        {site.topLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.label} (opens in a new tab)`}
            className="group inline-flex items-center gap-2.5 sm:gap-3.5 border border-peach/40 hover:border-cream hover:bg-cream hover:text-ink text-cream px-3.5 py-2 sm:px-5 sm:py-3 rounded-full font-sans font-medium text-[14px] sm:text-[17px] transition-all duration-300 backdrop-blur-sm"
          >
            <LinkedInGlyph className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
            <span>{l.label}</span>
            <span
              aria-hidden
              className="font-serif text-[15px] sm:text-[18px] translate-y-[-1px] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px]"
            >
              {'↗︎'}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Headshot — circular, bottom-right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 bottom-8 sm:right-12 sm:bottom-12 z-10"
      >
        <div className="relative">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-peach/30 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Antonio Furleo Semeraro"
              width={224}
              height={224}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -left-1 w-3 h-px bg-brand" aria-hidden />
        </div>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-6xl w-full px-6 sm:px-10 py-32 sm:py-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-[11px] sm:text-xs uppercase tracking-wider2 text-peach/80 mb-8"
        >
          {site.hero.eyebrow}
        </motion.p>

        <h1 className="font-serif text-cream leading-[1.02] text-[clamp(2.5rem,7.5vw,6.5rem)]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {site.name.first}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-peach"
          >
            {site.name.last}
          </motion.span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ scaleX: ruleScale, transformOrigin: 'left' }}
          className="mt-8 sm:mt-10 h-[2px] w-16 bg-brand"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2"
        >
          <p className="font-sans text-base sm:text-lg text-cream/90">
            {site.tagline}
          </p>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-peach/50" aria-hidden />
          <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider2 text-peach/80">
            {site.hero.accents.join(' · ')}
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6 z-10 flex items-end justify-between text-peach/70">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider2">
          Scroll
        </span>
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider2 hidden sm:inline">
          {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
