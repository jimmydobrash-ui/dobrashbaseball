import Image from "next/image";
import Link from "next/link";

export default function PaySuccessPage() {
  return (
    <div className="min-h-screen bg-coal flex flex-col">
      {/* Minimal nav */}
      <nav className="px-6 sm:px-10 py-4 border-b border-iron flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Dobrash Diamond Development"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="font-display font-bold text-white text-lg tracking-[0.12em] uppercase hidden sm:block">
          Dobrash Diamond Development
        </span>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 sm:px-10 py-20">
        <div className="max-w-xl w-full text-center">
          {/* Diamond check icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 border-2 border-diamond flex items-center justify-center relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-diamond" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-diamond" />
              <svg
                className="w-9 h-9 text-diamond"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <span className="section-label mb-4 inline-block">Payment Confirmed</span>

          <h1 className="font-display font-black text-[clamp(2.5rem,6vw,4rem)] uppercase leading-[0.92] tracking-tight text-white mb-6">
            You&apos;re{" "}
            <span className="text-diamond italic">In.</span>
          </h1>

          <p className="text-silver font-body font-light text-base leading-relaxed mb-10 max-w-md mx-auto">
            Payment received. Your enrollment in Dobrash Diamond Development is
            confirmed. I&apos;ll be reaching out directly within 24 hours with
            everything you need to get started.
          </p>

          {/* What's next */}
          <div className="border border-iron bg-graphite text-left p-7 mb-10">
            <p className="font-display font-bold text-white uppercase tracking-[0.18em] text-xs mb-5">
              What Happens Next
            </p>
            <ol className="space-y-4">
              {[
                "I'll contact you directly to schedule your first session and onboarding call.",
                "You'll receive access to your custom development program.",
                "We get to work.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-display font-black text-diamond/40 text-2xl leading-none select-none flex-shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-silver font-body font-light text-sm leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-mist text-xs font-body tracking-wide mb-6">
            Questions? Email{" "}
            <a
              href="mailto:jimmydobrash@gmail.com"
              className="text-silver hover:text-diamond transition-colors duration-200"
            >
              jimmydobrash@gmail.com
            </a>
          </p>

          <Link
            href="/"
            className="text-diamond font-display text-xs uppercase tracking-[0.18em] hover:text-diamond-light transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
