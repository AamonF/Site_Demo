import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Disclaimer",
  description: `Legal disclaimers for ${FIRM.name} website content and attorney advertising.`,
  path: "/disclaimer",
  noIndex: true,
});

export default function DisclaimerPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="Attorney advertising. Educational content is not legal advice."
        dark={false}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-6 text-slate-700 text-sm leading-relaxed">
        <LawFirmBreadcrumbs items={[{ label: "Disclaimer" }]} />
        <p>
          The information on this website is provided for general informational purposes only and does
          not constitute legal advice. Viewing this site, submitting a form, or using an intake
          assistant does not create an attorney-client relationship unless and until a written
          engagement agreement is executed by {FIRM.name} and the client.
        </p>
        <p>
          Case results, testimonials, and articles are illustrative. Past results do not guarantee
          future outcomes. Every matter depends on unique facts, evidence, and applicable law.
        </p>
        <p>
          You should not rely on website content as a substitute for personalized advice from a
          licensed attorney regarding your situation. Deadlines may apply; delay can harm your rights.
        </p>
        <p>
          To the extent this website constitutes attorney advertising under applicable rules, it is
          designated as such. Principal office: {FIRM.addressLine1}, {FIRM.addressLine2}.
        </p>
      </div>
    </main>
  );
}
