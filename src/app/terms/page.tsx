import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL, fullAddress } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dobrash Diamond Development",
  description:
    "The agreement between you and DoDiDe LLC governing use of the website and coaching services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="This is the agreement between you and DoDiDe LLC governing your use of this website and our coaching services. Please read it carefully — submitting an application means you agree to these terms."
    >
      <div className="callout">
        <p className="!mb-0">
          <strong>The short version:</strong> You apply, we have an intro
          call, and if we&apos;re a good fit we&apos;ll enroll you. You pay
          either monthly or annually for ongoing remote coaching. You can
          cancel a monthly subscription at any time; annual subscriptions are
          non-refundable except at our discretion. We&apos;ll show up
          prepared and committed — we expect the same from you.
        </p>
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By submitting an application, booking a call, completing payment, or
        otherwise using the services offered through{" "}
        <a href={LEGAL.website}>{LEGAL.website}</a> (the &ldquo;Site&rdquo;),
        you agree to these Terms of Service (&ldquo;Terms&rdquo;), our{" "}
        <a href="/privacy">Privacy Policy</a>, and our{" "}
        <a href="/waiver">Liability Waiver</a>. If you do not agree, do not
        use the Site or our services.
      </p>
      <p>
        These Terms form a binding legal agreement between you (&ldquo;you,&rdquo;
        &ldquo;Client,&rdquo; or &ldquo;Player&rdquo;) and{" "}
        <strong>{LEGAL.companyName}</strong>, doing business as{" "}
        <strong>{LEGAL.dba}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        &ldquo;our,&rdquo; or &ldquo;Coach&rdquo;).
      </p>

      <h2>2. Description of Services</h2>
      <p>
        We provide remote one-on-one baseball coaching, which may include
        custom development programming, video analysis, mechanical breakdowns,
        regular video calls, ongoing program adjustments, and other services
        as described on the Site and agreed during enrollment. Services are
        delivered remotely via video conferencing, email, and other digital
        tools.
      </p>
      <p>
        Coaching is not a guarantee of athletic performance, scholarship, draft
        outcome, or any specific result. Results depend on the Player&apos;s
        effort, consistency, physical aptitude, and many factors outside our
        control.
      </p>

      <h2>3. Eligibility & Application</h2>
      <ul>
        <li>
          You must be at least 18 years old to enter into this agreement. If
          the Player is under 18, a parent or legal guardian must submit the
          application, agree to these Terms on the Player&apos;s behalf, and
          remain the contracting party throughout the engagement.
        </li>
        <li>
          Submitting an application does not guarantee enrollment. We review
          every application personally and accept Clients at our sole
          discretion. We may decline an application for any lawful reason.
        </li>
        <li>
          You agree that the information you provide in the application is
          accurate and complete.
        </li>
      </ul>

      <h2>4. Subscription Plans & Billing</h2>
      <p>
        After approval, you may enroll in one of two subscription plans:
      </p>
      <ul>
        <li>
          <strong>Monthly</strong> — $250 USD per month, billed monthly,
          automatically renews each month until cancelled.
        </li>
        <li>
          <strong>Annual</strong> — $2,000 USD per year, billed annually as a
          single payment, automatically renews each year on the anniversary
          of the original purchase date until cancelled.
        </li>
      </ul>
      <p>
        Payments are processed by our third-party payment processor (Bluevine).
        Your subscription is your authorization for the payment processor to
        charge your payment method on the recurring schedule above. We do not
        store your full payment card information.
      </p>
      <p>
        All prices are in U.S. dollars. We may change subscription pricing in
        the future, but any price change for existing Clients will not take
        effect until the next billing cycle and will be communicated at least
        30 days in advance.
      </p>

      <h2>5. Cancellation & Auto-Renewal</h2>
      <h3>5.1 Monthly subscriptions</h3>
      <p>
        You may cancel your monthly subscription at any time by emailing{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. Cancellation
        stops the next automatic renewal. You will retain access to coaching
        through the end of the current billing month — there is no prorated
        refund for the current month.
      </p>

      <h3>5.2 Annual subscriptions</h3>
      <p>
        Annual subscriptions are a 365-day commitment. You may cancel
        auto-renewal at any time by emailing us, and we&apos;ll confirm in
        writing. Cancellation prevents the next year&apos;s charge but does
        not entitle you to a refund of the current year (see Section 6 for
        refund details).
      </p>

      <h3>5.3 Cancellation by us</h3>
      <p>
        We may cancel your subscription and terminate the coaching
        relationship at any time if you violate these Terms, fail to pay, or
        engage in conduct we reasonably believe to be abusive, disrespectful,
        or unsafe. If we cancel due to our own scheduling or business
        constraints (and not for cause), we will provide a prorated refund of
        any unused portion of your subscription.
      </p>

      <h2>6. Refund Policy</h2>
      <div className="callout">
        <p className="!mb-0">
          <strong>Our standard policy is no refunds.</strong> All subscription
          payments are non-refundable. However, we reserve the right — at
          our sole and final discretion — to issue partial or full refunds
          in unusual circumstances (such as medical emergencies, family
          hardship, or situations where we agree that continuing
          isn&apos;t in the Player&apos;s best interest).
        </p>
      </div>
      <p>
        To request a refund consideration, email{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> with the Player&apos;s
        name and the circumstances. We will review every request individually
        and respond within 14 days. Our decision is final.
      </p>
      <p>
        Refunds, when granted, are issued to the original payment method and
        may take 5–10 business days to appear on your statement.
      </p>
      <p>
        We do not provide refunds for: missed sessions you did not
        reschedule, dissatisfaction with results unrelated to the coaching
        service itself, or change of mind after the first 14 days of
        enrollment.
      </p>

      <h2>7. Coach&apos;s Commitments</h2>
      <p>We agree to:</p>
      <ul>
        <li>
          Build a development plan tailored to the Player&apos;s mechanics,
          goals, and timeline
        </li>
        <li>Show up prepared and on time for every scheduled session</li>
        <li>Respond to Client communications within two (2) business days</li>
        <li>Provide honest, direct, and professional feedback</li>
        <li>Treat every Player and family with respect</li>
        <li>Maintain the confidentiality of Client information per our Privacy Policy</li>
      </ul>

      <h2>8. Client Commitments</h2>
      <p>You (and, for minor Players, the parent/guardian) agree to:</p>
      <ul>
        <li>
          Have the Player attend scheduled sessions prepared, on time, and
          with the equipment needed (when applicable)
        </li>
        <li>
          Provide accurate information about the Player&apos;s health,
          injuries, and physical limitations
        </li>
        <li>
          Notify us as soon as possible of any new injury, illness, or other
          condition that may affect training
        </li>
        <li>
          Treat the Coach with respect; abusive, threatening, or harassing
          behavior is grounds for immediate termination without refund
        </li>
        <li>Pay all subscription fees on time</li>
        <li>
          Not share, redistribute, or resell any proprietary training
          materials provided to you
        </li>
      </ul>

      <h2>9. Missed & Rescheduled Sessions</h2>
      <p>
        We require at least 24 hours&apos; notice to reschedule a session.
        Sessions cancelled with less than 24 hours&apos; notice — or no-shows
        — are not made up and are not refunded. In genuine emergencies (illness,
        injury, family events), we&apos;ll work with you to find a fair
        solution.
      </p>

      <h2>10. Intellectual Property</h2>
      <p>
        All training programs, drills, written materials, video lessons, and
        other content we create and provide to you remain our intellectual
        property. You are granted a personal, non-transferable, non-exclusive
        license to use them solely for your own development. You may not:
      </p>
      <ul>
        <li>Share, post, or distribute our materials outside your immediate household</li>
        <li>Resell, license, or repurpose them in any way</li>
        <li>Use them as the basis for your own coaching or instructional product</li>
      </ul>
      <p>
        You retain full ownership of any video footage, photos, or written
        material that you create and share with us. By sharing it, you grant
        us a limited license to view, store, and analyze it for the sole
        purpose of delivering coaching to you. We will not use your name,
        image, likeness, or footage for marketing, promotion, or any other
        purpose without your separate written permission.
      </p>

      <h2>11. Confidentiality</h2>
      <p>
        We treat what you share with us — your goals, struggles, family
        circumstances, medical information, and personal stories — as
        confidential. We will not share it with third parties except as
        required to deliver services (see our{" "}
        <a href="/privacy">Privacy Policy</a>) or as required by law.
      </p>

      <h2>12. Disclaimer of Warranties</h2>
      <p>
        Our services are provided &ldquo;as is&rdquo; and &ldquo;as
        available.&rdquo; To the fullest extent permitted by law, we
        disclaim all warranties of any kind, express or implied, including
        but not limited to: warranties of merchantability, fitness for a
        particular purpose, non-infringement, and warranties that the
        Site will be uninterrupted, error-free, or secure. We do not warrant
        or guarantee any specific athletic or developmental outcome.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, in no event shall{" "}
        {LEGAL.companyName}, its members, officers, agents, or affiliates be
        liable for any indirect, incidental, special, consequential,
        punitive, or exemplary damages — including loss of profits, loss of
        opportunity, athletic injury (see also our{" "}
        <a href="/waiver">Liability Waiver</a>), or emotional distress —
        arising out of or in connection with these Terms or your use of our
        services, whether based on contract, tort, strict liability, or any
        other theory.
      </p>
      <p>
        Our total cumulative liability to you for any and all claims arising
        out of or relating to these Terms or our services shall not exceed
        the total amount you paid us in the twelve (12) months immediately
        preceding the event giving rise to the claim.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of
        certain damages, so some of the above limitations may not apply to
        you.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless{" "}
        {LEGAL.companyName}, its members, officers, and agents from any
        claims, liabilities, damages, losses, and expenses (including
        reasonable attorneys&apos; fees) arising out of or in any way
        connected with: (a) your violation of these Terms; (b) your use or
        misuse of our services; (c) your violation of any law or third-party
        right; or (d) any content you submit to us.
      </p>

      <h2>15. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the {LEGAL.governingLaw},
        without regard to its conflict-of-laws principles. Any dispute
        arising out of or relating to these Terms or our services shall be
        resolved as follows:
      </p>
      <ol>
        <li>
          <strong>Good-faith negotiation.</strong> Before filing any formal
          claim, you agree to first contact us at{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> and attempt to
          resolve the dispute informally for at least 30 days.
        </li>
        <li>
          <strong>Mediation.</strong> If informal resolution fails, the
          parties agree to attempt mediation through a mutually agreed
          mediator in {LEGAL.state} before initiating any legal proceeding.
        </li>
        <li>
          <strong>Jurisdiction.</strong> Any legal action that cannot be
          resolved through the above steps shall be brought exclusively in
          the state or federal courts located in {LEGAL.state}, and you
          consent to the personal jurisdiction of those courts.
        </li>
      </ol>

      <h2>16. Termination</h2>
      <p>
        Either party may terminate this agreement at any time per the
        cancellation provisions in Section 5. Provisions of these Terms
        that by their nature should survive termination (Intellectual
        Property, Confidentiality, Disclaimer of Warranties, Limitation of
        Liability, Indemnification, Governing Law) will survive.
      </p>

      <h2>17. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The &ldquo;Last
        Updated&rdquo; date at the top of this page will reflect the most
        recent version. For material changes, we will email active Clients
        and post a notice on the Site at least 30 days before the change
        takes effect. Continued use of our services after the effective date
        of any update constitutes your acceptance of the revised Terms.
      </p>

      <h2>18. Miscellaneous</h2>
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms, together with our
          Privacy Policy and Liability Waiver, constitute the entire
          agreement between you and us regarding our services and supersede
          any prior agreements.
        </li>
        <li>
          <strong>Severability.</strong> If any provision of these Terms is
          found unenforceable, the remaining provisions remain in full
          force and effect.
        </li>
        <li>
          <strong>No waiver.</strong> Our failure to enforce any provision
          does not waive our right to enforce it later.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign or transfer your
          rights under these Terms. We may assign our rights to a successor
          entity (e.g., as part of a business sale or restructuring).
        </li>
      </ul>

      <h2>19. Contact</h2>
      <p>Questions about these Terms? Reach out:</p>
      <ul>
        <li>
          Email: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
        </li>
        <li>
          Mail: {LEGAL.companyName}, {fullAddress()}
        </li>
      </ul>
    </LegalPageLayout>
  );
}
