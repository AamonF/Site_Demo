import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./medspa-demo.css";

const msHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-ms-heading",
  display: "swap",
});

const msBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ms-body",
  display: "swap",
});

export default function MedSpaDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`medspa-demo-page min-h-screen bg-[#faf8f6] text-[#2c2825] antialiased ${msHeading.variable} ${msBody.variable}`}
    >
      {children}
    </div>
  );
}
