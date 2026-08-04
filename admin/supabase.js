// NORI CMS - Supabase Configuration

const SUPABASE_URL = "https://zmplzjbbsbkbwkvhpfth.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGx6amJic2JrYndrdmhwZnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjIyODgsImV4cCI6MjA4NDkzODI4OH0.E4DW4ApG5Okc09WMKA3QzsOTjurzc_QK_9MR2emaDqc";

const { createClient } = supabase;

const db = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
