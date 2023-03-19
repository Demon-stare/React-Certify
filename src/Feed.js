import * as React from 'react';
import { createClient } from '@supabase/supabase-js'
import { Posts } from './Posts';
import './App.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';




export default function Feed( { session }) {
  
  const supabase = createClient('https://vuuuwblxyvhowzqcrhwx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dXV3Ymx4eXZob3d6cWNyaHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTY0NzIsImV4cCI6MTk5NDE5MjQ3Mn0.ehzYJFOWr1A35rfELidnvqP26Uvq5JmKq8-s2iBrSzM')
  const [posts, Setposts] = useState([])
  const usernameid = session.id;

  useEffect(() => {
    fetchposts()
  },[])

  



  async function fetchposts() {

    console.log('entered-getposts' + usernameid );
    try {
      const { data, error } = await supabase
        .from('POSTS')
        .select()
      Setposts(data);
      console.log("data from :", data);

    } catch (e) {
      console.log('Something theda' + e);


    }

  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    console.log("Logged Out")
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Feed
          </Typography>

          <Button color="inherit" onClick={signOut}>Logout</Button>

        </Toolbar>

      </AppBar>

    </Box>
      <Container id="Feed_Container">
        <Posts Props={posts} />
      </Container>
     
    </div>
  );

};



