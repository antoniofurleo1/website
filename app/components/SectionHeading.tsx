import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      {eyebrow && (
        <Reveal
          as="p"
          y={10}
          className={[
            'font-mono text-[11px] uppercase tracking-wider2',
            dark ? 'text-peach/80' : 'text-ink/55',
          ].join(' ')}
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.05}
        className={[
          'font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] mt-3',
          dark ? 'text-cream' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </Reveal>
      <Reveal as="div" delay={0.12}>
        <span className="inline-block mt-5 h-[1.5px] w-9 bg-brand" />
      </Reveal>
    </div>
  );
}
