const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Fill out the short application below. Tell me about yourself, your position, and what you're working to improve. No fluff — just the info I need to understand where you are and where you want to go.",
  },
  {
    number: "02",
    title: "Book Your Intro Call",
    description:
      "Right after applying, you'll choose a time for a free 30-minute Google Meet. This is where we get to know each other — you'll ask me anything, I'll learn more about your game, and we'll make sure this is the right fit.",
  },
  {
    number: "03",
    title: "Get Approved",
    description:
      "After our call, I'll confirm whether it's a strong fit and send you a link to complete enrollment. Payment is only collected after you're approved — never before.",
  },
  {
    number: "04",
    title: "Build Your Program",
    description:
      "Once you're in, I design a fully custom development plan built around your mechanics, your goals, and your timeline. No templates. No cookie-cutter drills. Just work that actually moves the needle.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-coal py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="section-label mb-4">The Process</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            How It{" "}
            <span className="text-diamond italic">Works.</span>
          </h2>
          <p className="text-silver font-body font-light text-base leading-relaxed mt-5 max-w-xl">
            Four steps from finding this page to having a program built
            specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-iron">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-coal p-10">
              {/* Large ghost number */}
              <p className="font-display font-black text-[5rem] leading-none text-diamond/10 mb-4 select-none">
                {step.number}
              </p>

              {/* Connector arrow (desktop only, not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 items-center justify-center bg-coal border border-iron">
                  <svg
                    className="w-3 h-3 text-diamond/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}

              {/* Step 02 gets a highlight treatment */}
              {step.number === "02" && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-diamond/60 to-transparent" />
              )}

              <h3 className="font-display font-bold text-white text-xl uppercase tracking-wide mb-4">
                {step.title}
              </h3>
              <p className="text-silver font-body font-light text-sm leading-relaxed">
                {step.description}
              </p>

              {step.number === "02" && (
                <p className="mt-4 text-diamond font-display text-[10px] uppercase tracking-[0.18em]">
                  ◆ Calendly booking — right after you apply
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
