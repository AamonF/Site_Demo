import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyItWorks from "@/components/sections/WhyItWorks";
import DemoExamples from "@/components/sections/DemoExamples";
import Benefits from "@/components/sections/Benefits";
import IdealFor from "@/components/sections/IdealFor";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <WhyItWorks />
        <DemoExamples />
        <Benefits />
        <IdealFor />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
