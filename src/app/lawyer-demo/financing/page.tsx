import type { Metadata } from "next";
import Link from "next/link";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Fees & Payment Options",
  description: `Transparent fee structures at ${FIRM.name}: contingency injury representation, flat-fee and hourly options, and payment flexibility where available.`,
  path: "/financing",
});

export default function FinancingPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Fees"
        title="Clear fee expectations—before you commit"
        subtitle="Legal fees should never be a mystery. We explain structure, scope, and billing in writing."
        dark={false}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-8 text-slate-700 leading-relaxed">
        <LawFirmBreadcrumbs items={[{ label: "Financing & fees" }]} />
        <section>
          <h2 className="text-xl font-semibold text-law-navy-950">Personal injury</h2>
          <p className="mt-3">
            Many injury matters are handled on a contingency fee basis—you pay no attorney fee
            unless we recover compensation, subject to a written agreement that complies with North
            Carolina rules. Case expenses may still apply and will be explained up front.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-law-navy-950">Criminal defense & DUI</h2>
          <p className="mt-3">
            These cases are typically structured as flat-fee engagements for defined stages or hourly
            billing with retainers, depending on complexity. You will receive a scope letter describing
            what is included.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-law-navy-950">Family law</h2>
          <p className="mt-3">
            Custody and divorce matters often require retainers and hourly billing because timelines are
            unpredictable. We provide cost ranges where possible and recommend budgeting for mediation
            and expert witnesses when relevant.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-law-navy-950">Payment methods</h2>
          <p className="mt-3">
            We accept major credit cards, ACH, and checks for retainers and invoiced fees where
            permitted. Third-party litigation funding is not endorsed as a default strategy—ask during
            consultation if you are considering financing options for living expenses during a case.
          </p>
        </section>
        <Link
          href={`${LAW_FIRM_BASE}/contact`}
          className="inline-flex rounded-lg bg-law-gold text-law-navy-950 px-8 py-3.5 text-sm font-semibold hover:bg-[#d4b23a]"
        >
          Discuss fees for your matter — {FIRM.phoneDisplay}
        </Link>
      </div>
    </main>
  );
}
