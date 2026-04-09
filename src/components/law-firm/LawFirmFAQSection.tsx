import Link from "next/link";

import { FAQ_HOME_PREVIEW } from "@/lib/law-firm/content";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

import { LawFirmFAQAccordion } from "./LawFirmFAQAccordion";

export function LawFirmFAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-law-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 text-center">
          FAQ
        </p>
        <h2 id="faq-heading" className="text-3xl sm:text-4xl font-semibold text-law-navy-950 text-center tracking-tight">
          Answers clients ask first
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Straightforward guidance—your specific situation still deserves individualized counsel.
        </p>
        <div className="mt-10">
          <LawFirmFAQAccordion items={FAQ_HOME_PREVIEW} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={`${LAW_FIRM_BASE}/faq`}
            className="inline-flex text-sm font-semibold text-law-navy-900 hover:text-law-gold-dark underline-offset-4 hover:underline"
          >
            View all frequently asked questions
          </Link>
        </div>
      </div>
    </section>
  );
}
