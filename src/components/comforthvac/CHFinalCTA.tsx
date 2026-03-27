"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ShieldCheck, Clock } from "lucide-react";

export default function CHFinalCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-slate-900/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-blue-300 uppercase tracking-widest mb-3 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
            Ready to Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Need HVAC Help Today?
          </h2>
          <p className="text-blue-200/80 text-lg max-w-xl mx-auto">
            Don&apos;t sweat it (or freeze). Our team is ready to respond fast — just call or fill out the form below.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Left: quick actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href="tel:+17045550123"
              className="flex items-center gap-4 bg-white text-blue-900 hover:bg-blue-50 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-bold text-base text-slate-900">Call Now — (704) 555-0123</p>
                <p className="text-slate-500 text-sm">Mon–Sat 7am–8pm · Emergency service available</p>
              </div>
            </a>

            <div
              onClick={() => document.querySelector("#estimate-form")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-4 bg-white/10 border border-white/20 hover:bg-white/15 rounded-2xl p-5 transition-all hover:-translate-y-0.5 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-base text-white">Request a Free Estimate</p>
                <p className="text-blue-200/70 text-sm">Fill out the form · Get a response in under 1 hour</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: ShieldCheck, label: "100% Satisfaction Guaranteed" },
                { icon: Clock, label: "Same-Day Appointments" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl p-3">
                  <Icon className="w-4 h-4 text-blue-300 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            id="estimate-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-7 shadow-2xl"
          >
            <h3 className="text-slate-900 font-bold text-xl mb-1">Get Your Free Estimate</h3>
            <p className="text-slate-500 text-sm mb-6">Fill out the form and we&apos;ll reach out within the hour.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(704) 555-0000"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Service Needed</label>
                <select className="w-full border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
                  <option value="">Select a service...</option>
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>Heating Repair</option>
                  <option>Furnace Replacement</option>
                  <option>Maintenance Plan</option>
                  <option>Indoor Air Quality</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your issue..."
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                Request Free Estimate →
              </button>
              <p className="text-center text-slate-400 text-xs">
                No commitment required. Response within 60 minutes.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
