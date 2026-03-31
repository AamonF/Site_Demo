"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Globe } from "lucide-react";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
import Button from "@/components/ui/Button";

const demoPreviews = [
  {
    slug: "plumbing-demo",
    name: "Plumbing demo",
    dot: "bg-sky-500",
  },
  {
    slug: "hvac-demo",
    name: "HVAC demo",
    dot: "bg-emerald-500",
  },
  {
    slug: "lawyer-demo",
    name: "Law Firm demo",
    dot: "bg-indigo-500",
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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { open: openDemoRequest } = useDemoRequest();

  return (
    <section
      id="home"
      className="relative min-h-[min(100vh,920px)] flex items-center pt-24 pb-24 overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[min(55vw,720px)] h-[min(55vw,720px)] rounded-full bg-gradient-to-bl from-accent-100/90 via-sky-50/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[min(45vw,520px)] h-[min(45vw,520px)] rounded-full bg-gradient-to-tr from-zinc-100/80 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl lg:max-w-none"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-semibold tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Website demos for local businesses
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-[2.35rem] sm:text-5xl lg:text-[3.15rem] font-extrabold text-zinc-950 leading-[1.08] tracking-tight text-balance"
            >
              See your next site{" "}
              <span className="text-accent-600">before you commit</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed text-balance max-w-lg"
            >
              Polished, conversion-focused demo sites you can share with
              prospects—so they see{" "}
              <strong className="text-zinc-800 font-semibold">
                exactly what they&apos;re buying
              </strong>
              , not a vague proposal.
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              aria-label="Key benefits"
            >
              {trustBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-zinc-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" href="#demo-examples">
                Browse live demos
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={openDemoRequest}
              >
                Request a custom build
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative pb-28 lg:pb-36"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zinc-200/60 via-transparent to-accent-100/40 blur-2xl lg:block hidden" aria-hidden />

            <div className="relative rounded-2xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_-12px_rgba(15,23,42,0.12)] overflow-hidden ring-1 ring-zinc-950/5">
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                </div>
                <div className="flex-1 mx-3 h-8 bg-white rounded-lg border border-zinc-200/80 flex items-center px-3 gap-2 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                  <span className="text-xs text-zinc-500 font-mono truncate">
                    launchsitedemo.com/plumbing-demo
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gradient-to-br from-zinc-50 via-white to-accent-50/30 min-h-[240px] sm:min-h-[280px]">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="space-y-2 flex-1">
                    <div className="h-2.5 w-24 rounded-full bg-zinc-200" />
                    <div className="h-8 w-4/5 max-w-[280px] rounded-lg bg-zinc-900/90" />
                    <div className="h-8 w-3/5 max-w-[200px] rounded-lg bg-zinc-200" />
                  </div>
                  <div className="hidden sm:block w-14 h-14 rounded-2xl bg-accent-600/10 border border-accent-200/60" />
                </div>
                <div className="space-y-2 mb-8">
                  <div className="h-2.5 w-full rounded-full bg-zinc-100" />
                  <div className="h-2.5 w-[92%] rounded-full bg-zinc-100" />
                  <div className="h-2.5 w-[78%] rounded-full bg-zinc-100" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-10 px-5 rounded-xl bg-accent-600 text-white text-sm font-semibold flex items-center">
                    Get a quote
                  </div>
                  <div className="h-10 px-5 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-700 flex items-center">
                    View services
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:mt-0 lg:absolute lg:-bottom-4 lg:left-0 flex flex-col gap-2 max-w-full lg:w-max">
              {demoPreviews.map((demo, i) => (
                <motion.a
                  key={demo.slug}
                  href={`/${demo.slug}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-zinc-200/90 shadow-lg shadow-zinc-900/5 bg-white/95 backdrop-blur-sm hover:border-accent-200 hover:shadow-md transition-all text-sm font-medium text-zinc-800 group"
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${demo.dot}`} />
                  <span className="font-mono text-[11px] sm:text-xs text-zinc-500 truncate">
                    /{demo.slug}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-600 transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="absolute -top-3 -right-2 sm:-right-4 rounded-2xl border border-zinc-100 bg-white px-4 py-3 shadow-xl shadow-zinc-900/10 text-left"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Preview model
              </div>
              <div className="text-lg font-bold text-zinc-900 tabular-nums">Live first</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
