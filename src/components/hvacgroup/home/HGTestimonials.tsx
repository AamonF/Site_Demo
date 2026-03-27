import { Star } from "lucide-react";

const testimonials = [
  { name: "Marcus T.", location: "Charlotte, NC", rating: 5, text: "My AC went out during a heat wave and they had a technician out the same day. Professional, fair pricing, fixed it fast. Will definitely use them again.", service: "AC Repair" },
  { name: "Sandra R.", location: "Concord, NC", rating: 5, text: "We manage several rental units and HVAC Group Inc has become our go-to contractor. They respond quickly, don't waste time or money. Hard to find that reliability.", service: "Commercial HVAC" },
  { name: "Carlos M.", location: "Matthews, NC", rating: 5, text: "Lo que más me gustó fue poder comunicarme en español. El técnico fue muy profesional, explicó todo bien y el trabajo quedó perfecto. Los recomiendo.", service: "AC Installation" },
  { name: "Jennifer L.", location: "Mint Hill, NC", rating: 5, text: "Full system replacement last fall. On time, worked efficiently, left the space cleaner than they found it. New system runs perfectly and pricing was honest.", service: "Heating Installation" },
  { name: "David K.", location: "Charlotte, NC", rating: 5, text: "They diagnosed a recurring issue two other companies had missed. Quoted it fairly, fixed it correctly. Night and day difference in service quality.", service: "AC Repair" },
  { name: "Patricia W.", location: "Huntersville, NC", rating: 5, text: "Everything was professional from the first call to job completion. Showed up on time, technician was knowledgeable, price matched the quote exactly.", service: "Heating Repair" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
      ))}
    </div>
  );
}

export default function HGTestimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3.5 py-1.5 mb-6">
            <span className="text-emerald-600 text-xs font-semibold tracking-widest uppercase">Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            What Customers <span className="text-emerald-600">Are Saying</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Real feedback from homeowners and property managers across Charlotte, NC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-sm transition-all flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-4">
                <Stars count={t.rating} />
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1 uppercase tracking-wider flex-shrink-0">{t.service}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
