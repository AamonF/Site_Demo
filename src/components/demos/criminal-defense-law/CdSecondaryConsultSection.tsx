import Image from "next/image";

import { CdConsultationForm } from "./CdConsultationForm";
import { cdImages } from "./images";

export function CdSecondaryConsultSection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={cdImages.skylineNight.src}
            alt={cdImages.skylineNight.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-display text-2xl text-white">If it feels urgent, it probably is.</p>
            <p className="mt-2 text-sm text-zinc-400">Courts and prosecutors do not pause for your anxiety—get counsel aligned with your timeline.</p>
          </div>
        </div>
        <CdConsultationForm
          idPrefix="cd-secondary"
          heading="Second intake: tell us what you are facing"
          subheading="Same-day review for emergencies (demo). Duplicate form for conversion testing in production."
          className="border border-white/10 bg-[#070c16]"
        />
      </div>
    </section>
  );
}
