"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, DollarSign, CloudRain } from "lucide-react";

function openModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openRoofingModal"));
  }
}

const problems = [
  {
    icon: TrendingUp,
    title: "Small leaks become $10,000+ disasters",
    desc: "A minor roof issue can silently saturate insulation, rot structural wood, and breed mold — long before you notice water inside.",
  },
  {
    icon: DollarSign,
    title: "Delaying repairs costs you more",
    desc: "The average homeowner who waits 6+ months on a known roof issue pays 3× more in total repair costs.",
  },
  {
    icon: CloudRain,
    title: "NC storms hit hard — and fast",
    desc: "Our region's severe weather seasons can turn a hairline crack into a full collapse. Speed and quality matter.",
  },
  {
    icon: AlertTriangle,
    title: "Most issues aren't visible from the ground",
    desc: "You may have serious damage right now and not know it. A free professional inspection is the only way to know for sure.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ERProblem() {
  return (
    <section className="bg-zinc-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/25 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <AlertTriangle className="w-3.5 h-3.5" />
            Don't Wait
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Roof Issues Only Get{" "}
            <span className="text-red-500">Worse — Fast</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            What starts as a small problem becomes a major, expensive repair if left alone. Here's what homeowners across [City] discover too late.
          </p>
        </motion.div>

        {/* Problem grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
        >
          {problems.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-zinc-900/80 border border-zinc-800 hover:border-red-600/40 rounded-2xl p-6 group transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-red-600/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Urgency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-red-700 via-red-600 to-red-700 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-900/30"
        >
          <div>
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-1">
              Act before it's too late
            </p>
            <h3 className="text-white text-2xl font-black">
              Get a Free Roof Inspection Today
            </h3>
            <p className="text-red-200 text-sm mt-1">
              No obligation. Takes less than an hour. Peace of mind guaranteed.
            </p>
          </div>
          <button
            onClick={openModal}
            className="flex-shrink-0 bg-white hover:bg-zinc-100 text-red-600 font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-100 whitespace-nowrap"
          >
            Schedule Now — It's Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
