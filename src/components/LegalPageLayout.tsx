import Image from "next/image";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export default function LegalPageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-coal">
      {/* Nav */}
      <nav className="px-6 sm:px-10 py-4 border-b border-iron flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Dobrash Diamond Development"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-display font-bold text-white text-lg tracking-[0.12em] uppercase hidden sm:block group-hover:text-diamond transition-colors duration-200">
            Dobrash Diamond Development
          </span>
        </Link>
        <Link
          href="/"
          className="text-mist font-body text-xs uppercase tracking-[0.18em] hover:text-diamond transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-iron">
          <span className="section-label mb-4 inline-block">Legal</span>
          <h1 className="font-display font-black text-[clamp(2.25rem,5vw,3.75rem)] uppercase leading-[0.95] tracking-tight text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-silver font-body font-light text-base leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-mist font-display text-[10px] uppercase tracking-[0.18em]">
            <span>Effective: {LEGAL.effectiveDate}</span>
            <span>Last Updated: {LEGAL.lastUpdated}</span>
          </div>
        </header>

        {/* Body */}
        <article className="legal-prose">{children}</article>

        {/* Cross-links */}
        <div className="mt-20 pt-10 border-t border-iron flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-mist font-body text-xs tracking-wide">
            Questions?{" "}
            <a
              href={`mailto:${LEGAL.email}`}
              className="text-diamond hover:text-diamond-light transition-colors duration-200"
            >
              {LEGAL.email}
            </a>
          </p>
          <div className="flex gap-6 text-mist font-display text-[10px] uppercase tracking-[0.18em]">
            <Link href="/privacy" className="hover:text-diamond transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-diamond transition-colors duration-200">
              Terms
            </Link>
            <Link href="/waiver" className="hover:text-diamond transition-colors duration-200">
              Waiver
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
