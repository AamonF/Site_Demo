import Link from "next/link";
import { Phone, ShieldCheck, Clock, Leaf, Award } from "lucide-react";
import { SC_BUSINESS } from "@/lib/supercool/data";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "No-Pressure Service" },
  { icon: Clock, label: "Same-Day Availability" },
  { icon: Leaf, label: "Eco-Conscious Solutions" },
  { icon: Award, label: "Quality Guaranteed" },
];

export default function SCHero() {
  return (
    <section className="relative min-h-[85vh] bg-slate-950 flex items-center overflow-hidden">
      {/* Full-bleed hero photo — behind all copy */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1766414629984-73a93e7caba0?w=1920&q=80&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-slate-950/75 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-sky-950/55 to-slate-950/30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50 pointer-events-none" />
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 z-0 w-72 h-72 bg-sky-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 z-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Charlotte&apos;s Honest HVAC Company
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Comfort Done{" "}
              <span className="text-sky-400">Right.</span>
              <br />
              Heating &amp; Cooling{" "}
              <span className="text-teal-400">You Can Trust.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Super Cool HVAC serves Charlotte with honest assessments, quality workmanship, and energy-efficient solutions — no upsells, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/supercoolhvac/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors"
              >
                Request Service
              </Link>
              <a
                href={SC_BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-white font-semibold text-sm hover:border-sky-400/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                {SC_BUSINESS.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-400 text-xs">
                  <Icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — info card (photo is full-bleed behind hero) */}
          <div className="lg:flex lg:justify-end lg:flex-col gap-4">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 sm:p-8 max-w-sm w-full lg:max-w-none shadow-2xl">
              <h2 className="text-white font-bold text-lg mb-5">Get a Free Assessment</h2>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Phone", value: SC_BUSINESS.phone, href: SC_BUSINESS.phoneHref, icon: Phone },
                  { label: "Email", value: SC_BUSINESS.email, href: SC_BUSINESS.emailHref, icon: null },
                ].map(({ label, value, href, icon: Icon }) => (
                  <div key={label}>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    <a href={href} className="text-white text-sm font-semibold hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      {Icon && <Icon className="w-3.5 h-3.5 text-sky-400" />}
                      {value}
                    </a>
                  </div>
                ))}
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="text-white text-sm">{SC_BUSINESS.hours.weekday}</p>
                  <p className="text-white text-sm">{SC_BUSINESS.hours.weekend}</p>
                </div>
              </div>
              <Link
                href="/supercoolhvac/contact"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors"
              >
                Schedule a Visit
              </Link>
              <p className="text-center text-slate-500 text-xs mt-3">Serving Charlotte and surrounding areas</p>
            </div>{/* /info card */}
          </div>
        </div>
      </div>
    </section>
  );
}
