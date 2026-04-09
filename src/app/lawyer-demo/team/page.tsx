import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { TEAM, getPracticeAreas } from "@/lib/law-firm/content";
import { attorneyJsonLd } from "@/lib/law-firm/jsonld";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Attorneys & Team",
  description: `Meet the ${FIRM.name} team—Charlotte attorneys across injury, criminal defense, family law, and immigration.`,
  path: "/team",
});

export default function TeamPage() {
  const areas = getPracticeAreas();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: TEAM.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: attorneyJsonLd(m),
            })),
          }),
        }}
      />
      <LawFirmPageHero
        eyebrow="Team"
        title="Attorneys who own the strategy—and the communication"
        subtitle="Credentials matter. So does judgment. Meet the professionals responsible for your case."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "Team" }]} />
        <div className="space-y-20">
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="grid md:grid-cols-12 gap-10 items-start border-b border-slate-200 pb-20 last:border-0 last:pb-0"
            >
              <div className="md:col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image src={m.image} alt={m.imageAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 320px" />
              </div>
              <div className="md:col-span-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-law-navy-950">{m.name}</h2>
                <p className="text-law-gold-dark font-medium mt-1">{m.role}</p>
                {m.credentials && m.credentials.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.credentials.map((c) => (
                      <li
                        key={c.slice(0, 48)}
                        className="text-[11px] sm:text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-6 text-slate-600 leading-relaxed text-[17px] font-light">{m.bio}</p>
                <p className="mt-4 text-slate-700 leading-relaxed border-l-2 border-law-gold pl-4">
                  <strong className="text-law-navy-950">Approach:</strong> {m.approach}
                </p>
                <p className="mt-4 text-sm text-slate-500">{m.bar}</p>
                <p className="mt-1 text-sm text-slate-500">{m.education}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-law-navy-950">Practice support</h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Paralegals and intake specialists support document preparation and scheduling. Legal
            strategy remains attorney-led across{" "}
            {areas.slice(0, 4).map((a) => a.name).join(", ")}
            , and additional matters.
          </p>
          <Link
            href={`${LAW_FIRM_BASE}/practice-areas`}
            className="inline-flex mt-6 text-sm font-semibold text-law-navy-900 hover:underline"
          >
            View practice areas →
          </Link>
        </section>
      </div>
    </main>
  );
}
