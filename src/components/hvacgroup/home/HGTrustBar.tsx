import { ShieldCheck, Clock, Users, Wrench, Globe, Award } from "lucide-react";

const stats = [
  { icon: ShieldCheck, label: "Licensed & Insured", value: "Fully Covered" },
  { icon: Clock, label: "In the Trade Since", value: "2005" },
  { icon: Award, label: "Company Founded", value: "2017" },
  { icon: Users, label: "Business Type", value: "Family-Driven" },
  { icon: Wrench, label: "Capability", value: "Res. & Commercial" },
  { icon: Globe, label: "Languages", value: "EN & ES" },
];

export default function HGTrustBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <Icon className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">{value}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
