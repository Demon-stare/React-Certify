import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Auth from './Auth';
import About from './About';
import Home from './Homeeo';
import Feed from './Feed';
import People from './People' 


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

  return <div> { !session ? <Auth/> : <Feed/> } </div>;
}



