import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { IMAGES, TEAM } from "@/lib/law-firm/content";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "About Our Firm",
  description: `Learn about ${FIRM.name}—Charlotte attorneys focused on trial readiness, integrity, and client communication. Call ${FIRM.phoneDisplay}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="About"
        title="A Charlotte firm built on preparation and respect"
        subtitle={`Founded in ${FIRM.founded}, we represent individuals and businesses across ${FIRM.county} with a simple standard: tell clients the truth early—and advocate fiercely when it counts.`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "About" }]} />
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 mb-12">
          <Image
            src={IMAGES.office}
            alt="Law office reception and workspace in Charlotte"
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Our firm exists for clients facing high-stakes problems: injury,
            investigation, family instability, immigration uncertainty, and business disputes that
            threaten operations. We are not a volume practice. We take fewer matters so we can do the
            work correctly—interviews, records, experts, and courtroom presentation when necessary.
          </p>
          <p>
            Our attorneys combine large-firm discipline with direct access. You will know who owns
            your strategy, and you will receive plain-language updates that help you decide—not
            confuse you into paralysis.
          </p>
          <h2 className="text-2xl font-semibold text-law-navy-950 mt-12">Community & courts</h2>
          <p>
            We appear regularly in Mecklenburg County courts and work with agencies and professionals
            across the Charlotte region. That local fluency matters: procedures differ by
            courthouse, and credibility is earned through consistency over time.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <Link
              key={m.id}
              href={`${LAW_FIRM_BASE}/team`}
              className="rounded-xl border border-slate-200 p-5 hover:border-law-gold/40 hover:shadow-md transition-all"
            >
              <p className="font-semibold text-law-navy-950">{m.name}</p>
              <p className="text-sm text-slate-500 mt-1">{m.role}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`${LAW_FIRM_BASE}/contact`}
            className="inline-flex rounded-lg bg-law-navy-900 text-white px-8 py-3.5 text-sm font-semibold hover:bg-law-navy-800"
          >
            Contact the firm
          </Link>
        </div>
      </div>
    </main>
  );
}
