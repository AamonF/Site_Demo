import Image from "next/image";

import { IMAGES } from "./constants";

export default function LDGallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="py-12 md:py-16 bg-[#f0f2f6] border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 id="gallery-heading" className="text-2xl sm:text-3xl text-[#0a1628]">
              Inside the firm
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              A polished environment for focused work—client meetings, case preparation, and
              collaborative strategy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {IMAGES.gallery.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/90 shadow-sm group"
            >
              <Image
                src={src}
                alt={`Law firm environment preview ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
