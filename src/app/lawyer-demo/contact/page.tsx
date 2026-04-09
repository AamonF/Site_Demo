import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { LawFirmBreadcrumbs } from "@/components/law-firm/LawFirmBreadcrumbs";
import { LawFirmConsultationForm } from "@/components/law-firm/LawFirmConsultationForm";
import { LawFirmPageHero } from "@/components/law-firm/LawFirmPageHero";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";
import { LAW_FIRM_BASE } from "@/lib/law-firm/site";

export const metadata: Metadata = lawMetadata({
  title: "Contact & Book Consultation",
  description: `Contact ${FIRM.name} in ${FIRM.city}. ${FIRM.phoneDisplay} · ${FIRM.addressLine1}, ${FIRM.addressLine2}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <LawFirmPageHero
        eyebrow="Contact"
        title="Speak with intake—confidential and straightforward"
        subtitle="Tell us what happened. We respond quickly, explain next steps, and schedule attorney time that fits your urgency."
        dark={false}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <LawFirmBreadcrumbs items={[{ label: "Contact" }]} />
        <div className="grid lg:grid-cols-2 gap-14 items-start mt-8">
          <div>
            <h2 className="text-xl font-semibold text-law-navy-950">Office</h2>
            <ul className="mt-6 space-y-5 text-slate-600">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-law-gold shrink-0 mt-0.5" />
                <span>
                  {FIRM.addressLine1}
                  <br />
                  {FIRM.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-law-gold shrink-0 mt-0.5" />
                <a href={`tel:${FIRM.phoneTel.replace(/\D/g, "")}`} className="font-semibold text-law-navy-900 hover:underline">
                  {FIRM.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-law-gold shrink-0 mt-0.5" />
                <a href={`mailto:${FIRM.email}`} className="hover:underline break-all">
                  {FIRM.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-law-gold shrink-0 mt-0.5" />
                <span>{FIRM.hours}</span>
              </li>
            </ul>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-100 aspect-video flex items-center justify-center text-slate-500 text-sm text-center px-6">
              Map placeholder — embed Google Maps or Mapbox for the firm&apos;s Trade Street suite.
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Parking: visitor spots in building garage (validate at reception). Accessibility entrance
              on Trade Street.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-law-navy-950">Request a consultation</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prefer the dedicated landing experience?{" "}
              <a href={`${LAW_FIRM_BASE}/free-consultation`} className="font-semibold text-law-navy-900 underline">
                Free consultation page
              </a>
            </p>
            <div className="mt-6">
              <LawFirmConsultationForm id="contact-page-form" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
