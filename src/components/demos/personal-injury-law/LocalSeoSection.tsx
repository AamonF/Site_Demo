import Link from "next/link";

import { PI_DEMO_BASE } from "./site-config";

export function LocalSeoSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-12">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Personal injury lawyers serving <span className="text-law-gold">[City]</span> and surrounding communities
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            When a serious accident happens in <strong className="font-semibold text-zinc-200">[City]</strong>, victims
            need more than a generic website—they need a team that understands local courts, local insurers, and how
            injury claims are evaluated in this region. We represent people hurt in car crashes,
            commercial truck collisions, motorcycle wrecks, slip and fall incidents, pedestrian impacts, and wrongful
            death matters throughout <strong className="font-semibold text-zinc-200">[City]</strong> and nearby areas.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Whether your case involves highway collisions on major corridors, dangerous property conditions in retail
            centers, or catastrophic harm requiring long-term care, we build a strategy aligned with your medical
            timeline and financial realities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${PI_DEMO_BASE}#consult`}
              data-pi-open-consult
              className="inline-flex rounded-full bg-law-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-law-navy-950"
            >
              Free case review
            </Link>
            <Link
              href={`${PI_DEMO_BASE}#practice-areas`}
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Explore practice areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
