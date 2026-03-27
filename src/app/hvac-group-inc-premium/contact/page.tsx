import type { Metadata } from "next";
import HGContactSection from "@/components/hvacgroup/home/HGContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BASE = "/hvac-group-inc-premium";
const dots = { backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" };

export const metadata: Metadata = {
  title: "Contact HVAC Group Inc | Charlotte, NC HVAC Service",
  description: "Contact HVAC Group Inc for HVAC repair, installation, and commercial service in Charlotte, NC. Call (980) 263-0912 (EN) or (704) 281-9121 (ES).",
  alternates: { canonical: "/hvac-group-inc-premium/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={dots} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Get in Touch with <span className="text-emerald-400">HVAC Group Inc</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            Call us directly, send an email, or fill out the form below. Bilingual service available — English and Spanish.
          </p>
        </div>
      </section>

      <HGContactSection />

      <section className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-5">Explore Our Services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[["All Services", `${BASE}/services`], ["AC Repair", `${BASE}/ac-repair`], ["Commercial HVAC", `${BASE}/commercial-hvac`], ["About Us", `${BASE}/about`], ["Service Area", `${BASE}/service-area`]].map(([label, href]) => (
              <Link key={href} href={href} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm transition-all">
                {label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
