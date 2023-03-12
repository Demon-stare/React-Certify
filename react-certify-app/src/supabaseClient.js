import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vuuuwblxyvhowzqcrhwx.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dXV3Ymx4eXZob3d6cWNyaHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTY0NzIsImV4cCI6MTk5NDE5MjQ3Mn0.ehzYJFOWr1A35rfELidnvqP26Uvq5JmKq8-s2iBrSzM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
