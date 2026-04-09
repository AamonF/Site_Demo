"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Leaf,
  Plus,
  Scale,
  Wind,
  Zap,
} from "lucide-react";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
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
  icon: LucideIcon;
  live?: boolean;
}

export const demoData: DemoCard[] = [
  {
    slug: "plumbing-demo",
    name: "Plumbing demo",
    industry: "Plumbing",
    summary:
      "Full demo for a residential and commercial plumber—hero, services, trust sections, and strong call-to-action paths.",
    accent: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100/80",
    tag: "bg-sky-100 text-sky-800",
    icon: Droplets,
    live: true,
  },
  {
    slug: "landscaping-demo",
    name: "Landscaping demo",
    industry: "Landscaping",
    summary:
      "Outdoor services showcase with project highlights, seasonal offers, and a layout built for local search.",
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100/80",
    tag: "bg-emerald-100 text-emerald-800",
    icon: Leaf,
    live: true,
  },
  {
    slug: "hvac-demo",
    name: "HVAC demo",
    industry: "HVAC",
    summary:
      "Seasonal messaging, pain-point sections, service clarity, and phone-first conversion design.",
    accent: "text-cyan-700",
    bg: "bg-cyan-50",
    border: "border-cyan-100/80",
    tag: "bg-cyan-100 text-cyan-800",
    icon: Wind,
    live: true,
  },
  {
    slug: "electrical-demo",
    name: "Electrical demo",
    industry: "Electrical",
    summary:
      "Electrician-focused pages with safety-forward copy, service cards, and credibility blocks.",
    accent: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100/80",
    tag: "bg-amber-100 text-amber-900",
    icon: Zap,
    live: true,
  },
  {
    slug: "lawyer-demo",
    name: "Law Firm demo",
    industry: "Legal",
    summary:
      "Premium multi-page firm demo: practice templates, booking UX, AI intake assistant UI, and local SEO structure.",
    accent: "text-indigo-700",
    bg: "bg-indigo-50",
    border: "border-indigo-100/80",
    tag: "bg-indigo-100 text-indigo-800",
    icon: Scale,
    live: true,
  },
];

interface DemoCardProps {
  demo: DemoCard;
  index: number;
}

function DemoCardItem({ demo, index }: DemoCardProps) {
  const Icon = demo.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col ${
        demo.live ? "border-zinc-200 ring-1 ring-zinc-950/[0.04]" : demo.border
      }`}
    >
      {demo.live && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Live
        </div>
      )}

      <div
        className={`${demo.bg} p-6 min-h-[148px] flex items-end justify-between border-b ${demo.live ? "border-zinc-100" : demo.border}`}
      >
        <div className="space-y-2 flex-1 pt-7">
          <div className="h-2.5 w-2/5 rounded-full bg-black/[0.07]" />
          <div className="h-5 w-4/5 rounded-md bg-black/[0.1]" />
          <div className="h-2.5 w-3/5 rounded-full bg-black/[0.06]" />
          <div className="h-2.5 w-full rounded-full bg-black/[0.05]" />
          <div className="h-2.5 w-4/5 rounded-full bg-black/[0.05]" />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-24 rounded-lg bg-black/[0.14]" />
            <div className="h-8 w-20 rounded-lg bg-black/[0.07]" />
          </div>
        </div>
        <div className="ml-4">
          <div className="w-11 h-11 rounded-xl bg-white/80 border border-black/[0.06] flex items-center justify-center shadow-sm">
            <Icon className={`w-5 h-5 ${demo.accent}`} />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-zinc-900 leading-snug">
            {demo.name}
          </h3>
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${demo.tag}`}
          >
            {demo.industry}
          </span>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed flex-1 mb-5">
          {demo.summary}
        </p>
        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="text-[11px] text-zinc-400 font-mono truncate">
            launchsitedemo.com/{demo.slug}
          </span>
          <Button
            variant="primary"
            size="sm"
            href={`/${demo.slug}`}
            className="flex-shrink-0"
          >
            Open demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function RequestDemoCard({ index }: { index: number }) {
  const { open } = useDemoRequest();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-zinc-50 rounded-2xl border border-dashed border-zinc-300 hover:border-accent-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="bg-zinc-100/80 p-6 min-h-[148px] flex items-center justify-center border-b border-dashed border-zinc-200 group-hover:border-accent-200 transition-colors">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 group-hover:border-accent-200 flex items-center justify-center shadow-sm transition-colors">
            <Plus className="w-6 h-6 text-zinc-400 group-hover:text-accent-600 transition-colors" />
          </div>
          <p className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-700 transition-colors">
            Your niche here
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-zinc-900 leading-snug">
            Custom demo
          </h3>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-200 text-zinc-600">
            Any trade
          </span>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed flex-1 mb-5">
          Want a preview built around your brand, market, and services? We&apos;ll
          tailor a live link you can send to prospects.
        </p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] text-zinc-400 font-mono truncate">
            launchsitedemo.com/your-brand
          </span>
          <Button
            variant="secondary"
            size="sm"
            href="#contact"
            className="flex-shrink-0"
          >
            Start
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function DemoExamples() {
  const { open } = useDemoRequest();
  return (
    <section id="demo-examples" className="py-20 lg:py-28 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured demos"
          title="Five live sites you can explore right now"
          subtitle="Each preview is a full-page experience—structured for local SEO, trust, and calls—not a generic template."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {demoData.map((demo, i) => (
            <DemoCardItem key={demo.slug} demo={demo} index={i} />
          ))}
          <RequestDemoCard index={demoData.length} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-500 mb-4">
            Need something tailored to your market or brand voice?
          </p>
          <Button type="button" variant="secondary" size="md" onClick={open}>
            Request a custom demo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
