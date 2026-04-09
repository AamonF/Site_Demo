import type { Metadata } from "next";

import { AttorneySection } from "@/components/demos/personal-injury-law/AttorneySection";
import { CaseResults } from "@/components/demos/personal-injury-law/CaseResults";
import { FinalCtaSection } from "@/components/demos/personal-injury-law/FinalCtaSection";
import { HeroSection } from "@/components/demos/personal-injury-law/HeroSection";
import { HomeFaqSection } from "@/components/demos/personal-injury-law/HomeFaqSection";
import { LocalSeoSection } from "@/components/demos/personal-injury-law/LocalSeoSection";
import { PiFooter } from "@/components/demos/personal-injury-law/PiFooter";
import { PiJsonLd } from "@/components/demos/personal-injury-law/PiJsonLd";
import { PracticeAreasGrid } from "@/components/demos/personal-injury-law/PracticeAreasGrid";
import { ProcessSection } from "@/components/demos/personal-injury-law/ProcessSection";
import { SecondaryConsultSection } from "@/components/demos/personal-injury-law/SecondaryConsultSection";
import { StripCta } from "@/components/demos/personal-injury-law/StripCta";
import { TestimonialsSection } from "@/components/demos/personal-injury-law/TestimonialsSection";
import { TrustBar } from "@/components/demos/personal-injury-law/TrustBar";
import { WhyChooseUs } from "@/components/demos/personal-injury-law/WhyChooseUs";

export const metadata: Metadata = {
  title: "Personal Injury Lawyers in [City] | Law Firm Website Demo",
  description:
    "Injured in an accident in [City]? This demo highlights trial-ready positioning for serious injury claims. Free consultation. No fee unless we win.",
};

export default function PersonalInjuryLawDemoPage() {
  return (
    <>
      <PiJsonLd />
      <HeroSection />
      <TrustBar />
      <AttorneySection />
      <PracticeAreasGrid />
      <StripCta />
      <WhyChooseUs />
      <CaseResults />
      <SecondaryConsultSection />
      <TestimonialsSection />
      <ProcessSection />
      <StripCta
        title="Insurance already circling? So are we."
        subtitle="We protect your story before it gets rewritten."
      />
      <HomeFaqSection />
      <LocalSeoSection />
      <FinalCtaSection />
      <PiFooter />
    </>
  );
}
