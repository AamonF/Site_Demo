import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

export const metadata: Metadata = lawMetadata({
  title: "Terms of Use",
  description: `Terms of use for the ${FIRM.name} website (demo placeholder).`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Rules governing use of this website (demo placeholder)."
        dark={false}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-6 text-slate-700 text-sm leading-relaxed">
        <LawFirmBreadcrumbs items={[{ label: "Terms of Use" }]} />
        <p>
          By accessing this website, you agree to these Terms of Use. If you do not agree, do not use
          the site. {FIRM.name} may update these terms; continued use constitutes acceptance of
          changes.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">No legal advice</h2>
        <p>
          Content is informational only. Use of the site does not create an attorney-client
          relationship. Confidential information should not be sent until conflicts are cleared and
          representation is confirmed in writing.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">Intellectual property</h2>
        <p>
          Text, design, and marks displayed on this site are owned by the firm or used under license.
          You may not copy, scrape, or redistribute site content for commercial purposes without
          permission.
        </p>
        <h2 className="text-lg font-semibold text-law-navy-950 pt-4">Limitation of liability</h2>
        <p>
          The site is provided “as is.” To the fullest extent permitted by law, {FIRM.name} disclaims
          liability arising from your use of the site or reliance on its content.
        </p>
      </div>
    </main>
  );
}
