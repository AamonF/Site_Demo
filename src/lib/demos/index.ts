import type { BusinessDemo } from "./types";
import heatingAndAirConnect from "./heatingandairconnect";
import andrewMatthewsHvac from "./andrewmatthewshvac";
import accuTechHvacServices from "./accutechhvacservices";

const demos: Record<string, BusinessDemo> = {
  heatingandairconnect: heatingAndAirConnect,
  andrewmatthewshvac: andrewMatthewsHvac,
  accutechhvacservices: accuTechHvacServices,
};

export function getDemoBySlug(slug: string): BusinessDemo | null {
  return demos[slug] ?? null;
}

export function getAllDemoSlugs(): string[] {
  return Object.keys(demos);
}

export { heatingAndAirConnect };
export type { BusinessDemo };
