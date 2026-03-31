"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightLeft } from "lucide-react";

const projects = [
  {
    title: "Estate lawn & border refresh",
    before:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Patio & fire feature",
    before:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Front yard curb appeal",
    before:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Garden & pathway",
    before:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=900&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80&auto=format&fit=crop",
  },
];

export default function LDProjects() {
  return (
    <section id="projects" className="bg-stone-50 py-20 md:py-28 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="text-emerald-800 font-semibold text-sm uppercase tracking-[0.12em] mb-3">
              Project showcase
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-3">
              Transformations you can walk through
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              A snapshot of recent installs — from tired beds to outdoor rooms you&apos;ll use every
              weekend.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-stone-500 text-sm font-medium">
            <ArrowRightLeft className="w-4 h-4 text-emerald-700" />
            Before / after style previews
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg shadow-stone-900/5"
            >
              <div className="grid grid-cols-2 gap-px bg-stone-200">
                <figure className="relative aspect-[4/5] bg-stone-100">
                  <Image
                    src={p.before}
                    alt={`Before: ${p.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-stone-900/75 text-white text-xs font-bold uppercase tracking-wider py-2 text-center">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative aspect-[4/5] bg-stone-100">
                  <Image
                    src={p.after}
                    alt={`After: ${p.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-emerald-800/90 text-white text-xs font-bold uppercase tracking-wider py-2 text-center">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="px-5 py-4 border-t border-stone-100">
                <h3 className="font-bold text-stone-900">{p.title}</h3>
                <p className="text-sm text-stone-500 mt-1">[Company Name] · [City], NC area</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
