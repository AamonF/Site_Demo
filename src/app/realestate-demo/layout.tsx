import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./realestate-demo.css";

const reHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-re-heading",
  display: "swap",
});

const reBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-re-body",
  display: "swap",
});

export default function RealEstateDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`realestate-demo-page min-h-screen bg-white text-neutral-900 antialiased ${reHeading.variable} ${reBody.variable}`}
    >
      {children}
    </div>
  );
}
