"use client";

import Image from "next/image";
import { useState } from "react";

const included = [
  "Custom player development programming",
  "Video analysis & mechanical breakdown",
  "Bi-weekly video calls",
  "1-on-1 remote coaching sessions",
  "Ongoing program adjustments",
  "Direct access to your coach",
];

function PricingCard({
  label,
  price,
  period,
  billing,
  badge,
  savings,
  plan,
  highlight,
}: {
  label: string;
  price: string;
  period: string;
  billing: string;
  badge?: string;
  savings?: string;
  plan: "monthly" | "annual";
  highlight: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col p-8 sm:p-10 ${
        highlight
          ? "border-2 border-diamond bg-diamond/5"
          : "border border-iron bg-graphite"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-diamond text-coal font-display font-bold text-xs uppercase tracking-[0.15em] px-4 py-1.5">
            {badge}
          </span>
        </div>
      )}

      <p className="font-display font-bold text-diamond uppercase tracking-[0.18em] text-xs mb-5">
        {label}
      </p>

      <div className="mb-2">
        <span className="font-display font-black text-white text-[3.5rem] leading-none">
          {price}
        </span>
        <span className="text-silver font-body text-base ml-2">/{period}</span>
      </div>

      <p className="text-mist font-body text-xs tracking-wide mb-2">{billing}</p>

      {savings && (
        <p className="font-display font-bold text-diamond text-sm uppercase tracking-wide mb-6">
          {savings}
        </p>
      )}

      <div className={savings ? "" : "mb-6"} />

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full font-display font-bold tracking-[0.15em] uppercase py-4 text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mb-4 ${
          highlight
            ? "bg-diamond text-coal hover:bg-diamond-light"
            : "bg-iron text-white hover:bg-iron/70 border border-iron"
        }`}
        style={
          highlight && !loading
            ? { boxShadow: "0 0 28px rgba(94,203,220,0.2)" }
            : {}
        }
      >
        {loading ? "Redirecting to Stripe..." : "Get Started"}
      </button>

      {error && (
        <p className="text-red-400 text-xs font-body text-center">{error}</p>
      )}
    </div>
  );
}

export default function PayPage() {
  return (
    <div className="min-h-screen bg-coal">
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

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Approved Enrollment</span>
          <h1 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white mb-5">
            Complete Your
            <br />
            <span className="text-diamond italic">Enrollment.</span>
          </h1>
          <p className="text-silver font-body font-light text-base leading-relaxed max-w-lg mx-auto">
            You&apos;ve been approved. Select the plan that works best for you
            and complete your payment securely through Stripe.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-iron mb-16">
          <PricingCard
            label="Monthly"
            price="$250"
            period="month"
            billing="Billed monthly · Renews automatically"
            plan="monthly"
            highlight={false}
          />
          <PricingCard
            label="Annual"
            price="$2,000"
            period="year"
            billing="Billed annually · Renews after 365 days"
            badge="Best Value"
            savings="Save $1,000 vs monthly"
            plan="annual"
            highlight={true}
          />
        </div>

        {/* What's included */}
        <div className="border border-iron bg-graphite p-8 sm:p-10 mb-10">
          <p className="font-display font-bold text-white uppercase tracking-[0.18em] text-sm mb-6">
            Everything Included in Both Plans
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg
                  className="w-3 h-3 text-diamond flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1L15 8L8 15L1 8L8 1Z" />
                </svg>
                <span className="text-silver font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secure payment note */}
        <p className="text-mist text-xs font-body text-center tracking-wide">
          Payments are processed securely by{" "}
          <span className="text-silver">Stripe</span>. Your card information is
          never stored on this site. You can cancel or manage your subscription
          at any time.
        </p>
      </main>
    </div>
  );
}
