import Link from "next/link";
import { MapPin, TrendingUp } from "lucide-react";

import type { CaseResult } from "@/lib/law-firm/types";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

type Props = {
  results: CaseResult[];
  heading?: string;
  intro?: string;
};

export function LawFirmPracticeResults({ results, heading, intro }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-law-navy-950">
        {heading ?? "Representative outcomes"}
      </h2>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-3xl">
        {intro ??
          "Illustrative summaries for advertising purposes only. Prior results do not guarantee similar outcomes; every matter depends on facts and law."}
      </p>
      <div className="mt-8 grid md:grid-cols-1 gap-6">
        {results.map((c) => (
          <article
            key={c.id}
            className="rounded-[1.15rem] border border-slate-200/90 bg-slate-50/80 p-6 md:p-7 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-law-navy-800 bg-law-gold/12 border border-law-gold/25 px-2.5 py-1 rounded-md">
                {c.type}
              </span>
              <TrendingUp className="w-5 h-5 text-slate-300 shrink-0" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-law-navy-950 leading-snug">{c.headline}</h3>
            {c.venue && (
              <p className="mt-2 flex items-start gap-2 text-[12px] text-slate-500 leading-snug">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-law-gold/80" aria-hidden />
                <span>{c.venue}</span>
              </p>
            )}
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.summary}</p>
            <p className="mt-4 text-sm font-medium text-law-navy-900 border-t border-slate-200 pt-4 leading-relaxed">
              {c.outcome}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[11px] text-slate-500 leading-relaxed rounded-lg border border-slate-200 bg-white p-4">
        <strong className="text-law-navy-900">Disclaimer:</strong> These examples are demo composites
        for a law firm website template. They do not depict actual cases.{" "}
        <Link href={`${LAW_FIRM_BASE}/disclaimer`} className="underline font-medium text-law-navy-800">
          Read disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
