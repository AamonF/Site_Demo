import { ShieldCheck, FileText, Award, ClipboardList } from "lucide-react";

const trust = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed in NC. You're protected.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Help",
    desc: "We work directly with your insurance company.",
  },
  {
    icon: Award,
    title: "Warranty Included",
    desc: "Workmanship warranty on every project.",
  },
  {
    icon: ClipboardList,
    title: "Free Estimates",
    desc: "No pressure, no cost. Just honest answers.",
  },
];

export default function ERTrustBar() {
  return (
    <section className="bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trust.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                <p className="text-zinc-400 text-sm leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
