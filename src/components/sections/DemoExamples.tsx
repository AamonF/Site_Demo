"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wind, Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export interface DemoCard {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  accent: string;
  bg: string;
  border: string;
  tag: string;
  live?: boolean;
}

export const demoData: DemoCard[] = [
  {
    slug: "supercoolhvac",
    name: "Super Cool HVAC",
    industry: "HVAC",
    summary:
      "A premium multi-page demo for a locally owned Charlotte HVAC company — homepage, residential, commercial, maintenance, installation, repair, IAQ, inspections, financing, about, environmental, and contact.",
    accent: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    tag: "bg-cyan-100 text-cyan-700",
    live: true,
  },
  {
    slug: "andrewmatthewshvac",
    name: "Andrew Matthews HVAC",
    industry: "HVAC",
    summary:
      "A premium demo for a certified Charlotte, NC HVAC contractor — diagnostics, seasonal tune-ups, annual maintenance plans, 13 service areas, testimonials, FAQ, and online booking.",
    accent: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    tag: "bg-sky-100 text-sky-700",
    live: true,
  },
  {
    slug: "hvac-group-inc-premium",
    name: "HVAC Group Inc",
    industry: "HVAC",
    summary:
      "A dark-themed premium multi-page demo for a bilingual Charlotte, NC HVAC contractor — homepage, 6 service pages, commercial HVAC, about, contact, and service area. Amber-copper design with SEO-optimized copy.",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tag: "bg-amber-100 text-amber-700",
    live: true,
  },
  {
    slug: "air-central-carolinas",
    name: "Air Central of the Carolinas",
    industry: "HVAC",
    summary:
      "A light, airy multi-page demo for a trusted residential HVAC company — homepage, 6 service pages, about, contact, and service area. Soft blue palette with warm, conversion-focused copy targeting NC homeowners.",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "bg-blue-100 text-blue-700",
    live: true,
  },
];

interface DemoCardProps {
  demo: DemoCard;
  index: number;
}

function DemoCardItem({ demo, index }: DemoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col ${
        demo.live ? "border-blue-200 ring-1 ring-blue-100" : demo.border
      }`}
    >
      {/* Live badge */}
      {demo.live && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live Demo
        </div>
      )}

      {/* Visual preview area */}
      <div
        className={`${demo.bg} p-6 min-h-[160px] flex items-end justify-between border-b ${demo.live ? "border-blue-100" : demo.border}`}
      >
        <div className="space-y-2 flex-1 pt-6">
          <div className="h-3 w-2/5 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.08)" }} />
          <div className="h-5 w-4/5 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
          <div className="h-3 w-3/5 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.06)" }} />
          <div className="h-3 w-full rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.05)" }} />
          <div className="h-3 w-4/5 rounded-full" style={{ backgroundColor: "rgba(0,0,0,0.05)" }} />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-24 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.15)" }} />
            <div className="h-8 w-20 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.07)" }} />
          </div>
        </div>
        <div className="ml-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            <Wind className={`w-5 h-5 ${demo.accent} opacity-60`} />
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-slate-900 leading-snug">
            {demo.name}
          </h3>
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${demo.tag}`}
          >
            {demo.industry}
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
          {demo.summary}
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono truncate">
            launchsitedemo.com/{demo.slug}
          </span>
          <Button
            variant="primary"
            size="sm"
            href={`/${demo.slug}`}
            className="flex-shrink-0 group-hover:bg-accent-700"
          >
            View Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function RequestDemoCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-dashed border-slate-200 hover:border-accent-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Visual area */}
      <div className="bg-slate-50 p-6 min-h-[160px] flex items-center justify-center border-b border-dashed border-slate-200 group-hover:border-accent-200 transition-colors">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 group-hover:border-accent-200 flex items-center justify-center shadow-sm transition-colors">
            <Plus className="w-6 h-6 text-slate-400 group-hover:text-accent-600 transition-colors" />
          </div>
          <p className="text-xs font-semibold text-slate-400 group-hover:text-slate-500 transition-colors">
            Your Business Here
          </p>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-slate-900 leading-snug">
            Request a Custom Demo
          </h3>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">
            Any Niche
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
          Want to see a demo built for your specific business? I&apos;ll build a
          custom live preview around your company, service area, and brand.
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-mono truncate">
            launchsitedemo.com/yourbusiness
          </span>
          <Button
            variant="secondary"
            size="sm"
            href="#contact"
            className="flex-shrink-0"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function DemoExamples() {
  return (
    <section id="demo-examples" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live Demos"
          title="See What a Custom Demo Looks Like"
          subtitle="Each demo is built around a real local service business — showing exactly what an upgraded website could look like before the client commits."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoData.map((demo, i) => (
            <DemoCardItem key={demo.slug} demo={demo} index={i} />
          ))}
          <RequestDemoCard index={demoData.length} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">
            Want to see a demo built for your specific niche?
          </p>
          <Button variant="secondary" size="md" href="#contact">
            Request a Custom Demo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
