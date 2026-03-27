import type { Metadata } from "next";
import ACCServiceDetail from "@/components/accarolinas/shared/ACCServiceDetail";
import { services } from "@/lib/accarolinas/data";

const SLUG = "indoor-air-quality";
const service = services.find((s) => s.slug === SLUG)!;

export const metadata: Metadata = {
  title: service?.metaTitle ?? "Indoor Air Quality | Air Central Of The Carolinas",
  description: service?.metaDescription ?? "",
  alternates: { canonical: `/aircentralofthecarolinas/services/${SLUG}` },
};

export default function ServicePage() {
  return <ACCServiceDetail slug={SLUG} />;
}
