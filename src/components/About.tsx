import Image from "next/image";

const credentials = [
  { label: "Playing Level", value: "D1, D2, JuCo & Ind. Pro" },
  { label: "Hours Instructed", value: "1,000+" },
  { label: "Who I Coach", value: "All Ages" },
  { label: "Delivery", value: "Remote & Hybrid" },
];

export default function About() {
  return (
    <section id="about" className="bg-graphite py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Photo placeholder */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-[360px]">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-diamond z-10" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-diamond z-10" />
              <div className="aspect-[4/5] border border-iron/60 relative overflow-hidden">
                <Image
                  src="/website_2nd_picture.JPG"
                  alt="Jimmy Dobrash pitching on the mound"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="section-label mb-4">About the Coach</span>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white mb-8">
              The Background
              <br />
              <span className="text-diamond italic">Behind the Program.</span>
            </h2>

            <div className="space-y-5 text-silver font-body font-light text-base leading-relaxed mb-10">
              <p>
                I competed at every meaningful level of amateur and professional
                baseball — Division I, Division II, Junior College, and
                Independent Professional. That path wasn&apos;t straight, and it
                wasn&apos;t easy. It gave me a coaching perspective built on real
                experience, not theory.
              </p>
              <p>
                Over 1,000 hours of private instruction later, I&apos;ve worked with
                players at every stage — from middle school fundamentals to the
                college recruiting grind. I&apos;ve learned how to identify exactly
                what&apos;s holding a player back and build a program that actually
                moves the needle.
              </p>
              <p>
                Remote coaching isn&apos;t a compromise. With video analysis,
                bi-weekly calls, and a program built specifically around you,
                it&apos;s a precision tool — and a serious competitive edge.
              </p>
            </div>

            {/* Credential grid */}
            <div className="grid grid-cols-2 gap-px bg-iron">
              {credentials.map((cred) => (
                <div key={cred.label} className="bg-graphite px-6 py-5">
                  <p className="text-mist text-[10px] font-display tracking-[0.18em] uppercase mb-1">
                    {cred.label}
                  </p>
                  <p className="text-white font-display font-bold text-xl tracking-wide">
                    {cred.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
