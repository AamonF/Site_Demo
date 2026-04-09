export function CdCaseResults() {
  return (
    <section id="results" className="scroll-mt-28 border-b border-white/10 bg-[#050810] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-law-gold">Outcomes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Case scenarios (demo illustrations)</h2>
          <p className="mt-4 text-sm text-zinc-500">
            These are hypothetical demo summaries meant to illustrate defense pathways—not guarantees. Every case depends on facts, law, and jurisdiction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Charges reduced",
              body: "Negotiated reductions after challenging testing procedures and evidentiary gaps in a DUI matter.",
            },
            {
              title: "Case dismissed",
              body: "Dismissal following suppression issues and failure to meet discovery obligations in a drug investigation.",
            },
            {
              title: "Favorable resolution",
              body: "Alternative disposition after demonstrating credibility issues and inconsistent witness statements in an assault allegation.",
            },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-[#070c16] p-6">
              <h3 className="font-display text-xl font-semibold text-law-gold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{c.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-relaxed text-zinc-500">
          <strong className="text-zinc-300">Disclaimer:</strong> Past results do not guarantee future outcomes. Case summaries are illustrative for
          website demonstration purposes only and do not represent a promise or prediction. No attorney-client relationship is formed by viewing this
          demo site.
        </p>
      </div>
    </section>
  );
}
