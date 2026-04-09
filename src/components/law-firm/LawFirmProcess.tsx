import Image from "next/image";

import { PROCESS_STEPS, IMAGES } from "@/lib/law-firm/content";
import { FIRM } from "@/lib/law-firm/firm";

export function LawFirmProcess() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative h-[420px] lg:h-[520px] rounded-[1.25rem] overflow-hidden border border-slate-200/90 shadow-[0_24px_56px_-32px_rgba(15,23,42,0.25)] order-2 lg:order-1 ring-1 ring-black/[0.04]">
            <Image
              src={IMAGES.consultation}
              alt="Attorney and client reviewing case documents during consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-law-navy-950/70 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-law-gold-dark font-semibold text-xs uppercase tracking-[0.28em] mb-4">
              Intake · {FIRM.city}
            </p>
            <h2 className="text-law-navy-950 text-[1.85rem] sm:text-3xl md:text-[2.35rem] font-semibold tracking-tight leading-tight text-balance">
              From first call to a plan you can understand
            </h2>
            <p className="mt-6 text-slate-600 leading-[1.75] text-lg font-light">
              Whether you walk into our {FIRM.city} office or meet by phone, the sequence is the
              same: clarity first, then strategy—so you are not paying to watch us think out loud.
            </p>
            <ol className="mt-12 space-y-10">
              {PROCESS_STEPS.map((s) => (
                <li key={s.step} className="flex gap-6 group">
                  <span className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-law-navy-900 to-law-navy-950 text-white font-semibold flex items-center justify-center text-sm tracking-tight shadow-lg shadow-law-navy-950/20 ring-1 ring-white/10">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-law-navy-950 tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-slate-600 leading-[1.75] font-light">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
