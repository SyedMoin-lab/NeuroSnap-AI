// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ezqrdptcvaeuzqnjbwbb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cXJkcHRjdmFldXpxbmpid2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMzY1ODYsImV4cCI6MjA2NDYxMjU4Nn0.9BW7W_YQI6m8Jv5N6oQxW_ohj3X4j30ke9YZQCYi1_A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);