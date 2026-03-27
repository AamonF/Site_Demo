import SCHeader from "@/components/supercool/SCHeader";
import SCFooter from "@/components/supercool/SCFooter";
import DemoBanner from "@/components/demo/DemoBanner";

export default function SuperCoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <DemoBanner businessName="Super Cool HVAC" slug="supercoolhvac" />
      <SCHeader />
      <main className="flex-1">{children}</main>
      <SCFooter />
    </div>
  );
}
