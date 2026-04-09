import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Thank You",
  description: `Your consultation request was received. ${FIRM.name} will respond shortly.`,
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <CheckCircle2 className="w-16 h-16 text-law-gold mx-auto mb-6" aria-hidden />
        <h1 className="text-3xl font-semibold text-law-navy-950">We received your request</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Intake will review your submission and respond as soon as possible—often same business day
          for urgent criminal and injury matters.
        </p>
        <p className="mt-6 text-sm text-slate-500">
          If you need immediate help, call{" "}
          <a href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`} className="font-semibold text-law-navy-900">
            {FIRM.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-law-navy-900 text-white px-6 py-3 text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call now
          </a>
          <Link
            href={LAW_FIRM_BASE}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-law-navy-900"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
