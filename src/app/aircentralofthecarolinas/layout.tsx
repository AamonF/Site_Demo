import type { Metadata } from "next";
import ACCHeader from "@/components/accarolinas/ACCHeader";
import ACCFooter from "@/components/accarolinas/ACCFooter";
import ACCMobileCTA from "@/components/accarolinas/ACCMobileCTA";
import DemoBanner from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://launchsitedemo.com"),
  robots: { index: false, follow: false },
};

export default function ACCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <DemoBanner businessName="Air Central Of The Carolinas" slug="aircentralofthecarolinas" />
      <ACCHeader />
      <main className="flex-1">{children}</main>
      <ACCFooter />
      <ACCMobileCTA />
    </div>
  );
}
