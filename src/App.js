import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Auth from './Auth';
import Feed from './Feed';


export default function App() {

  const [session, setSession] = useState(null);
  
  useEffect(() => {

      supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    });

   supabase.auth.onAuthStateChange((_event, session) => {
    console.log(session);
      setSession(session);
    });
  }, []);

  return <div> { !session ? <Feed/> : <Feed/> } </div>;
}



