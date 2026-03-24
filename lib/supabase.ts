import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://quiet-unit-64ca.duttaswastik004.workers.dev", // 👈 your worker URL
  "your-anon-public-key" // 👈 from Supabase dashboard
);