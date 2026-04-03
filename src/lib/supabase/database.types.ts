export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      site_leads: {
        Row: {
          business: string | null;
          created_at: string;
          email: string | null;
          id: string;
          industry: string | null;
          message: string | null;
          meta: Json;
          name: string | null;
          phone: string | null;
          service: string | null;
          source: string;
        };
        Insert: {
          business?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          industry?: string | null;
          message?: string | null;
          meta?: Json;
          name?: string | null;
          phone?: string | null;
          service?: string | null;
          source: string;
        };
        Update: {
          business?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          industry?: string | null;
          message?: string | null;
          meta?: Json;
          name?: string | null;
          phone?: string | null;
          service?: string | null;
          source?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
