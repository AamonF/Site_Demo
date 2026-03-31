import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { IMAGES } from "./constants";

const areas = [
  {
    title: "Personal Injury",
    description:
      "Advocacy for individuals harmed by negligence—focused on fair compensation and diligent case development.",
    image: IMAGES.practice.personalInjury,
    alt: "Law library and legal research materials",
  },
  {
    title: "Criminal Defense",
    description:
      "Protecting your rights at every stage with disciplined preparation and measured courtroom judgment.",
    image: IMAGES.practice.criminal,
    alt: "Courthouse exterior representing criminal defense",
  },
  {
    title: "Family Law",
    description:
      "Guidance through sensitive matters with discretion, clarity, and steady counsel for your family’s future.",
    image: IMAGES.practice.family,
    alt: "Family consultation setting",
  },
  {
    title: "Business Law",
    description:
      "Practical counsel for transactions, risk management, and disputes—aligned with your business objectives.",
    image: IMAGES.practice.business,
    alt: "Business meeting and strategy discussion",
  },
  {
    title: "Estate Planning",
    description:
      "Thoughtful planning to protect assets and honor your wishes with documents tailored to your situation.",
    image: IMAGES.practice.estate,
    alt: "Estate planning documents on a desk",
  },
  {
    title: "Civil Litigation",
    description:
      "Measured advocacy in disputes where strategy, credibility, and persistence determine outcomes.",
    image: IMAGES.practice.civil,
    alt: "Professional legal office environment",
  },
] as const;

export default function LDPracticeAreas() {
  return (
    <section
      id="practice-areas"
      aria-labelledby="practice-areas-heading"
      className="relative py-20 md:py-28 bg-[#f8f7f4] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em]">
            Practice Areas
          </p>
          <h2 id="practice-areas-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628]">
            Comprehensive counsel across core practice areas
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Whether your matter requires negotiation, motion practice, or trial readiness, we align
            resources and strategy to your goals—without unnecessary noise.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area) => (
            <article
              key={area.title}
              className="group relative flex flex-col rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-200/40 overflow-hidden hover:border-[#c9a227]/35 hover:shadow-md transition-[box-shadow,border-color] duration-300"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/55 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl text-[#0a1628]">{area.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-1">
                  {area.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] group-hover:text-[#0a1628] transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
