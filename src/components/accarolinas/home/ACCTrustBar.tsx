import { Users, Award, Building2, CreditCard, Zap, ThumbsUp } from "lucide-react";

const items = [
  { icon: Users, label: "Family-Owned & Operated" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: Building2, label: "Residential & Commercial" },
  { icon: CreditCard, label: "Financing Available" },
  { icon: Zap, label: "Fast Local Response" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
];

export default function ACCTrustBar() {
  return (
    <section className="bg-zinc-900 border-y border-zinc-800 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-800 rounded-lg overflow-hidden">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2.5 py-5 px-4 bg-zinc-900 hover:bg-zinc-800 transition-colors text-center group"
            >
              <div className="w-8 h-8 rounded-md bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors">
                <Icon className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-zinc-300 text-xs font-medium leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
