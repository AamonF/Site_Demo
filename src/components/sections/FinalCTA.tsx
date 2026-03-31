"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const { open } = useDemoRequest();
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            No commitment required
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance tracking-tight">
            Ready to show—not tell—what a new site could do?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-blue-100/90 leading-relaxed text-balance max-w-2xl mx-auto">
            I can build a custom live demo that shows exactly what your upgraded
            website could look like — before you commit to anything.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={open}
              className="bg-white hover:bg-slate-50 text-accent-700 border-transparent shadow-xl"
            >
              Get a Demo Built
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#demo-examples"
              className="text-white hover:bg-white/10 border border-white/30 hover:border-white/50"
            >
              Browse live demos
            </Button>
          </div>

          <p className="mt-8 text-sm text-accent-200">
            No cost to browse. No commitment required. Just a live link.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
