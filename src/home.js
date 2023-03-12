
async function signOut() {
    const { error } = await supabase.auth.signOut()
  }