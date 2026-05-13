"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Once you create your Calendly account, replace this URL with your real link.
// Example: https://calendly.com/jimmydobrash/intro-call
// ─────────────────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/dobrashbaseball/30min";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdobjoe";

const inputCls =
  "w-full bg-pitch border border-iron text-white font-body text-sm px-4 py-3 placeholder:text-mist focus:outline-none focus:border-diamond/60 focus:bg-pitch/80 transition-colors duration-200";

const labelCls =
  "block text-silver font-display text-[10px] uppercase tracking-[0.18em] mb-2";

function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existing = document.getElementById("calendly-widget-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-none border border-iron/40"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default function ApplicationForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [age, setAge] = useState<number | null>(null);
  const isMinor = age !== null && age < 18;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="apply" className="bg-coal py-24 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label mb-4">Get Started</span>
          <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-white mb-5">
            Apply to Work
            <br />
            <span className="text-diamond italic">With Me.</span>
          </h2>
          <p className="text-silver font-body font-light text-base leading-relaxed mb-4">
            Fill this out and I&apos;ll review your application personally.
            Right after submitting, you&apos;ll choose a time for a free
            30-minute intro call.
          </p>
          {/* Price reminder */}
          <div className="flex items-center gap-6 border border-iron bg-coal px-5 py-3 mt-6">
            <div className="text-center">
              <p className="font-display font-black text-white text-xl leading-none">$250</p>
              <p className="text-mist font-body text-[10px] uppercase tracking-widest mt-0.5">/month</p>
            </div>
            <div className="w-px h-8 bg-iron flex-shrink-0" />
            <div className="text-center">
              <p className="font-display font-black text-diamond text-xl leading-none">$2,000</p>
              <p className="text-mist font-body text-[10px] uppercase tracking-widest mt-0.5">/year · save $1,000</p>
            </div>
            <div className="w-px h-8 bg-iron flex-shrink-0" />
            <p className="text-mist font-body text-xs leading-relaxed">
              Payment collected <span className="text-silver">after approval only.</span>
            </p>
          </div>
        </div>

        {/* ── Success state ── */}
        {status === "success" ? (
          <div>
            {/* Confirmation message */}
            <div className="border border-diamond/40 bg-diamond/5 p-10 text-center mb-10">
              <div className="flex justify-center mb-5">
                <svg
                  className="w-12 h-12 text-diamond"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-2xl uppercase tracking-wide mb-3">
                Application Received
              </h3>
              <p className="text-silver font-body font-light text-sm leading-relaxed max-w-sm mx-auto">
                You&apos;re one step closer. Now book your free 20-minute intro
                call below — this is where we get to know each other and make
                sure the program is the right fit.
              </p>
            </div>

            {/* Calendly booking */}
            <div className="mb-4">
              <p className="section-label mb-3">Next Step</p>
              <h3 className="font-display font-bold text-white text-2xl uppercase tracking-wide mb-2">
                Book Your Intro Call.
              </h3>
              <p className="text-silver font-body font-light text-sm leading-relaxed mb-8">
                Pick a time that works for you. The call is free, takes 30
                minutes, and happens on Google Meet. I&apos;ll be prepared with
                your application — come with your questions.
              </p>
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full name */}
            <div>
              <label className={labelCls} htmlFor="name">
                Player&apos;s Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="First & Last Name"
                className={inputCls}
              />
            </div>

            {/* Age + Position */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls} htmlFor="age">
                  Age *
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  min={8}
                  max={99}
                  placeholder="e.g. 17"
                  className={inputCls}
                  onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : null)}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="position">
                  Primary Position(s) *
                </label>
                <input
                  id="position"
                  name="position"
                  type="text"
                  required
                  placeholder="e.g. Shortstop / Pitcher"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Goals */}
            <div>
              <label className={labelCls} htmlFor="goals">
                Goals &amp; What You&apos;re Looking to Improve *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={5}
                placeholder="Tell me where you are, where you want to go, and the specific areas you want to develop..."
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* How they heard */}
            <div>
              <label className={labelCls} htmlFor="referral">
                How Did You Hear About Us? *
              </label>
              <input
                id="referral"
                name="referral"
                type="text"
                required
                placeholder="Instagram, referral, Google, etc."
                className={inputCls}
              />
            </div>

            {/* Parent / guardian block — only shown for players under 18 */}
            {isMinor && (
              <div className="border-t border-iron pt-8">
                <p className="font-display font-bold text-diamond text-[10px] uppercase tracking-[0.18em] mb-6">
                  Parent / Guardian Information — Required for Players Under 18
                </p>
                <div className="space-y-6">
                  <div>
                    <label className={labelCls} htmlFor="parent_name">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="parent_name"
                      name="parent_name"
                      type="text"
                      required
                      placeholder="Full Name"
                      className={inputCls}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} htmlFor="parent_email">
                        Email *
                      </label>
                      <input
                        id="parent_email"
                        name="parent_email"
                        type="email"
                        required
                        placeholder="email@example.com"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="parent_phone">
                        Phone *
                      </label>
                      <input
                        id="parent_phone"
                        name="parent_phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        className={inputCls}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Consent / Agreement */}
            <div className="border-t border-iron pt-8">
              <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer group">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 flex-shrink-0 accent-diamond cursor-pointer"
                />
                <span className="text-silver font-body text-xs leading-relaxed">
                  I have read and agree to the{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    className="text-diamond underline underline-offset-2 hover:text-diamond-light"
                  >
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-diamond underline underline-offset-2 hover:text-diamond-light"
                  >
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link
                    href="/waiver"
                    target="_blank"
                    className="text-diamond underline underline-offset-2 hover:text-diamond-light"
                  >
                    Liability Waiver &amp; Assumption of Risk
                  </Link>
                  . For players under 18, I confirm I am the parent or legal
                  guardian, I&apos;m submitting this application on the
                  player&apos;s behalf, and I&apos;m consenting to these
                  documents for the player as well.{" "}
                  <span className="text-diamond">*</span>
                </span>
              </label>
            </div>

            {/* Trust strip */}
            <div className="border border-iron bg-coal px-5 py-4 flex items-start gap-3">
              <svg
                className="w-4 h-4 text-diamond flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p className="text-mist font-body text-xs leading-relaxed">
                <span className="text-silver">Your information is safe.</span>{" "}
                We never sell or share your data. Submissions are encrypted in
                transit, and you can request deletion of your data at any
                time.
              </p>
            </div>

            {/* Review timeline note */}
            <div className="border border-iron bg-coal px-5 py-4 flex items-start gap-3">
              <svg className="w-4 h-4 text-diamond flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-mist font-body text-xs leading-relaxed">
                After submitting, you&apos;ll be prompted to book a free intro call.
                I review all applications within{" "}
                <span className="text-silver">48 hours</span> and confirm fit
                after our call.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-xs font-body text-center mt-4 tracking-wide">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
