// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// Jimmy: add more real quotes to this array as clients give them. The section
// auto-adjusts its layout to the number of entries. Only put REAL testimonials
// here — never placeholders (fake reviews are an FTC issue).
// Each entry needs: quote, name, role (e.g. "Parent — 16U Catcher")
// ─────────────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Jimmy has been a game-changer for my son. At 12 years old he came to him with already established mechanics, and instead of overhauling them, Jimmy built on what was already there — increasing his velocity, sharpening his accuracy, and expanding his overall pitching ability. Even more important, Jimmy has boosted my son's confidence on and off the mound through clear instruction, encouragement, and a tailored approach that respected his development. We've seen measurable improvement and a newfound love for the game. The icing on the cake is Jimmy's non-negotiable dedication to arm care. We feel confident knowing that he is looking out for our son's physical health and safety so that he can play the game for many years to come. I couldn't recommend Jimmy more.",
    name: "Nicole G.",
    role: "Parent — 12U Pitcher",
  },
  {
    quote:
      "We can't recommend Coach Jimmy highly enough. He has worked with our 13-year-old for the past three years, and the progress has been incredible to watch. He brings a consistently positive attitude and focuses on helping each player improve, regardless of their starting point. Coach Jimmy has a great ability to fine-tune mechanics in a way that is easy for young athletes to understand and apply. The technology and training tools he uses are truly next level and have made a noticeable impact on development and performance. Coach Jimmy's dedication for arm care and recovery is also so important for this age and pitching sustainability. Beyond the technical side, he genuinely cares about his players and creates an encouraging environment that builds both confidence and skill. We are extremely grateful for Coach Jimmy.",
    name: "Andrea M.",
    role: "Parent — 13U Pitcher",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 text-diamond/40 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-diamond"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.346 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Layout adapts to count: 1 = featured, 2 = two-up, 3+ = three-up grid.
  const cols =
    testimonials.length >= 3
      ? "md:grid-cols-3"
      : testimonials.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-1";

  return (
    <section id="testimonials" className="bg-coal py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-4">Results</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            What Players &amp;{" "}
            <span className="text-diamond italic">Families Say.</span>
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${cols} gap-px bg-iron`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-coal p-10 flex flex-col gap-6 relative"
            >
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-diamond/60 to-transparent" />
              )}
              <div className="flex items-center justify-between">
                <QuoteIcon />
                <Stars />
              </div>
              <p className="text-silver font-body font-light text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-iron pt-6">
                <p className="font-display font-bold text-white text-base uppercase tracking-wide">
                  {t.name}
                </p>
                <p className="text-mist font-body text-xs tracking-wide mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
