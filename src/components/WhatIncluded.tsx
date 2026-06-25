type Service = {
  title: string;
  description: string;
  tag?: string;
  // If set, the first occurrence of `linkLabel` in the description renders as a
  // link to `linkHref` (opens in a new tab to preserve the coaching funnel).
  linkLabel?: string;
  linkHref?: string;
};

const services: Service[] = [
  {
    title: "1-on-1 Remote Training",
    description:
      "Individualized programs built around your position, mechanics, and goals — delivered remotely with structured accountability built in.",
  },
  {
    title: "Group Programs",
    description:
      "Small-group remote and hybrid sessions that blend elite instruction with competitive energy from working alongside peers.",
  },
  {
    title: "Team Coaching",
    description:
      "Full-team development packages for coaches and programs ready to bring an elite remote development system to their roster.",
  },
  {
    title: "Video Analysis",
    description:
      "Frame-by-frame mechanical breakdown of your hitting, pitching, or fielding — with detailed, actionable feedback delivered via annotated video.",
  },
  {
    title: "Custom Programming",
    tag: "Built In-House",
    linkLabel: "DiamondReps",
    linkHref: "https://diamondreps.app",
    description:
      "No templates. Every program is designed around where you are and where you need to go — then delivered through DiamondReps, my custom-built training app, so you can follow your daily plan, track your work, and stay on track between sessions.",
  },
  {
    title: "Bi-Weekly Video Calls",
    description:
      "Regular face-to-face check-ins to review progress, answer questions, adjust your program, and keep your development on track.",
  },
];

function renderDescription(service: Service) {
  const { description, linkLabel, linkHref } = service;
  if (!linkLabel || !linkHref || !description.includes(linkLabel)) {
    return description;
  }
  const [before, after] = description.split(linkLabel);
  return (
    <>
      {before}
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-diamond underline underline-offset-2 hover:text-diamond-light transition-colors duration-200"
      >
        {linkLabel}
      </a>
      {after}
    </>
  );
}

function DiamondIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-diamond flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1L15 8L8 15L1 8L8 1Z" />
    </svg>
  );
}

export default function WhatIncluded() {
  return (
    <section id="services" className="bg-graphite py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="section-label mb-4">What You Get</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            What&apos;s{" "}
            <span className="text-diamond italic">Included.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-iron">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-graphite p-8 group hover:bg-coal transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <DiamondIcon />
                <h3 className="font-display font-bold text-white text-[1.1rem] uppercase tracking-wide">
                  {service.title}
                </h3>
                {service.tag && (
                  <span className="ml-auto bg-diamond/10 border border-diamond/40 text-diamond font-display font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 whitespace-nowrap">
                    {service.tag}
                  </span>
                )}
              </div>
              <p className="text-silver font-body font-light text-sm leading-relaxed pl-[1.375rem]">
                {renderDescription(service)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-mist text-xs font-body text-center mt-10 tracking-wide">
          And much more — every program is tailored to the individual.
        </p>
      </div>
    </section>
  );
}
