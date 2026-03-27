import Link from "next/link";
import { ArrowRight, CreditCard, Tag, DollarSign, Gift } from "lucide-react";
import { BASE, specials } from "@/lib/accarolinas/data";

export default function ACCFinancing() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Financing panel */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />

            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6 text-amber-500" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-amber-500 rounded-full" />
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-widest">Financing</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Flexible Financing Options Available
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 flex-1">
              A new HVAC system is a significant investment. We offer financing options to help make repairs and replacements more manageable — so you don&apos;t have to choose between comfort and your budget. Ask about current terms and approval requirements when you contact us.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: DollarSign, label: "Manageable Payments" },
                { icon: CreditCard, label: "Fast Approval" },
                { icon: Gift, label: "Seasonal Promotions" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-center">
                  <Icon className="w-4 h-4 text-amber-500 mx-auto mb-2" />
                  <p className="text-zinc-400 text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <Link
              href={`${BASE}/financing`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-md text-sm font-bold transition-colors self-start"
            >
              Explore Financing Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Specials panel */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col">

            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6">
              <Tag className="w-6 h-6 text-zinc-300" />
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-6 bg-zinc-500 rounded-full" />
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Current Specials</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Promotions & Seasonal Offers
            </h2>

            <div className="space-y-3 mb-8 flex-1">
              {specials.slice(0, 3).map((promo) => (
                <div
                  key={promo.id}
                  className="flex items-start gap-3 bg-zinc-950 border border-zinc-800 rounded-xl p-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-white font-semibold text-sm">{promo.title}</p>
                      <span className="text-amber-500 font-bold text-sm flex-shrink-0">{promo.offer}</span>
                    </div>
                    <p className="text-zinc-500 text-xs">{promo.expires}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`${BASE}/specials`}
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors self-start"
            >
              View All Specials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
