import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL, fullAddress } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dobrash Diamond Development",
  description:
    "How DoDiDe LLC collects, uses, and protects your information. We do not sell user data.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your trust matters. This policy explains exactly what information we collect, how we use it, who we share it with, and the rights you have over your data."
    >
      <div className="callout">
        <p className="!mb-0">
          <strong>The short version:</strong> We collect only what we need to
          deliver coaching to you. We <strong>do not sell</strong> your data.
          We <strong>do not</strong> share it with advertisers. We use a small
          number of trusted services (Formspree, Calendly, Bluevine, Vercel) to
          run the business — and that&apos;s it. You can ask us to delete your
          data at any time.
        </p>
      </div>

      <h2>1. Who We Are</h2>
      <p>
        This site is operated by <strong>{LEGAL.companyName}</strong>, doing
        business as <strong>{LEGAL.dba}</strong> (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We&apos;re a remote baseball
        coaching business based in {LEGAL.state}. You can reach us at{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> or by mail at{" "}
        {fullAddress()}.
      </p>
      <p>
        This Privacy Policy applies to all information collected through{" "}
        <a href={LEGAL.website}>{LEGAL.website}</a> and through our coaching
        services.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information you give us directly</h3>
      <p>When you submit the application form, we collect:</p>
      <ul>
        <li>Player&apos;s full name and age</li>
        <li>Position(s) played</li>
        <li>Your goals and development focus</li>
        <li>How you heard about us</li>
        <li>
          For players under 18: parent or guardian&apos;s name, email, and
          phone number
        </li>
      </ul>
      <p>
        During the coaching relationship, you may share additional information
        with us — including video footage of your mechanics, written
        correspondence, scheduling preferences, and progress notes.
      </p>

      <h3>2.2 Information collected automatically</h3>
      <p>
        Our hosting provider (Vercel) logs basic technical information when you
        visit the site — IP address, browser type, pages viewed, and
        timestamps. This is standard server-log data used to operate the site
        and is not used to identify you personally or build a profile of you.
      </p>

      <h3>2.3 Information we do NOT collect</h3>
      <p>
        We do not use advertising trackers, social media pixels, or behavioral
        analytics. We do not collect payment card information ourselves — all
        payment processing is handled by our payment processor (see Section 4).
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Review your application and decide whether we&apos;re a good fit</li>
        <li>Schedule and conduct intro calls and coaching sessions</li>
        <li>Deliver personalized programming and feedback</li>
        <li>Communicate with you (or, if you&apos;re a minor, your parent or guardian) about your training</li>
        <li>Process subscription payments through our payment processor</li>
        <li>Comply with legal obligations (tax records, etc.)</li>
      </ul>
      <p>
        We will never use your information for any purpose unrelated to
        delivering our coaching services without your explicit consent.
      </p>

      <h2>4. Third-Party Services We Use</h2>
      <p>
        To run a small remote coaching business, we rely on a few outside
        services. Each one has access only to the specific information they
        need to perform their function, and each is bound by their own privacy
        terms.
      </p>
      <ul>
        <li>
          <strong>Formspree</strong> — receives your application form
          submission and emails it to us. (
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          )
        </li>
        <li>
          <strong>Calendly</strong> — handles scheduling for intro calls and
          coaching sessions. Collects your name, email, and any answers to
          booking questions. (
          <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          )
        </li>
        <li>
          <strong>Bluevine</strong> — processes subscription payments. Your
          credit card information is collected and stored by Bluevine, not by
          us. We only see basic confirmation that you&apos;ve paid. (
          <a href="https://www.bluevine.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          )
        </li>
        <li>
          <strong>Vercel</strong> — hosts this website and handles SSL/HTTPS
          encryption. (
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          )
        </li>
        <li>
          <strong>Google (Gmail / Google Meet)</strong> — we use Gmail for
          email correspondence and Google Meet for video calls. (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          )
        </li>
      </ul>

      <h2>5. We Do Not Sell Your Data</h2>
      <div className="callout">
        <p className="!mb-0">
          <strong>We have never sold user data and we never will.</strong> We
          do not share your information with advertisers, data brokers, or
          marketing companies. We do not run ads on this site. The only
          parties who receive your information are the service providers
          listed in Section 4, who use it only to perform their narrow
          function on our behalf.
        </p>
      </div>
      <p>
        We may disclose your information if legally required to do so (for
        example, in response to a valid court order or subpoena), but we will
        notify you if we&apos;re able to do so without violating the law.
      </p>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        We coach players of all ages, including minors. Because of this, we
        take additional care with information related to anyone under 18.
      </p>
      <ul>
        <li>
          <strong>Players under 18 cannot submit the application
          themselves.</strong> The form must be submitted by a parent or legal
          guardian on behalf of the player. The parent/guardian becomes our
          contracting party and primary point of contact.
        </li>
        <li>
          For any player under 13, we comply with the Children&apos;s Online
          Privacy Protection Act (COPPA). We collect only the minimum
          information necessary to deliver coaching, and only with verifiable
          parental consent (the application submission and Liability Waiver
          serve as that consent).
        </li>
        <li>
          A parent or guardian may, at any time, review what information we
          have on file about their child, request corrections, or request
          deletion, by emailing{" "}
          <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
        </li>
        <li>
          We will never use a minor&apos;s photo, video, name, or likeness for
          marketing purposes without separate written permission from the
          parent/guardian.
        </li>
      </ul>

      <h2>7. How We Protect Your Information</h2>
      <ul>
        <li>
          All data transmitted between your browser and our site is encrypted
          using TLS/SSL (HTTPS).
        </li>
        <li>
          We do not store payment card numbers — that information lives only
          with Bluevine, which is PCI-DSS compliant.
        </li>
        <li>
          Application submissions are received through Formspree (encrypted in
          transit and at rest) and viewed only through the operator&apos;s
          password-protected email.
        </li>
        <li>
          Access to client records is restricted to the coach. We do not have
          a staff or third-party contractor who can browse your information.
        </li>
      </ul>
      <p>
        No system is perfectly secure, but we take reasonable, industry-standard
        steps to protect your information. If we ever experience a data
        breach affecting your personal information, we will notify you
        promptly as required by law.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain application data and client records for as long as you are
        an active client, plus seven (7) years afterward — primarily to comply
        with tax and business-records laws. After that period, we delete or
        anonymize the data. You can request earlier deletion at any time (see
        Section 9), subject to any records we&apos;re legally required to
        keep.
      </p>

      <h2>9. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Access</strong> — request a copy of the information we have
          about you.
        </li>
        <li>
          <strong>Correct</strong> — ask us to fix anything that&apos;s
          inaccurate.
        </li>
        <li>
          <strong>Delete</strong> — ask us to delete your information
          (subject to records we must retain for legal reasons, such as tax
          documents).
        </li>
        <li>
          <strong>Opt out</strong> — unsubscribe from any non-essential
          communications at any time.
        </li>
        <li>
          <strong>Complain</strong> — file a complaint with the Colorado
          Attorney General or your state&apos;s privacy regulator if you
          believe we&apos;ve mishandled your information.
        </li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. We&apos;ll
        respond within 30 days.
      </p>
      <p>
        If you&apos;re a California resident, the California Consumer Privacy
        Act (CCPA) gives you additional rights, including the right to know
        what categories of information we collect, the right to opt out of any
        sale of your data (we don&apos;t sell data, but you have the right
        regardless), and the right to non-discrimination for exercising your
        rights. To exercise these rights, contact us at the email above.
      </p>

      <h2>10. Cookies</h2>
      <p>
        This site uses only essential cookies needed for basic functionality
        (such as session handling for embedded Calendly bookings). We do not
        use tracking cookies, advertising cookies, or cross-site analytics
        cookies. Embedded third-party widgets (Calendly) may set their own
        cookies — see their privacy policies linked in Section 4 for details.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time — for example, if
        we add or change a service provider, or if the law changes. The
        &ldquo;Last Updated&rdquo; date at the top of this page will always
        reflect the most recent version. For material changes (anything that
        meaningfully expands how we collect or use your data), we will email
        active clients and post a notice on the site at least 14 days before
        the change takes effect.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how your information
        is handled, please reach out:
      </p>
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
