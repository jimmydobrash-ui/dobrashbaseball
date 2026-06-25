// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for legal documents.
// Update values here and they propagate to /privacy, /terms, and /waiver.
//
// ⚠️  IMPORTANT: Fill in `mailingAddress` with your Colorado Registered Agent's
//    exact street address from your LLC formation documents. This address is
//    what shows up in the Privacy Policy as your contact-of-record per CCPA.
// ─────────────────────────────────────────────────────────────────────────────

export const LEGAL = {
  companyName: "DoDiDe LLC",
  dba: "Dobrash Diamond Development",
  email: "dobrashbaseball@gmail.com",
  website: "https://dobrashbaseball.com",
  state: "Colorado",
  governingLaw: "State of Colorado, USA",

  // Fill in from your LLC's Articles of Organization (Colorado SOS filing).
  // The registered agent's address is public anyway — it's what's already on
  // file with the state — so it's safe and appropriate to list here.
  mailingAddress: {
    line1: "c/o Colorado Registered Agent",
    line2: "1500 N GRANT ST STE R",
    cityStateZip: "DENVER, CO 80203",
  },

  effectiveDate: "May 12, 2026",
  lastUpdated: "May 12, 2026",
} as const;

export function fullAddress() {
  const { line1, line2, cityStateZip } = LEGAL.mailingAddress;
  return `${line1}, ${line2}, ${cityStateZip}`;
}
