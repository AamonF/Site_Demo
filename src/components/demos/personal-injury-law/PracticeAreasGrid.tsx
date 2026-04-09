import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PRACTICE_LINKS, practicePath } from "./practice-data";
import { piImages } from "./images";
import type { PiPracticeSlug } from "./site-config";

const thumb: Record<PiPracticeSlug, { src: string; alt: string }> = {
  "car-accidents": piImages.carRoad,
  "truck-accidents": piImages.truck,
  "motorcycle-accidents": piImages.motorcycle,
  "slip-and-fall": piImages.slip,
  "wrongful-death": piImages.memorial,
  "pedestrian-accidents": piImages.pedestrian,
};

export function PracticeAreasGrid() {
  return (
    <section id="practice-areas" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Practice areas</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Select a practice to learn how we investigate liability, document injuries, and pursue maximum recovery.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_LINKS.map((p) => (
            <Link
              key={p.slug}
              href={practicePath(p.slug)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-law-gold/40 hover:shadow-xl hover:shadow-law-gold/10"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={thumb[p.slug].src}
                  alt={thumb[p.slug].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/70 to-transparent" />
              </div>
              <div className="relative space-y-2 p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">{p.label}</h3>
                  <ArrowUpRight className="size-5 shrink-0 text-law-gold opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-zinc-400">{p.description}</p>
                <span className="inline-flex text-xs font-bold uppercase tracking-wide text-law-gold">
                  View practice page
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
