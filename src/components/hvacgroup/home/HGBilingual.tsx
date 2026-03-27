import { Phone, Globe2 } from "lucide-react";

export default function HGBilingual() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2">

            {/* English */}
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 mb-6">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">English</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                We Speak Your Language
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Clear communication is central to great HVAC service. We explain every diagnosis, every recommendation, and every estimate in plain terms — no technical jargon, no surprises on your invoice.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our bilingual team ensures every customer gets the same level of professional, respectful service — regardless of preferred language.
              </p>
              <a href="tel:+19802630912"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all">
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call (English): (980) 263-0912
              </a>
            </div>

            {/* Spanish */}
            <div className="p-10 lg:p-14 bg-white/[0.03]">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5 mb-6">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">Español</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Hablamos Español
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Entendemos que la comunicación clara es esencial cuando se trata del sistema HVAC de su hogar o negocio. Nuestro equipo bilingüe le explicará cada diagnóstico y presupuesto en español — con claridad y profesionalismo.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                No importa si prefiere inglés o español — estamos aquí para servirle en el idioma que le resulte más cómodo. Llámenos hoy.
              </p>
              <a href="tel:+17042819121"
                className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white/60 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all">
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Llamar (Español): (704) 281-9121
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
