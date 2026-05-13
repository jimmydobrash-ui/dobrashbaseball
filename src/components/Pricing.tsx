"use client";

const features = [
  "Custom player development programming",
  "Video analysis & mechanical breakdown",
  "Bi-weekly video calls",
  "1-on-1 remote coaching sessions",
  "Ongoing program adjustments",
  "Direct access to your coach",
  "Group training opportunities",
  "Priority scheduling",
];

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-diamond flex-shrink-0 mt-[2px]"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 1L15 8L8 15L1 8L8 1Z" />
    </svg>
  );
}

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-graphite py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-4">Transparent Pricing</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            Simple,{" "}
            <span className="text-diamond italic">Straightforward.</span>
          </h2>
          <p className="text-silver font-body font-light text-base leading-relaxed mt-5 max-w-xl">
            No hidden fees. No upsells. Both plans include everything — the
            only difference is how you pay.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-iron mb-12">
          {/* Monthly */}
          <div className="bg-graphite p-10 flex flex-col">
            <p className="section-label mb-6">Monthly</p>
            <div className="flex items-end gap-2 mb-1">
              <span className="font-display font-black text-white text-[4.5rem] leading-none">
                $250
              </span>
              <span className="text-mist font-body text-base mb-3">/month</span>
            </div>
            <p className="text-mist font-body text-xs tracking-wide mb-8">
              Billed monthly · Renews automatically · Cancel anytime
            </p>

            <ul className="space-y-3 mb-10 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-silver font-body text-sm leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className="w-full font-display font-bold tracking-[0.15em] uppercase py-4 text-sm border border-iron text-white hover:border-diamond/50 hover:text-diamond transition-all duration-200"
            >
              Apply Now
            </button>
          </div>

          {/* Annual — highlighted */}
          <div className="relative bg-graphite p-10 flex flex-col border-2 border-diamond">
            {/* Best value badge */}
            <div className="absolute -top-[17px] left-10">
              <span className="bg-diamond text-coal font-display font-bold text-xs uppercase tracking-[0.15em] px-4 py-1.5">
                Best Value
              </span>
            </div>

            <p className="section-label mb-6">Annual</p>
            <div className="flex items-end gap-2 mb-1">
              <span className="font-display font-black text-white text-[4.5rem] leading-none">
                $2,000
              </span>
              <span className="text-mist font-body text-base mb-3">/year</span>
            </div>
            <p className="text-mist font-body text-xs tracking-wide mb-1">
              Billed annually · Renews after 365 days
            </p>
            <p className="font-body text-sm text-mist mb-1">
              <span className="line-through text-mist/60">$3,000/yr if billed monthly</span>
              {" "}→{" "}
              <span className="text-diamond font-medium">you save $1,000</span>
            </p>
            <p className="font-display font-bold text-diamond text-sm uppercase tracking-wide mb-8">
              Equivalent to $166/month — 2 months free
            </p>

            <ul className="space-y-3 mb-10 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-silver font-body text-sm leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className="btn-primary w-full text-center"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="border-t border-iron pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-mist font-body text-sm leading-relaxed max-w-lg">
            <span className="text-silver font-medium">How it works:</span>{" "}
            Submit your application, book a free intro call, and I&apos;ll confirm
            fit within 48 hours. Payment is only collected after you&apos;re
            approved — never before.
          </p>
          <p className="text-mist font-body text-xs tracking-wide flex-shrink-0">
            Questions?{" "}
            <a
              href="mailto:dobrashbaseball@gmail.com"
              className="text-diamond hover:text-diamond-light transition-colors duration-200"
            >
              dobrashbaseball@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
