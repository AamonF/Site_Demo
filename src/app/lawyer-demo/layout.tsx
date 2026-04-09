import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import { LawFirmConversionLayer } from "@/components/law-firm/LawFirmConversionLayer";
import { LawFirmFooter } from "@/components/law-firm/LawFirmFooter";
import { LawFirmHeader } from "@/components/law-firm/LawFirmHeader";
import { FIRM } from "@/lib/law-firm/firm";
import { lawMetadata } from "@/lib/law-firm/seo";

import "./lawyer-demo.css";

const lawHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-law-heading",
  display: "swap",
});

const lawBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-law-body",
  display: "swap",
});

export const metadata: Metadata = lawMetadata({
  title: `${FIRM.name} | Charlotte Trial & Injury Counsel`,
  description: `${FIRM.city} trial-ready attorneys for injury, criminal defense, DUI, family law, and immigration. Free consultation: ${FIRM.phoneDisplay}.`,
  path: "/",
});

export default function LawyerDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`lawyer-demo-page min-h-screen bg-white text-slate-900 antialiased ${lawBody.variable} ${lawHeading.variable} pb-[5.75rem] sm:pb-0`}
    >
      <LawFirmHeader />
      {children}
      <LawFirmFooter />
      <LawFirmConversionLayer />
    </div>
  );
}
