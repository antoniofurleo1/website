'use client';

// Decorative running strip between sections — adds visual rhythm without noise.
// Pure CSS animation, respects prefers-reduced-motion via globals.css override.

const phrases = [
  'Brown · 2029',
  'Computer Science – Economics',
  'Founder of Bubl',
  'Builder',
  'Italian · English',
  'Providence ↔ Monopoli',
];

export function Marquee() {
  const all = [...phrases, ...phrases];
  return (
    <div className="bg-cream border-y border-hairline overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-3 will-change-transform">
        {all.map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center font-serif italic text-[22px] sm:text-[28px] text-ink/70 px-6"
          >
            {p}
            <span className="mx-6 inline-block w-1.5 h-1.5 rounded-full bg-brand" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
