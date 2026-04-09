import type { Metadata } from "next";

import { CdAttorneySection } from "@/components/demos/criminal-defense-law/CdAttorneySection";
import { CdCaseResults } from "@/components/demos/criminal-defense-law/CdCaseResults";
import { CdFinalCtaSection } from "@/components/demos/criminal-defense-law/CdFinalCtaSection";
import { CdHeroSection } from "@/components/demos/criminal-defense-law/CdHeroSection";
import { CdHomeFaqSection } from "@/components/demos/criminal-defense-law/CdHomeFaqSection";
import { CdJsonLd } from "@/components/demos/criminal-defense-law/CdJsonLd";
import { CdLocalSeoSection } from "@/components/demos/criminal-defense-law/CdLocalSeoSection";
import { CdFooter } from "@/components/demos/criminal-defense-law/CdFooter";
import { CdPracticeAreasGrid } from "@/components/demos/criminal-defense-law/CdPracticeAreasGrid";
import { CdProcessSection } from "@/components/demos/criminal-defense-law/CdProcessSection";
import { CdSecondaryConsultSection } from "@/components/demos/criminal-defense-law/CdSecondaryConsultSection";
import { CdStripCta } from "@/components/demos/criminal-defense-law/CdStripCta";
import { CdTestimonialsSection } from "@/components/demos/criminal-defense-law/CdTestimonialsSection";
import { CdTrustBar } from "@/components/demos/criminal-defense-law/CdTrustBar";
import { CdWhyChooseUs } from "@/components/demos/criminal-defense-law/CdWhyChooseUs";

export const metadata: Metadata = {
  title: "Criminal Defense Lawyers in [City] | Your Criminal Defense Firm",
  description:
    "Charged with a crime in [City]? Strategic defense for DUI, drugs, assault, theft, and domestic allegations. Free confidential consultation—call 24/7 (demo).",
};

export default function CriminalDefenseLawDemoPage() {
  return (
    <>
      <CdJsonLd />
      <CdHeroSection />
      <CdTrustBar />
      <CdPracticeAreasGrid />
      <CdStripCta
        title="The prosecution is already building its story."
        subtitle="Your defense should start before that story hardens into assumptions."
      />
      <CdWhyChooseUs />
      <CdCaseResults />
      <CdAttorneySection />
      <CdTestimonialsSection />
      <CdProcessSection />
      <CdStripCta
        title="If there is a court date on the horizon, waiting is not neutral—it is risky."
        subtitle="Call now for a confidential case review."
      />
      <CdHomeFaqSection />
      <CdSecondaryConsultSection />
      <CdLocalSeoSection />
      <CdFinalCtaSection />
      <CdFooter />
    </>
  );
}
