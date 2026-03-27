import { ShieldCheck } from "lucide-react";
import { SC_TRUST_ITEMS } from "@/lib/supercool/data";

export default function SCTrustBar() {
  return (
    <div className="bg-slate-900 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {SC_TRUST_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-slate-400 text-xs font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
