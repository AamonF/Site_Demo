const steps = [
  { n: "01", title: "Call immediately", body: "The fastest way to protect rights is early counsel—before statements solidify into evidence." },
  { n: "02", title: "Case evaluation", body: "We review charges, evidence, deadlines, and collateral risks like license, employment, and family court overlap." },
  { n: "03", title: "Defense strategy", body: "Motions, investigation, expert consultation, and negotiation—chosen for leverage, not theatrics." },
  { n: "04", title: "Court representation", body: "Hearings through trial: prepared, calm, and relentless where the record matters." },
] as const;

export function CdProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Our process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">A clear path when everything feels uncertain</h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <span className="font-display text-3xl font-semibold text-law-gold/90">{s.n}</span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
