"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

const demoPreviews = [
  {
    slug: "heatingandairconnect",
    name: "Heating & Air Connect",
    tag: "Live",
    color: "bg-blue-50 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    slug: "primecomfort",
    name: "Prime Comfort",
    tag: "HVAC",
    color: "bg-violet-50 border-violet-200",
    dot: "bg-violet-500",
  },
];

const trustBullets = [
  "Built for local service businesses",
  "SEO-ready page structure",
  "Mobile-first conversion design",
  "Fast turnaround",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-50 opacity-60 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-slate-100 opacity-80 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-sm font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
              Custom Website Demos for Local Businesses
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight text-balance"
            >
              Custom Websites Built Before You Even{" "}
              <span className="text-accent-600">Say Yes</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed text-balance"
            >
              I build modern, high-converting demo websites for local service
              businesses so you can see{" "}
              <strong className="text-slate-700 font-semibold">
                exactly what your upgraded site could look like
              </strong>{" "}
              before committing.
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2"
              aria-label="Key benefits"
            >
              {trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-slate-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" href="#demo-examples">
                View Demo Examples
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Get a Demo Built
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column — visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Browser-style mockup card */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-3 h-6 bg-white rounded-md border border-slate-200 flex items-center px-3 gap-2">
                  <Globe className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400 font-mono truncate">
                    launchsitedemo.com/heatingandairconnect
                  </span>
                </div>
              </div>

              {/* Mock page content */}
              <div className="p-6 bg-gradient-to-br from-sky-50 to-white min-h-[260px]">
                <div className="h-4 w-1/3 rounded bg-sky-100 mb-3" />
                <div className="h-8 w-4/5 rounded-lg bg-sky-200 mb-2" />
                <div className="h-8 w-3/5 rounded-lg bg-sky-200 mb-5" />
                <div className="h-4 w-full rounded bg-sky-100 mb-2" />
                <div className="h-4 w-full rounded bg-sky-100 mb-2" />
                <div className="h-4 w-3/4 rounded bg-sky-100 mb-6" />
                <div className="flex gap-3">
                  <div className="h-10 w-32 rounded-xl bg-sky-500" />
                  <div className="h-10 w-28 rounded-xl bg-sky-100 border border-sky-200" />
                </div>
              </div>
            </div>

            {/* Floating demo link cards */}
            <div className="absolute -bottom-4 -left-4 space-y-2">
              {demoPreviews.map((demo, i) => (
                <motion.a
                  key={demo.slug}
                  href={`/${demo.slug}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border shadow-md bg-white hover:shadow-lg transition-shadow text-sm font-medium text-slate-700 group`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${demo.dot}`} />
                  <span className="font-mono text-xs text-slate-500">
                    launchsitedemo.com/{demo.slug}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-accent-600 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 text-center"
            >
              <div className="text-2xl font-extrabold text-accent-600">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Live Before You Buy
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
