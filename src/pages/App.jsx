import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homebar from './Homebar';
import About from './My account/About';
import Auth from './Auth/Auth';
import People from './People/People'



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

  return <div> { !session ? <Auth/> : <Homebar/> } </div>;
}



