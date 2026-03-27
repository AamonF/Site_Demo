import type { Metadata } from "next";
import HGHeader from "@/components/hvacgroup/HGHeader";
import HGFooter from "@/components/hvacgroup/HGFooter";
import HGMobileCTA from "@/components/hvacgroup/HGMobileCTA";
import DemoBanner from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://launchsitedemo.com"),
  robots: { index: false, follow: false },
};

export default function HVACGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DemoBanner businessName="HVAC Group Inc" slug="hvac-group-inc-premium" />
      <HGHeader />
      <main className="flex-1">{children}</main>
      <HGFooter />
      <HGMobileCTA />
    </div>
  );
}
