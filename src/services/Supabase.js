import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://englhbzrqqnicvkzshfq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZ2xoYnpycXFuaWN2a3pzaGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMTEyNjcsImV4cCI6MjAyNzU4NzI2N30.-rKaTxT7VwgDcZurAh3oUgiOXauKZMEkkLsOKEunRNk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
