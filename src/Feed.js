import * as React from 'react';
import { createClient } from '@supabase/supabase-js'
import './App.css';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Posts from './Posts'


export default function Feed() {

  const supabase = createClient('https://fjyhzorwyiggzjglhxbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeWh6b3J3eWlnZ3pqZ2xoeGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMTc3MTIsImV4cCI6MTk5NDc5MzcxMn0.YpkAHXhwZrbDWROw4PiuFTe6ePKydhOTPaTJ2h9OIZk')
  const [postsdata, Setposts] = useState([])


  useEffect(() => {
    fetchposts()
  }, [])


  async function fetchposts() {

    console.log('entered-getposts');


    try {
      let { data: POSTS, error } = await supabase
        .from('POSTS')
        .select('*, profiles!inner (username)')
         console.log("data from : query", POSTS);
         Setposts(POSTS)



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
        <Posts Props={postsdata}></Posts>
      </Container>
    </div>
  );

};



