import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';



const Feed = () => {

  const [session, setSession] = useState(null);
   
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

  

  return <div id="Home"> <h1>Hey {session.user.username} this is feed</h1> </div>;
};


export default Feed;
