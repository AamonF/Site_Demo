import { CD_BRAND } from "./site-config";

const stats = [
  { label: "Years in court", value: `${new Date().getFullYear() - CD_BRAND.foundingYear}+` },
  { label: "Cases handled (demo stat)", value: "2,500+" },
  { label: "Jury & bench experience", value: "Trial-tested" },
  {
    label: "Favorable outcomes (carefully phrased)",
    value: "Strong track record",
    note: "Past results do not guarantee future outcomes.",
  },
  { label: "Licensing", value: CD_BRAND.stateLicense },
] as const;

export function CdTrustBar() {
  return (
    <section id="trust" className="scroll-mt-28 border-b border-white/10 bg-[#050810] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Trust signals</p>
        <h2 className="mt-3 text-center font-display text-2xl font-semibold text-white sm:text-3xl">
          Built for high-stakes defense
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-6 text-center"
            >
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{s.label}</p>
              {"note" in s ? <p className="mt-2 text-[10px] leading-snug text-zinc-600">{s.note}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
