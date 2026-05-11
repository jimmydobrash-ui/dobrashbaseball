"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-3 flex items-center justify-between border-b border-white/5 bg-coal/85 backdrop-blur-sm">
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
        <button onClick={scrollToForm} className="btn-outline text-xs">
          Apply Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen bg-coal flex items-center pt-20 overflow-hidden">
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
          <div className="hidden lg:block absolute left-[58%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-diamond/15 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-20 flex flex-col lg:flex-row items-center gap-14 lg:gap-0">
          {/* ── Left: Text ── */}
          <div className="flex-1 lg:pr-20">
            <span className="section-label mb-5">Dobrash Diamond Development</span>

            <h1 className="font-display font-black uppercase leading-[0.92] tracking-tight mb-7">
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-white">
                Elite
              </span>
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-white">
                Development
              </span>
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-diamond italic">
                Delivered
              </span>
              <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-diamond italic">
                Remotely.
              </span>
            </h1>

            <p className="text-silver font-body font-light text-lg leading-relaxed mb-10 max-w-lg">
              Professional baseball coaching for{" "}
              <span className="text-white font-medium">serious ballplayers of all ages</span>{" "}
              — wherever you are. Elite-level instruction, no commute required.
            </p>

            {/* Credential strip */}
            <div className="flex flex-wrap items-center gap-x-0 gap-y-3 mb-10">
              {["D1", "D2", "JuCo", "Independent Professional"].map((level, i) => (
                <span key={level} className="flex items-center">
                  <span className="font-display font-bold text-silver text-base tracking-[0.12em] uppercase px-3 first:pl-0">
                    {level}
                  </span>
                  {i < 3 && (
                    <span className="text-diamond/50 text-xs">◆</span>
                  )}
                </span>
              ))}
              <span className="w-full mt-1 font-display font-bold text-diamond text-base tracking-[0.1em] uppercase">
                1,000+ Hours Instructed
              </span>
            </div>

            <button onClick={scrollToAbout} className="btn-primary mb-4">
              See How It Works
            </button>
            <p className="text-mist text-xs font-body tracking-wide">
              No booking links. I review every application personally.{" "}
              <button
                onClick={scrollToForm}
                className="text-diamond underline underline-offset-2 hover:text-diamond-light transition-colors duration-200 cursor-pointer"
              >
                Ready to apply? Skip down ↓
              </button>
            </p>
          </div>

          {/* ── Right: Coaching photo ── */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[380px] xl:w-[420px]">
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
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                {/* Left-side fade to blend into dark page background */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-coal/60 to-transparent pointer-events-none" />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coal/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-diamond/25 to-transparent" />
      </section>
    </>
  );
}
