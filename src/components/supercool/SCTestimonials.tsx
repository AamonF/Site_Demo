import { Star } from "lucide-react";
import { SC_TESTIMONIALS } from "@/lib/supercool/data";

export default function SCTestimonials() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Charlotte Homeowners Trust Super Cool</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">Honest service builds real relationships. Here's what our customers say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SC_TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 hover:border-sky-400/20 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sky-400 text-sky-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-auto">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
