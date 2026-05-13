// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// Jimmy: replace the two placeholder entries below with real quotes when ready.
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
    // PLACEHOLDER — replace with a real testimonial
    quote:
      "I was skeptical about remote coaching at first. Two months in and it's more focused and effective than any in-person instruction I've had. The video breakdowns alone are worth it — Jimmy sees things nobody else caught.",
    name: "Tyler M.",
    role: "College Freshman — RHP",
  },
  {
    // PLACEHOLDER — replace with a real testimonial
    quote:
      "Jimmy doesn't hand you a list of drills and call it a program. He actually builds something around your kid specifically. My son has a plan every single week and he's bought in because he knows exactly what he's working toward.",
    name: "David K.",
    role: "Parent — 14U Shortstop",
  },
];

function QuoteIcon() {
  return (
    <svg
      className="w-6 h-6 text-diamond/40 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-iron">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-coal p-10 flex flex-col gap-6 relative"
            >
              {/* Top accent line on first card */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-diamond/60 to-transparent" />
              )}

              <QuoteIcon />

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
