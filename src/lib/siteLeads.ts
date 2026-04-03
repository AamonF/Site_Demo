import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Json } from "@/lib/supabase/database.types";

export const SITE_LEAD_SOURCE = {
  launchDemoRequest: "launch_demo_request",
  demoLeadForm: "demo_lead_form",
  landscapingLeadModal: "landscaping_lead_modal",
  roofingLeadModal: "roofing_lead_modal",
  plumbingLeadModal: "plumbing_lead_modal",
  plumbingQuoteForm: "plumbing_quote_form",
  precisionElectricLeadModal: "precision_electric_lead_modal",
  accCarolinasContact: "acc_carolinas_contact",
  hvacGroupContact: "hvac_group_contact",
  amHvacContact: "am_hvac_contact",
  accutechContact: "accutech_contact",
  supercoolContact: "supercool_contact",
} as const;

export function isSupabaseConfigured(): boolean {
  return Boolean(
    typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
      process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
      typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string" &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 0
  );
}

export type SubmitSiteLeadInput = {
  source: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  business?: string | null;
  industry?: string | null;
  service?: string | null;
  message?: string | null;
  meta?: Record<string, unknown>;
};

export async function submitSiteLead(
  input: SubmitSiteLeadInput
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      error:
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment.",
    };
  }
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.from("site_leads").insert({
    source: input.source,
    name: input.name ?? null,
    email: input.email ?? null,
    phone: input.phone ?? null,
    business: input.business ?? null,
    industry: input.industry ?? null,
    service: input.service ?? null,
    message: input.message ?? null,
    meta: (input.meta ?? {}) as Json,
  });
  if (error) {
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
