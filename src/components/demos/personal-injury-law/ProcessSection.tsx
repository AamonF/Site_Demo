import { processSteps } from "./home-content";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 border-b border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Our process</h2>
          <p className="mt-3 text-lg text-zinc-400">Clear milestones. No mystery. No runaround.</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-white/10 bg-[#0a1628] p-6">
              <span className="font-display text-4xl font-semibold text-law-gold/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
