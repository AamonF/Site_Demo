-- Unified public lead capture for Launch Site Demo
CREATE TABLE public.site_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL,
  name text,
  email text,
  phone text,
  business text,
  industry text,
  service text,
  message text,
  meta jsonb NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX site_leads_created_at_idx ON public.site_leads (created_at DESC);
CREATE INDEX site_leads_source_idx ON public.site_leads (source);

ALTER TABLE public.site_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on site_leads"
  ON public.site_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts on site_leads"
  ON public.site_leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.site_leads TO anon, authenticated;
