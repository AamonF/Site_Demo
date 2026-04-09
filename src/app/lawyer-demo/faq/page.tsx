import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmFAQAccordion } from "@/components/law-firm/LawFirmFAQAccordion";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FAQ_PAGE } from "@/lib/law-firm/content";
import { faqPageJsonLd } from "@/lib/law-firm/jsonld";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Frequently Asked Questions",
  description: `Answers about fees, consultations, timelines, and attorney access at ${FIRM.name}. Call ${FIRM.phoneDisplay}.`,
  path: "/faq",
});

export default function FAQPage() {
  const items = FAQ_PAGE.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(items)) }}
      />
      <LawFirmPageHero
        eyebrow="FAQ"
        title="Straight answers—without the jargon fog"
        subtitle="If you do not see your question, contact us. Complex issues deserve individualized guidance."
        dark={false}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "FAQ" }]} />
        <LawFirmFAQAccordion items={items} />
      </div>
    </main>
  );
}
