const isFor = [
  "You're serious about improving — not just going through the motions.",
  "You're a serious ballplayer with real aspirations — high school, college, or beyond.",
  "You want a coach who has actually played at the levels you're trying to reach.",
  "You're committed to putting in work between sessions, not just showing up for them.",
  "Your schedule or location makes consistent local private instruction difficult.",
  "You want a real development plan, not just repetition.",
];

const notFor = [
  "Players not ready to commit to structured, consistent work.",
  "Those looking for a one-session quick fix.",
  "Anyone unwilling to be coached, challenged, and pushed.",
];

function DiamondCheck() {
  return (
    <svg className="w-3.5 h-3.5 text-diamond flex-shrink-0 mt-[3px]" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1L15 8L8 15L1 8L8 1Z" />
    </svg>
  );
}

export default function WhoThisIsFor() {
  return (
    <section id="who" className="bg-coal py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="section-label mb-4">Ideal Player</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            Who This Is{" "}
            <span className="text-diamond italic">For.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* This IS for */}
          <div>
            <p className="font-display font-bold text-white text-sm uppercase tracking-[0.15em] mb-6 pb-4 border-b border-diamond/30">
              This Program Is For You If —
            </p>
            <ul className="space-y-5">
              {isFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <DiamondCheck />
                  <p className="text-silver font-body font-light text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for + age callout */}
          <div>
            <p className="font-display font-bold text-white text-sm uppercase tracking-[0.15em] mb-6 pb-4 border-b border-iron">
              This Is NOT For You If —
            </p>
            <ul className="space-y-5 mb-12">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 mt-[9px] w-3.5 flex justify-center">
                    <span className="block w-3 h-px bg-mist" />
                  </span>
                  <p className="text-mist font-body font-light text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            {/* Callout card */}
            <div className="border border-diamond/30 bg-diamond/5 px-7 py-6">
              <p className="font-display font-bold text-diamond uppercase tracking-[0.15em] text-xs mb-2">
                For Ballplayers of All Ages
              </p>
              <p className="text-silver font-body font-light text-sm leading-relaxed">
                Programs are built for players at every stage — from early
                fundamentals to the college recruiting process and beyond.
                If you&apos;re serious about the game, there&apos;s a program for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
