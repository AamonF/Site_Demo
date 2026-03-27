const steps = [
  { n: "01", title: "System Evaluation", desc: "A complete inspection of your HVAC system — components, airflow, refrigerant, and performance. No guesswork. We start with facts." },
  { n: "02", title: "Performance Diagnosis", desc: "We identify the root cause using professional diagnostic tools — not surface-level symptoms. The right diagnosis drives the right fix." },
  { n: "03", title: "Precision Repair or Install", desc: "We use quality parts, follow manufacturer specs, and verify the work before we leave. No half-measures, no follow-up calls about the same problem." },
  { n: "04", title: "Efficiency Optimization", desc: "After every service, we test performance, review settings, and advise on maintenance that extends the life of your equipment." },
];

export default function HGProcess() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Our <span className="text-emerald-600">System Approach</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A consistent, structured process on every job — residential or commercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ n, title, desc }, i) => (
            <div key={n}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-4 h-px bg-slate-200 z-10" />
              )}
              <span className="text-5xl font-black leading-none select-none block mb-4"
                style={{ color: "rgba(16,185,129,0.10)" }}>{n}</span>
              <div className="w-7 h-0.5 bg-emerald-500/50 mb-4 group-hover:bg-emerald-500 transition-colors" />
              <h3 className="text-slate-900 font-bold text-sm mb-2.5 group-hover:text-emerald-600 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
