import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Feed from './Feed';

const Account = ({ session }) => {
  
  useEffect(() => {
    updateProfile();
  }, [session]);


  const updateProfile = async (e) => {

    try {

      const { user } = session;

      console.log("eamil from database "+ user.email);

      const updates = {
        id: user.id,
        username: user.email,
        updated_at: new Date(),
      };
  

      let { error } = await supabase.from('profiles').upsert(updates);
      console.log("upserted");
  
      
      
      if (error) {
        throw error;
      }
    }



    catch (error) {
      alert(error.message);
    }


  };





  return (

    <div id="After login">

      <Feed /> 

      </div>

  );
};

export default Account;
