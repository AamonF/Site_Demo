import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { IMAGES } from "./constants";

const points = [
  "Personalized legal strategy aligned to your priorities and risk tolerance",
  "Strong courtroom and negotiation experience across complex matters",
  "Clear communication—plain language, timely updates, and realistic expectations",
  "A results-driven approach grounded in preparation and disciplined execution",
  "Local market knowledge and relationships that support smarter strategy",
] as const;

export default function LDWhyChoose() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-heading"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em]">
              Why Clients Choose Us
            </p>
            <h2 id="why-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628]">
              Counsel built on judgment, preparation, and respect
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed ">
              High-stakes legal issues deserve steady leadership. We combine rigorous analysis with
              practical judgment—so you understand the path forward before you take the next step.
            </p>
            <ul className="mt-10 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#b8922e] shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-slate-700 leading-relaxed ">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-300/30 aspect-[4/3]">
              <Image
                src={IMAGES.consultation}
                alt="Attorneys in a professional consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/55 via-transparent to-transparent" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200/80">
                <Image
                  src={IMAGES.whySupporting}
                  alt="Legal documents and professional workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200/80">
                <Image
                  src={IMAGES.teamOffice}
                  alt="Modern law office interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
