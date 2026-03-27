import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://launchsitedemo.com"),
  robots: { index: false, follow: false },
};

export default function PrecisionElectricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {children}
    </div>
  );
}
