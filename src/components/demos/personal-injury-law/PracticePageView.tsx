import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import type { PracticePageContent } from "./practice-data";
import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { ConsultationForm } from "./ConsultationForm";
import { FaqAccordion } from "./FaqAccordion";
import { piImages } from "./images";
import { PI_BRAND, PI_DEMO_BASE } from "./site-config";
import { PiFooter } from "./PiFooter";
import { StripCta } from "./StripCta";

export function PracticePageView({ content }: { content: PracticePageContent }) {
  const heroImg = piImages[content.imageKey];
  const otherPractices = PRACTICE_LINKS.filter((p) => p.slug !== content.slug);

  return (
    <>
      <section className="relative border-b border-white/10">
        <div className="relative h-[min(52vh,420px)] w-full">
          <Image
            src={heroImg.src}
            alt={heroImg.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-law-navy-950/80 to-law-navy-950/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-xs text-zinc-500">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link className="hover:text-law-gold" href={PI_DEMO_BASE}>
                  {PI_BRAND.shortName}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-zinc-300">{content.label}</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-300">{content.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${PI_BRAND.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-law-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              <Phone className="size-4" aria-hidden />
              Call {PI_BRAND.phone}
            </a>
            <Link
              href={`${PI_DEMO_BASE}#consult`}
              data-pi-open-consult
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Free case review
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <StripCta
        title="Don’t give a recorded statement until you understand your rights."
        subtitle="We handle insurer communications—so you don’t accidentally hurt your claim."
      />

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Common causes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {content.causes.map((c) => (
              <article key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display text-xl font-semibold text-law-gold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Common injuries</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.injuries.map((inj) => (
              <li
                key={inj}
                className="rounded-xl border border-white/10 bg-[#0a1628] px-4 py-3 text-sm text-zinc-300"
              >
                {inj}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Compensation you may pursue</h2>
          <p className="mt-3 max-w-3xl text-zinc-400">
            Damages depend on proof, coverage, and jurisdiction—these categories are common starting points.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {content.compensation.map((row) => (
              <div key={row.label} className="rounded-2xl border border-law-gold/20 bg-law-gold/5 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{row.label}</h3>
                <p className="mt-2 text-sm text-zinc-400">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Why legal help matters</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{content.whyLegal}</p>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">How we help</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {content.howWeHelp.map((h) => (
              <article key={h.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display text-lg font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StripCta title="Want a plan—not a sales pitch?" subtitle="Free consultation • Clear strategy • No upfront fee" />

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">{content.label} FAQs</h2>
          <div className="mt-8">
            <FaqAccordion items={content.faqs} idPrefix={`practice-${content.slug}`} />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold text-white">Other injury cases we handle</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherPractices.map((p) => (
              <Link
                key={p.slug}
                href={practicePath(p.slug)}
                className="rounded-2xl border border-white/10 bg-[#0a1628] p-5 text-sm text-zinc-300 transition hover:border-law-gold/40 hover:text-white"
              >
                <span className="font-display text-lg font-semibold text-white">{p.label}</span>
                <span className="mt-2 block text-zinc-500">{p.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="consult" className="scroll-mt-28 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ConsultationForm
            idPrefix={`practice-${content.slug}`}
            defaultAccidentType={content.label}
            heading={`Start your ${content.shortLabel.toLowerCase()} consultation`}
            subheading="Tell us what happened—we’ll respond quickly with next steps."
            className="border border-law-gold/25 bg-[#0a1628]"
          />
          <p className="mt-6 text-center text-sm text-zinc-500">
            Prefer phone?{" "}
            <a className="font-semibold text-law-gold" href={`tel:${PI_BRAND.phoneTel}`}>
              {PI_BRAND.phone}
            </a>
          </p>
        </div>
      </section>

      <PiFooter />
    </>
  );
}
