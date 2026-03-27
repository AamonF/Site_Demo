"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, PhoneCall, BarChart2, Package } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const benefits = [
  {
    icon: Eye,
    title: "Instant visual proof",
    description:
      "Business owners instantly see the value — no guessing, no imagination required. The result is right in front of them.",
  },
  {
    icon: ShieldCheck,
    title: "No surprises",
    description:
      "They know exactly what their finished website will look like before spending a dollar. That's a trust-builder most agencies can't offer.",
  },
  {
    icon: PhoneCall,
    title: "More calls, more leads",
    description:
      "A modern, conversion-focused website design means more visitors pick up the phone — which is all that matters to a local business owner.",
  },
  {
    icon: BarChart2,
    title: "Better conversion potential",
    description:
      "Clean structure, fast load times, and strong CTAs translate directly into higher inquiry rates from visitors.",
  },
  {
    icon: Package,
    title: "Easier to sell than packages",
    description:
      "Showing a live site beats any pitch deck. Clients don't buy abstract web design — they buy what they can already see.",
  },
];

export default function WhyItWorks() {
  return (
    <section
      id="why-it-works"
      className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-3 text-accent-400 text-sm font-semibold tracking-wider uppercase">
              Why This Model Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
              Show the Result First.{" "}
              <span className="text-accent-400">Close the Deal After.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed text-balance">
              Most web designers send proposals with no visuals and ask clients
              to imagine the outcome. That model is broken. I flip it — build
              the demo first, send the link, and let the work speak for itself.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Local service businesses don&apos;t think in terms of design
              systems or tech stacks. They think in terms of{" "}
              <strong className="text-white font-semibold">
                &ldquo;will this get me more calls?&rdquo;
              </strong>{" "}
              When they can see the answer is yes, the sale is easy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="md" href="#demo-examples">
                See Demo Examples
              </Button>
              <Button
                variant="ghost"
                size="md"
                href="#contact"
                className="text-white hover:bg-white/10"
              >
                Get a Demo Built
              </Button>
            </div>
          </motion.div>

          {/* Right — benefit cards */}
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex gap-4 bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-5 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <benefit.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
