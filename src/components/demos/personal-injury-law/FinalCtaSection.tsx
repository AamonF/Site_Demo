import Image from "next/image";

import { ConsultationForm } from "./ConsultationForm";
import { piImages } from "./images";

export function FinalCtaSection() {
  return (
    <section id="consult" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a1628] shadow-2xl shadow-black/40">
          <div className="grid lg:grid-cols-2">
            <div className="relative hidden min-h-[320px] lg:block">
              <Image
                src={piImages.cta.src}
                alt={piImages.cta.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 0px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1628]" />
            </div>
            <div className="p-6 sm:p-10">
              <ConsultationForm
                idPrefix="main"
                heading="Tell us what happened—we’ll tell you what matters."
                subheading="Fast response. Clear next steps. No pressure."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
