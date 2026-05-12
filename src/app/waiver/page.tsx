import LegalPageLayout from "@/components/LegalPageLayout";
import { LEGAL, fullAddress } from "@/lib/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liability Waiver | Dobrash Diamond Development",
  description:
    "Assumption of risk and release of liability for participation in DoDiDe LLC coaching services.",
};

export default function WaiverPage() {
  return (
    <LegalPageLayout
      title="Liability Waiver & Assumption of Risk"
      subtitle="Baseball training involves physical activity and carries inherent risks. By participating, you acknowledge those risks and agree to the terms below. Please read carefully."
    >
      <div className="callout">
        <p className="!mb-0">
          <strong>Plain English:</strong> Baseball is a physical sport.
          Throwing, hitting, fielding, running, and lifting can cause injury
          — sometimes serious. By training with us, you&apos;re saying you
          understand that, you accept the risk, and you won&apos;t hold us
          legally responsible for injuries that happen while training, except
          where the law doesn&apos;t allow us to limit liability.
        </p>
      </div>

      <h2>1. Parties</h2>
      <p>
        This Liability Waiver and Release (&ldquo;Waiver&rdquo;) is entered
        into between <strong>{LEGAL.companyName}</strong>, doing business as{" "}
        <strong>{LEGAL.dba}</strong> (the &ldquo;Coach&rdquo;), and the
        Player participating in coaching services (or, if the Player is
        under 18, the Player&apos;s parent or legal guardian signing on the
        Player&apos;s behalf).
      </p>

      <h2>2. Acknowledgment of Risk</h2>
      <p>
        I understand that participation in baseball training — whether
        in-person or via remote video instruction — involves physical
        activity that carries inherent and substantial risks of injury,
        including but not limited to:
      </p>
      <ul>
        <li>
          Strains, sprains, tears, and other muscle, tendon, or ligament
          injuries
        </li>
        <li>
          Fractures, dislocations, and bone injuries — including from
          throwing, swinging, sliding, or falling
        </li>
        <li>
          Overuse injuries to the shoulder, elbow, wrist, hip, knee, or back
        </li>
        <li>
          Concussions and head injuries from contact with balls, bats,
          equipment, or surfaces
        </li>
        <li>
          Dental, facial, eye, and other soft-tissue injuries
        </li>
        <li>Heat illness, dehydration, or hypothermia</li>
        <li>
          Cardiac events, including in individuals with no prior known
          condition
        </li>
        <li>
          Catastrophic injury, including permanent disability and, in rare
          cases, death
        </li>
        <li>
          Aggravation of pre-existing conditions or undiagnosed conditions
        </li>
      </ul>
      <p>
        I understand these risks exist <strong>regardless</strong> of the
        skill of the Coach, the level of supervision, or the precautions
        taken. Some risks arise from the Player&apos;s own action or
        inaction, from other participants, from equipment, or from
        environmental conditions (field, weather, lighting, surfaces, etc.).
      </p>

      <h2>3. Assumption of Risk</h2>
      <p>
        Having read and understood the risks described above,{" "}
        <strong>I knowingly and voluntarily assume all such risks</strong> —
        both those described here and any other risks that may exist,
        whether or not foreseeable, that may arise from participation in
        coaching services. I am participating of my own free will and have
        had the opportunity to ask questions about the activity.
      </p>

      <h2>4. Fitness to Participate</h2>
      <p>By signing this Waiver, I represent and warrant that:</p>
      <ul>
        <li>
          The Player is in good physical condition and has no medical
          condition that would make participation unsafe;
        </li>
        <li>
          I have consulted, or had the opportunity to consult, a physician
          about the Player&apos;s ability to participate;
        </li>
        <li>
          I will disclose to the Coach any injury, illness, medication,
          allergy, or condition that may affect the Player&apos;s ability to
          participate safely, both at the start of coaching and as new
          conditions arise;
        </li>
        <li>
          I will not push the Player past safe limits and will instruct the
          Player to stop and notify the Coach immediately if pain, dizziness,
          shortness of breath, or other warning signs occur.
        </li>
      </ul>

      <h2>5. Release of Liability</h2>
      <p>
        To the fullest extent permitted by law, I, on behalf of myself, the
        Player, our heirs, executors, administrators, family members, and
        assigns, hereby{" "}
        <strong>
          release, waive, discharge, and covenant not to sue
        </strong>{" "}
        {LEGAL.companyName}, its members, officers, agents, contractors,
        and affiliates (collectively, &ldquo;Released Parties&rdquo;) from
        any and all liability, claims, demands, actions, and causes of
        action whatsoever — whether known or unknown, arising in contract,
        tort (including ordinary negligence), or otherwise — arising out of
        or related to any loss, injury, illness, death, damage, or expense
        the Player or I may suffer as a result of participation in coaching
        services or use of the Site.
      </p>
      <p>
        This release does <strong>not</strong> apply to claims arising from
        the Released Parties&apos; gross negligence, recklessness, or
        intentional misconduct, or to any liability that cannot be released
        as a matter of Colorado law.
      </p>

      <h2>6. Indemnification</h2>
      <p>
        I agree to indemnify, defend, and hold harmless the Released Parties
        from any loss, liability, damage, or cost (including reasonable
        attorneys&apos; fees) they may incur arising out of: (a) the
        Player&apos;s participation in coaching services; (b) any breach of
        this Waiver; (c) any misrepresentation regarding the Player&apos;s
        fitness or medical condition; or (d) any claim brought by a third
        party (including a family member) related to the Player&apos;s
        participation.
      </p>

      <h2>7. Medical Treatment Authorization</h2>
      <p>
        If the Player is injured during participation, I authorize the Coach
        — if I cannot be reached promptly — to seek and arrange for
        emergency medical treatment as the Coach reasonably believes
        necessary, at my expense. I will provide the Coach with current
        emergency-contact information upon enrollment and update it as it
        changes.
      </p>

      <h2>8. Parental / Guardian Consent (Minors)</h2>
      <p>If the Player is under the age of 18:</p>
      <ul>
        <li>
          I am the parent or legal guardian of the Player and have the
          authority to sign this Waiver on the Player&apos;s behalf;
        </li>
        <li>
          I have explained the nature of the activity and its risks to the
          Player in age-appropriate terms;
        </li>
        <li>
          I consent to the Player&apos;s participation and agree that this
          Waiver binds both me and the Player to the fullest extent
          permitted by Colorado law;
        </li>
        <li>
          I understand that Colorado law (C.R.S. § 13-22-107) permits
          parents to release their child&apos;s prospective negligence
          claims, and I knowingly and voluntarily exercise that right;
        </li>
        <li>
          I remain responsible for any conduct of the Player during
          participation.
        </li>
      </ul>

      <h2>9. Name, Image, and Likeness</h2>
      <p>
        The Coach will <strong>not</strong> use the Player&apos;s name,
        photo, video, voice, or likeness for marketing, promotion, social
        media, website content, or any other purpose without separate,
        explicit, written permission from the Player (or the
        parent/guardian, if the Player is under 18). Any such permission
        will be in a clearly identified release form, will describe how the
        media will be used, and may be revoked at any time by written
        notice for future uses.
      </p>

      <h2>10. Remote Training Considerations</h2>
      <p>
        Because most coaching is delivered remotely via video, the Coach is
        not physically present during training sessions and{" "}
        <strong>cannot directly supervise or intervene</strong> during
        physical activity. The Player and parent/guardian acknowledge and
        agree that:
      </p>
      <ul>
        <li>
          The Player is responsible for warming up properly, using
          appropriate equipment, training in a safe environment, and
          stopping if pain or injury occurs;
        </li>
        <li>
          The parent/guardian is responsible for the Player&apos;s
          supervision during any physical activity at the Player&apos;s
          location;
        </li>
        <li>
          The Coach&apos;s instructions are general recommendations based on
          observed video and described conditions, and may not account for
          local conditions the Coach cannot see;
        </li>
        <li>
          The Player should immediately stop any drill or exercise that
          causes pain, discomfort, or feels unsafe, and notify the Coach.
        </li>
      </ul>

      <h2>11. Severability</h2>
      <p>
        If any portion of this Waiver is found by a court of competent
        jurisdiction to be unenforceable, the remaining portions shall
        continue in full force and effect. The unenforceable portion shall
        be reformed to the minimum extent necessary to make it enforceable.
      </p>

      <h2>12. Governing Law & Venue</h2>
      <p>
        This Waiver is governed by the laws of the {LEGAL.governingLaw},
        without regard to its conflict-of-laws principles. Any dispute
        arising out of or relating to this Waiver shall be subject to the
        dispute-resolution procedures and venue described in Section 15 of
        our <a href="/terms">Terms of Service</a>.
      </p>

      <h2>13. Acknowledgment</h2>
      <p>
        I have read this Waiver and Release in its entirety. I understand
        that by submitting an application or making payment for coaching
        services and confirming the consent checkbox on the application
        form, I am{" "}
        <strong>
          electronically signing this Waiver and agreeing to its terms on
          behalf of myself and (if applicable) the minor Player I represent.
        </strong>{" "}
        I am giving up substantial legal rights, including the right to
        sue for negligence, and I am doing so freely and voluntarily.
      </p>

      <h2>14. Contact</h2>
      <p>Questions about this Waiver? Reach out:</p>
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
