import type { Metadata } from "next";
import Link from "next/link";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

const served = [
  { name: "Charlotte", note: "Primary office · Mecklenburg County courts" },
  { name: "Matthews & Mint Hill", note: "Injury, family, and municipal matters" },
  { name: "Huntersville & Cornelius", note: "North county filings and hearings" },
  { name: "Gastonia & Belmont", note: "Select injury and criminal matters" },
  { name: "Rock Hill, SC", note: "Cross-border injury cases (jurisdiction permitting)" },
];

export const metadata: Metadata = lawMetadata({
  title: "Locations Served",
  description: `${FIRM.name} represents clients across ${FIRM.county} and the greater Charlotte region. Main office: ${FIRM.addressLine2}.`,
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Local"
        title="Local courts. Regional reach."
        subtitle="We routinely handle matters in Mecklenburg County and appear in surrounding jurisdictions when cases require."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "Locations" }]} />
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 aspect-[21/9] flex items-center justify-center text-slate-500 text-sm text-center px-6">
          Service area map placeholder — highlight Charlotte metro + primary corridors (I-77, I-85, US-74).
        </div>
        <ul className="mt-12 space-y-6">
          {served.map((s) => (
            <li
              key={s.name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-6 last:border-0"
            >
              <span className="text-lg font-semibold text-law-navy-950">{s.name}</span>
              <span className="text-slate-600 text-sm max-w-md text-right sm:text-left">{s.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-slate-600 leading-relaxed">
          Not sure whether we can help in your jurisdiction? Call intake—we will evaluate venue,
          conflicts, and strategy before you spend time on the wrong firm.
        </p>
        <div className="mt-10">
          <Link
            href={`${LAW_FIRM_BASE}/contact`}
            className="inline-flex rounded-lg bg-law-navy-900 text-white px-8 py-3.5 text-sm font-semibold hover:bg-law-navy-800"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
