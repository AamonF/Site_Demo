import type { Metadata } from "next";
import Link from "next/link";
import { Tag, Clock, ArrowRight, Phone, Star, AlertCircle } from "lucide-react";
import ACCPageHero from "@/components/accarolinas/shared/ACCPageHero";
import { BASE, COMPANY, specials } from "@/lib/accarolinas/data";

export const metadata: Metadata = {
  title: "HVAC Specials & Promotions | Air Central Of The Carolinas",
  description:
    "Current HVAC specials, seasonal promotions, and financing offers from Air Central Of The Carolinas in Indian Trail, NC. Save on tune-ups, installations, and maintenance plans.",
  alternates: { canonical: "/aircentralofthecarolinas/specials" },
};

const badgeColors: Record<string, string> = {
  "Most Popular": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Hot Deal": "bg-red-500/15 text-red-400 border-red-500/30",
  "Best Value": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Check Availability": "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};

export default function SpecialsPage() {
  return (
    <>
      <ACCPageHero
        eyebrow="Current Offers"
        title="Specials, Promotions &"
        titleAccent="Seasonal Deals"
        description="Take advantage of current offers on HVAC service, installation, and maintenance. Ask about manufacturer rebates and seasonal promotions when you contact us."
        breadcrumbs={[{ label: "Specials" }]}
        ctaLabel="Claim an Offer"
      />

      {/* Disclaimer */}
      <section className="bg-zinc-950 pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-zinc-400 text-sm">
              <span className="text-white font-medium">Note:</span> Offers subject to change without notice. Some restrictions may apply. Contact us to confirm current availability and terms before scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Promo cards */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specials.map((promo) => {
              const badgeColor = badgeColors[promo.badge] ?? badgeColors["Check Availability"];
              return (
                <div
                  key={promo.id}
                  className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-colors group relative"
                >
                  {/* Accent top */}
                  <div className="h-1 bg-amber-500" />

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">{promo.subtitle}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                        {promo.badge}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-3">{promo.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{promo.description}</p>

                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-4xl font-bold text-amber-500">{promo.offer}</p>
                        {promo.originalPrice && (
                          <p className="text-zinc-600 text-sm line-through mt-1">{promo.originalPrice}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {promo.expires}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-5 border-t border-zinc-800">
                      <a
                        href={COMPANY.phoneHref}
                        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors flex-1 justify-center"
                      >
                        <Phone className="w-4 h-4" />
                        Call to Redeem
                      </a>
                      <Link
                        href={`${BASE}/contact`}
                        className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors flex-1 justify-center"
                      >
                        Request Online
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referral + recurring CTA */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Maintenance plan CTA */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-7">
              <Star className="w-6 h-6 text-amber-500 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Save Year-Round with a Maintenance Plan</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                Our annual maintenance plan delivers the best ongoing value: two tune-up visits, priority scheduling, repair discounts, and no diagnostic fees.
              </p>
              <Link
                href={`${BASE}/services/preventive-maintenance`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md text-sm font-bold transition-colors"
              >
                Learn About the Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Rebate info */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-7">
              <Tag className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Manufacturer Rebates May Be Available</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                Many new high-efficiency systems qualify for manufacturer rebates that can reduce your out-of-pocket cost significantly. We&apos;ll let you know what&apos;s available for the equipment we recommend.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Ask About Rebates
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Question About an Offer?</h2>
          <p className="text-zinc-400 mb-8">Call us directly — we&apos;ll confirm current availability and help you take advantage of the right offer for your situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-7 py-3.5 rounded-md text-sm font-bold transition-colors">
              <Phone className="w-4 h-4" /> Call {COMPANY.phone}
            </a>
            <Link href={`${BASE}/contact`} className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-7 py-3.5 rounded-md text-sm font-semibold transition-colors">
              Contact Form <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
