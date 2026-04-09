import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Privacy Policy",
  description: `Privacy practices for ${FIRM.name} website visitors and intake submissions.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle information you submit through this website (demo placeholder—replace with firm-specific policy)."
        dark={false}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-6 text-slate-700 text-sm leading-relaxed">
        <LawFirmBreadcrumbs items={[{ label: "Privacy Policy" }]} />
        <p>
          This Privacy Policy describes how {FIRM.name} (“we,” “us”) collects, uses, and shares
          information when you use this website or submit forms for consultation requests. This is a
          demonstration template and should be reviewed by licensed counsel before publication.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">Information we collect</h2>
        <p>
          We may collect contact information (name, phone, email), matter type, and messages you
          voluntarily submit. We may also collect technical data such as IP address, browser type,
          and pages visited through analytics tools configured by the firm.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">How we use information</h2>
        <p>
          We use submissions to respond to inquiries, schedule consultations, and evaluate conflicts.
          We do not sell personal information. Service providers assisting with hosting, email, or
          intake systems may process data under contractual safeguards.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">Retention</h2>
        <p>
          Retention periods depend on whether an attorney-client relationship is formed and applicable
          ethical rules. Non-client inquiries may be deleted on a rolling basis unless preservation is
          required.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">Contact</h2>
        <p>
          Questions about privacy practices may be directed to {FIRM.email}. For GDPR or state privacy
          rights requests, include sufficient detail for verification.
        </p>
      </div>
    </main>
  );
}
