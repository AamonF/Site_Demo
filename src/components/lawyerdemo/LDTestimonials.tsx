import Image from "next/image";
import { Quote } from "lucide-react";

import { COMPANY, IMAGES } from "./constants";

const reviews = [
  {
    quote:
      "Clear explanations, responsive communication, and a strategy that made sense from day one. I always knew where we stood.",
    name: "Sarah M.",
    location: "[City], NC",
    image: IMAGES.testimonialFaces[0],
  },
  {
    quote:
      "Professional in every interaction. They prepared me for what to expect, and they delivered on what they promised.",
    name: "James T.",
    location: "Concord, NC",
    image: IMAGES.testimonialFaces[1],
  },
  {
    quote:
      "We needed steady guidance during a stressful business dispute. The firm was organized, thorough, and focused on outcomes.",
    name: "Elena R.",
    location: "Huntersville, NC",
    image: IMAGES.testimonialFaces[2],
  },
  {
    quote:
      "I appreciated the directness—no hype, no empty promises. Just solid counsel and a plan we could follow with confidence.",
    name: "Michael B.",
    location: "[City], NC",
    image: IMAGES.testimonialFaces[3],
  },
] as const;

export default function LDTestimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative py-20 md:py-28 bg-[#f8f7f4]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[#8b6914] text-xs font-semibold uppercase tracking-[0.22em]">
              Client Reviews
            </p>
            <h2 id="reviews-heading" className="mt-3 text-3xl sm:text-4xl text-[#0a1628]">
              What clients say about working with {COMPANY}
            </h2>
          </div>
          <div className="relative w-full lg:w-[420px] h-40 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hidden lg:block">
            <Image
              src={IMAGES.testimonialAccent}
              alt="Professional courthouse and legal setting"
              fill
              className="object-cover"
              sizes="420px"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#f8f7f4] via-[#f8f7f4]/40 to-transparent" />
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm shadow-slate-200/40"
            >
              <Quote className="w-10 h-10 text-[#c9a227]/35" aria-hidden />
              <blockquote className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base ">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image src={r.image} alt="" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <cite className="not-italic font-semibold text-[#0a1628]">{r.name}</cite>
                  <p className="text-slate-500 text-sm ">{r.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
