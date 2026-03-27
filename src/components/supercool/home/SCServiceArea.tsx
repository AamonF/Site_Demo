import Link from "next/link";
import { MapPin } from "lucide-react";
import { SC_SERVICE_AREAS } from "@/lib/supercool/data";

export default function SCServiceArea() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Service Area
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving Charlotte and the Greater Area
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Based in NoDa at 954 N Davidson St, we serve homeowners and businesses throughout Charlotte and the surrounding region. If you&apos;re not sure whether we cover your area, just give us a call — we&apos;ll let you know quickly.
            </p>
            <Link
              href="/supercoolhvac/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-slate-950 font-bold text-sm hover:bg-sky-300 transition-colors"
            >
              Check My Area
            </Link>
          </div>

          {/* Right — area chips */}
          <div className="flex flex-wrap gap-2.5">
            {SC_SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs font-medium hover:border-sky-400/20 hover:text-sky-400 transition-colors cursor-default"
              >
                <MapPin className="w-3 h-3 text-sky-400" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
