import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-ink text-peach/70">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[12px] tracking-wider2 uppercase">
          {site.footer.line}
        </p>
        <p className="font-mono text-[11px] tracking-wider2 uppercase text-peach/50">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
