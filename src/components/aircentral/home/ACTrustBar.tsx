import { Zap, MapPin, Wrench, DollarSign, ThumbsUp } from "lucide-react";

const items = [
  { icon: Zap, label: "Fast Service", desc: "Same-day appointments available" },
  { icon: MapPin, label: "Local Experts", desc: "Born and raised in NC" },
  { icon: Wrench, label: "Reliable Repairs", desc: "Done right the first time" },
  { icon: DollarSign, label: "Honest Pricing", desc: "No hidden fees, ever" },
  { icon: ThumbsUp, label: "5-Star Satisfaction", desc: "Hundreds of happy homes" },
];

export default function ACTrustBar() {
  return (
    <section className="bg-slate-700 py-10" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-blue-300" strokeWidth={2} />
              </div>
              <p className="text-white font-semibold text-sm leading-tight">{label}</p>
              <p className="text-slate-300 text-xs leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
