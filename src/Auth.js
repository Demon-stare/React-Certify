import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Check } from '@mui/icons-material';



export default function Auth() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');



  const handleLogin = async (e) => {

    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email , type: 'signup'});
      
      if (error) throw error;
      alert('Check your email for the login link!');
    } 
    
    catch (error) {
      alert(error.error_description || error.message);
    }
    
    finally {
      setLoading(false);
    }

  };


  return (
    <div id="Auth-UI-Parent">
      <center>
      <Card id="Title_card">
        <h2 >Welcome to Vent</h2>

        {
         loading ? ('Sending one click sign on link...') : (

          <Stack direction="row" spacing={2}>

            <form id="email_feild" onSubmit={handleLogin}>

              <TextField 
                type="email" 
                label="Enter your email" 
                variant="outlined"
                className="inputField"
                value={email}
                helperText="We will send you a link to sign-in"
                onChange={(e) => setEmail(e.target.value)}>

              </TextField>

              <Button id="Send_Link_Button" variant="contained" type="submit">
                Submit
              </Button>

            </form>

          </Stack>

        )}

      </Card>
      </center>
    </div>
  );
}
