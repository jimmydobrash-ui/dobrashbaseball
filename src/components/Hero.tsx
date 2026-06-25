"use client";

import { useState } from "react";
import Image from "next/image";
import { track } from "@/lib/analytics";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToForm = (location: string) => {
    track.ctaClick(location);
    track.applyStart(location);
    scrollTo("apply");
  };
  const scrollToAbout = () => {
    track.ctaClick("hero_how_it_works");
    scrollTo("about");
  };

  return (
    <>
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-coal/85 backdrop-blur-sm">
        <div className="px-6 sm:px-10 py-3 flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Dobrash Diamond Development logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="font-display font-bold text-white text-xl tracking-[0.12em] uppercase hidden sm:block">
              Dobrash Diamond Development
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-display font-bold text-silver text-xs uppercase tracking-[0.15em] hover:text-diamond transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Apply Now + mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToForm("nav")}
              className="btn-outline text-xs"
            >
              Apply Now
            </button>
            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
          <div className="flex flex-col border-t border-white/5 px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-display font-bold text-silver text-xs uppercase tracking-[0.15em] hover:text-diamond transition-colors duration-200 text-left py-3 border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen bg-coal flex items-center pt-24 lg:pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="animate-pulse-glow absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-diamond rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(94,203,220,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(94,203,220,1) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_440px] gap-x-16 gap-y-8 items-center">
          {/* ── Headline block (top-left) ── */}
          <div className="lg:col-start-1 lg:row-start-1 lg:pr-4">
            <span className="section-label mb-4">
              Remote Pitching &amp; Hitting Development
            </span>

            <h1 className="font-display font-black uppercase leading-[0.9] tracking-tight mb-6">
              <span className="block text-[clamp(2.75rem,8vw,7rem)] text-white">
                Elite
              </span>
              <span className="block text-[clamp(2.75rem,8vw,7rem)] text-white">
                Development
              </span>
              <span className="block text-[clamp(2.75rem,8vw,7rem)] text-diamond italic">
                Delivered
              </span>
              <span className="block text-[clamp(2.75rem,8vw,7rem)] text-diamond italic">
                Remotely.
              </span>
            </h1>

            <p className="text-silver font-body font-light text-base sm:text-lg leading-relaxed max-w-lg">
              Work one-on-one with a former{" "}
              <span className="text-white font-medium">
                professional pitcher
              </span>{" "}
              to add velocity, sharpen mechanics, and protect your arm —{" "}
              <span className="text-white font-medium">
                from anywhere in the country.
              </span>{" "}
              Custom programming, video breakdowns, and real accountability. No
              commute required.
            </p>
          </div>

          {/* ── Coaching photo (right on desktop, middle on mobile) ── */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full max-w-xs mx-auto lg:max-w-none lg:mx-0">
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-diamond z-10" />
              <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-diamond/30 z-10" />
              <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-diamond/30 z-10" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-diamond z-10" />

              {/* Photo */}
              <div className="aspect-[3/4] relative overflow-hidden border border-iron/60">
                <Image
                  src="/photo-hero.jpg"
                  alt="Jimmy Dobrash pitching at the professional level"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 80vw, 440px"
                />
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-coal/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coal/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ── Proof + credentials + CTA (bottom-left) ── */}
          <div className="lg:col-start-1 lg:row-start-2 lg:pr-4">
            {/* Star proof snippet */}
            <div className="border-l-2 border-diamond pl-4 mb-7">
              <div className="flex items-center gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-diamond"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.346 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-silver font-body text-sm leading-snug italic">
                &ldquo;Increased his velocity, sharpened his accuracy, and
                boosted his confidence — with a non-negotiable focus on arm
                care.&rdquo;
              </p>
              <p className="text-mist font-body text-xs tracking-wide mt-1.5">
                — Nicole G., parent of a 12U pitcher
              </p>
            </div>

            {/* Credential strip */}
            <div className="flex flex-wrap items-center gap-x-0 gap-y-2 mb-7">
              {["D1", "D2", "JuCo", "Independent Professional"].map((level, i) => (
                <span key={level} className="flex items-center">
                  <span className="font-display font-bold text-silver text-sm sm:text-base tracking-[0.12em] uppercase px-3 first:pl-0">
                    {level}
                  </span>
                  {i < 3 && <span className="text-diamond/50 text-xs">◆</span>}
                </span>
              ))}
              <span className="w-full mt-1 font-display font-bold text-diamond text-sm sm:text-base tracking-[0.1em] uppercase">
                1,000+ Hours Instructed
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={() => scrollToForm("hero_primary")}
                className="btn-primary text-center"
              >
                Apply for Coaching
              </button>
              <button
                onClick={scrollToAbout}
                className="btn-outline text-center"
              >
                See How It Works
              </button>
            </div>
            <p className="text-mist text-xs font-body tracking-wide mt-4">
              No booking links. I review every application personally and
              respond within 48 hours.
            </p>
          </div>
        </div>

        {/* Bottom edge accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-diamond/25 to-transparent" />
      </section>
    </>
  );
}
