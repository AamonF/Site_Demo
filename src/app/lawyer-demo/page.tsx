import { LawFirmBookingSection } from "@/components/law-firm/LawFirmBookingSection";
import { LawFirmExitIntentBand } from "@/components/law-firm/LawFirmExitIntentBand";
import { LawFirmFAQSection } from "@/components/law-firm/LawFirmFAQSection";
import { LawFirmHomeHero } from "@/components/law-firm/LawFirmHomeHero";
import { LawFirmInlineCTA } from "@/components/law-firm/LawFirmInlineCTA";
import { LawFirmAttorneySpotlight } from "@/components/law-firm/LawFirmAttorneySpotlight";
import { LawFirmPracticeGrid } from "@/components/law-firm/LawFirmPracticeGrid";
import { LawFirmProcess } from "@/components/law-firm/LawFirmProcess";
import { LawFirmResourceGuide } from "@/components/law-firm/LawFirmResourceGuide";
import { LawFirmResultsSection } from "@/components/law-firm/LawFirmResultsSection";
import { LawFirmSeoContent } from "@/components/law-firm/LawFirmSeoContent";
import { LawFirmTestimonials } from "@/components/law-firm/LawFirmTestimonials";
import { LawFirmTrustCredibility } from "@/components/law-firm/LawFirmTrustCredibility";
import { LawFirmWhyChoose } from "@/components/law-firm/LawFirmWhyChoose";
import { FAQ_HOME_PREVIEW } from "@/lib/law-firm/content";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/law-firm/jsonld";

export default function LawyerDemoHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd(FAQ_HOME_PREVIEW)),
        }}
      />

      <main>
        <LawFirmHomeHero />
        <LawFirmTrustCredibility />
        <LawFirmPracticeGrid />
        <div className="py-6 md:py-10 bg-white">
          <LawFirmInlineCTA />
        </div>
        <LawFirmWhyChoose />
        <LawFirmAttorneySpotlight />
        <LawFirmResultsSection />
        <LawFirmTestimonials />
        <div className="py-6 md:py-10 bg-law-navy-950">
          <LawFirmInlineCTA variant="dark" />
        </div>
        <LawFirmProcess />
        <LawFirmFAQSection />
        <LawFirmSeoContent />
        <LawFirmResourceGuide />
        <LawFirmBookingSection />
        <LawFirmExitIntentBand />
      </main>
    </>
  );
}
