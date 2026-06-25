// ─────────────────────────────────────────────────────────────────────────────
// Lightweight GA4 event helper. Fires events through the gtag() already loaded
// in layout.tsx. Safe to call anywhere — no-ops if gtag isn't available yet
// (e.g. during SSR or if analytics is blocked).
// ─────────────────────────────────────────────────────────────────────────────

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Convenience wrappers for the events we care about, so call sites stay
// consistent and typo-free.
export const track = {
  ctaClick: (location: string) =>
    trackEvent("cta_click", { cta_location: location }),

  applyStart: (location: string) =>
    trackEvent("apply_start", { source: location }),

  applySubmit: () => trackEvent("generate_lead", { form: "application" }),

  payClick: (plan: "monthly" | "annual") =>
    trackEvent("begin_checkout", { plan }),

  scrollDepth: (percent: number) =>
    trackEvent("scroll_depth", { percent }),
};
