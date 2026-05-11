"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does remote coaching actually work?",
    answer:
      "You film yourself during practice, workouts, or games — phone video is completely fine. You send that footage to me, and I return annotated video breakdowns with specific, actionable feedback. We also connect on bi-weekly video calls to review progress, adjust your program, and keep development on track. You get everything a player would from in-person coaching, just without the geographic limitation.",
  },
  {
    question: "What age groups do you work with?",
    answer:
      "All of them. I've worked with players from middle school fundamentals all the way through the college recruiting process and beyond. The program is built specifically around where you are right now — so whether that's a 12-year-old learning mechanics or a high school junior preparing for showcases, there's a program for you.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "Monthly plans can be cancelled at any time — no penalties, no questions. Annual plans are billed upfront and are non-refundable, but you'll have access to your full program for the entire year. If something comes up, we'll work with you.",
  },
  {
    question: "How much time does my athlete need to commit each week?",
    answer:
      "The program is designed around your actual schedule. Most players put in 4–6 hours of focused work per week outside of their regular practices and games. That includes the programming I build for them, filming sessions, and reviewing feedback. Quality over quantity — everything in the program has a purpose.",
  },
  {
    question: "When does payment happen?",
    answer:
      "Payment is collected only after you've been approved — never before. Here's the order: you apply, book a free 20-minute intro call, we connect, and I confirm fit. Once approved, you'll receive a secure link to complete enrollment and choose your plan. You're never charged just for applying or having the call.",
  },
  {
    question: "What makes this better than finding a local coach?",
    answer:
      "Access. Most elite-level instruction is locked behind geography — you have to live near the right facility or know the right people. Remote coaching removes that entirely. You get a program built by someone who has actually played at D1, D2, JuCo, and Independent Professional levels, delivered with the same precision as in-person work. Video analysis often catches things that even an in-person coach standing next to you would miss.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-diamond flex-shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-coal py-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-4">Common Questions</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white">
            You&apos;ve Got{" "}
            <span className="text-diamond italic">Questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-iron">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-display font-bold text-lg uppercase tracking-wide transition-colors duration-200 ${
                    openIndex === i
                      ? "text-diamond"
                      : "text-white group-hover:text-diamond/80"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronIcon open={openIndex === i} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-7" : "max-h-0"
                }`}
              >
                <p className="text-silver font-body font-light text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 border border-iron bg-graphite px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-white uppercase tracking-wide text-sm mb-1">
              Still have questions?
            </p>
            <p className="text-mist font-body text-xs">
              Reach out directly and I&apos;ll get back to you personally.
            </p>
          </div>
          <a
            href="mailto:jimmydobrash@gmail.com"
            className="btn-outline flex-shrink-0 text-xs"
          >
            Email Jimmy
          </a>
        </div>
      </div>
    </section>
  );
}
