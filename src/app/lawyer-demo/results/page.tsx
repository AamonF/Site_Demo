import type { Metadata } from "next";
import Link from "next/link";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { LawFirmResultsSection } from "@/components/law-firm/LawFirmResultsSection";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Case Results & Highlights",
  description: `Representative outcomes from ${FIRM.name}. Past results do not guarantee future results. ${FIRM.phoneDisplay}.`,
  path: "/results",
});

export default function ResultsPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Results"
        title="Representative outcomes—not promises"
        subtitle="These summaries illustrate the range of matters we handle. Every case is fact-specific, and outcomes cannot be guaranteed."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <LawFirmBreadcrumbs items={[{ label: "Results" }]} />
      </div>
      <LawFirmResultsSection sectionId="case-highlights" />
      <div className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <Link
          href={`${LAW_FIRM_BASE}/free-consultation`}
          className="inline-flex rounded-lg bg-law-navy-900 text-white px-8 py-3.5 text-sm font-semibold hover:bg-law-navy-800"
        >
          Discuss your matter
        </Link>
      </div>
    </main>
  );
}
