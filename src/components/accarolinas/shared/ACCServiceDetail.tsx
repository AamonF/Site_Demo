"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ChevronDown, ArrowRight, Phone } from "lucide-react";
import ACCPageHero from "./ACCPageHero";
import ACCCTABlock from "./ACCCTABlock";
import { BASE, COMPANY, services } from "@/lib/accarolinas/data";

interface ServiceDetailProps {
  slug: string;
}

export default function ACCServiceDetail({ slug }: ServiceDetailProps) {
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) return null;

  const related = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <>
      <ACCPageHero
        eyebrow={service.category}
        title={service.title}
        titleAccent="Service"
        description={service.longDescription}
        breadcrumbs={[
          { label: "Services", href: `${BASE}/services` },
          { label: service.title },
        ]}
      />

      {/* Main content */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Signs */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h2 className="text-white font-bold text-lg">Signs You May Need This Service</h2>
                </div>
                <ul className="space-y-3">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                      <span className="text-zinc-300">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's included */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  <h2 className="text-white font-bold text-lg">What&apos;s Included</h2>
                </div>
                <ul className="space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Air Central */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-7">
                <h2 className="text-white font-bold text-lg mb-4">Why Choose Air Central</h2>
                <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                  <p>
                    When you call Air Central Of The Carolinas for {service.title.toLowerCase()}, you&apos;re working with a team that&apos;s been serving Indian Trail and the Charlotte area for over 20 years. We know the climate here, we know the common issues with local housing stock, and we know what it takes to do this work properly.
                  </p>
                  <p>
                    We don&apos;t rush jobs. We don&apos;t guess. We diagnose carefully, recommend honestly, and do the work with the attention to detail it deserves. Every service call ends with a walkthrough so you understand exactly what was done and why.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              {service.faq && service.faq.length > 0 && (
                <div>
                  <h2 className="text-white font-bold text-xl mb-5">Frequently Asked Questions</h2>
                  <div className="space-y-2">
                    {service.faq.map((item, i) => (
                      <div
                        key={i}
                        className={`bg-zinc-900 border rounded-xl overflow-hidden transition-colors ${
                          openFaq === i ? "border-zinc-700" : "border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left"
                          aria-expanded={openFaq === i}
                        >
                          <span className={`font-medium text-sm pr-4 ${openFaq === i ? "text-white" : "text-zinc-300"}`}>
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                              openFaq === i ? "rotate-180 text-amber-500" : "text-zinc-500"
                            }`}
                          />
                        </button>
                        {openFaq === i && (
                          <div className="px-6 pb-5">
                            <div className="h-px bg-zinc-800 mb-4" />
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-5">

              {/* CTA card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Schedule Service</p>
                <h3 className="text-white font-bold text-base mb-2">Ready to get started?</h3>
                <p className="text-zinc-400 text-sm mb-5">
                  Contact us for fast, professional {service.title.toLowerCase()} service in Indian Trail and the Charlotte area.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 py-3 rounded-md text-sm font-bold w-full transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {COMPANY.phone}
                  </a>
                  <Link
                    href={`${BASE}/contact`}
                    className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white py-3 rounded-md text-sm font-semibold w-full transition-colors"
                  >
                    Request Free Estimate
                  </Link>
                </div>
                <div className="mt-5 pt-4 border-t border-zinc-800">
                  <p className="text-zinc-500 text-xs">Mon–Fri 7am–6pm · Sat 8am–4pm</p>
                  <p className="text-zinc-500 text-xs mt-1">Emergency service available</p>
                </div>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Related Services</p>
                  <div className="space-y-2">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`${BASE}/services/${rel.slug}`}
                        className="flex items-center justify-between py-2.5 text-zinc-300 hover:text-white text-sm border-b border-zinc-800 last:border-0 group transition-colors"
                      >
                        {rel.title}
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ACCCTABlock
        headline={`Schedule ${service.title} in Indian Trail or Charlotte`}
        subtext={`Air Central Of The Carolinas provides professional ${service.title.toLowerCase()} throughout the Charlotte metro area. Call today or request a free estimate online.`}
        variant="urgent"
      />
    </>
  );
}
