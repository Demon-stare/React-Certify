import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const Account = ({ session }) => {
  
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [aboutme, setaboutme] = useState(null);


  useEffect(() => {
    getProfile();
  }, [session]);



  const getProfile = async () => {

    try {

      setLoading(true);
      
      const { user } = session;

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single();

        console.log("From data " + data.username);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        updateProfile();
      }
    }

    catch (error) {
      alert(error.message);
    }

    finally {
      setLoading(false);
    }

  };





  const updateProfile = async (e) => {

    try {

      setLoading(true);

      const { user } = session;

      console.log("eamil from database "+ user.email);
      console.log("username from databse "+ user.username);

      const updates = {
        id: user.id,
        username: user.email,
        updated_at: new Date(),
      };
  

      let { error } = await supabase.from('profiles').upsert(updates);
      console.log("upserted");
      console.log(updates);

      if (error) {
        throw error;
      }
    }

    catch (error) {
      alert(error.message);
    }

    finally {
      setLoading(false);
    }


  };





  return (

    <div id="After login">
      { loading ? (
        'Saving ...'
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <div>Your Email: {session.user.email}</div>
          <div>
          <div>Your Username : {session.user.username}</div>
          </div>
          <div>
            <button className="button primary block" disabled={loading}>
              Update profile
            </button>
          </div>
        </form>
      )}

      <button type="button" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default Account;
