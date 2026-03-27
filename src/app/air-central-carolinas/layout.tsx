import type { Metadata } from "next";
import ACHeader from "@/components/aircentral/ACHeader";
import ACFooter from "@/components/aircentral/ACFooter";
import ACMobileCTA from "@/components/aircentral/ACMobileCTA";
import DemoBanner from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://launchsitedemo.com"),
  robots: { index: false, follow: false },
};

export default function AirCentralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DemoBanner businessName="Air Central of the Carolinas" slug="air-central-carolinas" />
      <ACHeader />
      <main className="flex-1">{children}</main>
      <ACFooter />
      <ACMobileCTA />
    </div>
  );
}
