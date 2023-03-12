import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://bdhlabaohtxofvqemdwx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkaGxhYmFvaHR4b2Z2cWVtZHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxOTc0NDQsImV4cCI6MTk5Mzc3MzQ0NH0.hlS3rjCNleIb-PeIrWn2S41F4fTubUKzFShSB8Is1c4'
)

export default function AuthUI() {
  return (
    <Auth
    providers={[]}
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa
     }}
  />
  );
}

