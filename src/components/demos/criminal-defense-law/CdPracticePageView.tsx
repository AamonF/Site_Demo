import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import type { CriminalPracticeContent } from "./practice-data";
import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { CdConsultationForm } from "./CdConsultationForm";
import { CdFaqAccordion } from "./CdFaqAccordion";
import { cdImages } from "./images";
import { CD_BRAND, CD_DEMO_BASE } from "./site-config";
import { CdFooter } from "./CdFooter";
import { CdStripCta } from "./CdStripCta";

export function CdPracticePageView({ content }: { content: CriminalPracticeContent }) {
  const heroImg = cdImages[content.imageKey];
  const otherPractices = PRACTICE_LINKS.filter((p) => p.slug !== content.slug);

  return (
    <>
      <article>
        <section className="relative border-b border-white/10">
          <div className="relative h-[min(52vh,440px)] w-full">
            <Image
              src={heroImg.src}
              alt={heroImg.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03060c] via-[#03060c]/88 to-[#03060c]/35" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-xs text-zinc-600">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link className="hover:text-law-gold" href={CD_DEMO_BASE}>
                    {CD_BRAND.shortName}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-zinc-400">{content.label}</li>
              </ol>
            </nav>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${CD_BRAND.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-law-navy-950"
              >
                <Phone className="size-4" aria-hidden />
                Call {CD_BRAND.phone}
              </a>
              <Link
                href={`${CD_DEMO_BASE}#consult`}
                data-cd-open-consult
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white"
              >
                Free consultation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <CdStripCta
          title="Silence is a strategy. Confusion is not."
          subtitle="Before you make statements that can’t be unsaid, get a defense plan aligned with your facts and deadlines."
        />

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">Understanding the charges</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {content.chargesExplained.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-display text-xl font-semibold text-law-gold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">Potential consequences</h2>
            <p className="mt-3 max-w-3xl text-sm text-zinc-500">
              Consequences vary by jurisdiction and facts—these are common categories clients worry about most.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {content.consequences.map((row) => (
                <div key={row.label} className="rounded-2xl border border-law-gold/20 bg-law-gold/5 p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{row.label}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">Why legal defense is critical—now</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{content.whyDefense}</p>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">How we help</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {content.howWeHelp.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-[#070c16] p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{h.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CdStripCta
          title="Need answers before your next court date?"
          subtitle={`Call ${CD_BRAND.phone} now—or send confidential intake details below.`}
        />

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">{content.shortLabel} FAQs</h2>
            <div className="mt-8">
              <CdFaqAccordion items={content.faqs} idPrefix={`practice-faq-${content.slug}`} />
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white">Related defense guides</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherPractices.map((p) => (
                <Link
                  key={p.slug}
                  href={practicePath(p.slug)}
                  className="rounded-2xl border border-white/10 bg-[#070c16] p-5 text-sm text-zinc-400 transition hover:border-law-gold/35 hover:text-white"
                >
                  <span className="font-display text-lg font-semibold text-white">{p.label}</span>
                  <span className="mt-2 block text-zinc-600">{p.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="consult" className="scroll-mt-28 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <CdConsultationForm
              idPrefix={`practice-${content.slug}`}
              defaultChargeType={content.label}
              heading={`Speak with a defense attorney about ${content.shortLabel}`}
              subheading="We respond quickly—especially when court dates are approaching."
              className="border border-law-gold/25 bg-[#070c16]"
            />
            <p className="mt-6 text-center text-sm text-zinc-600">
              Prefer phone?{" "}
              <a className="font-semibold text-law-gold" href={`tel:${CD_BRAND.phoneTel}`}>
                {CD_BRAND.phone}
              </a>
            </p>
          </div>
        </section>
      </article>

      <CdFooter />
    </>
  );
}
