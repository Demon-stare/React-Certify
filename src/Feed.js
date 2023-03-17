import * as React from 'react';
import { createClient } from '@supabase/supabase-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Posts } from './Posts';
import './App.css';
import { useState, useEffect } from 'react';







export default function Feed() {
  const supabase = createClient('https://vuuuwblxyvhowzqcrhwx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dXV3Ymx4eXZob3d6cWNyaHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTY0NzIsImV4cCI6MTk5NDE5MjQ3Mn0.ehzYJFOWr1A35rfELidnvqP26Uvq5JmKq8-s2iBrSzM')
const [posts, Setposts] = useState([])
const [post, Setpost] = useState({title:"",content:""})
const {title,content} =post

  useEffect(()=>{
  fetchposts()
},[])

  async function fetchposts() {
    
    console.log('entered-getposts');
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
 
  return (
    <div>
      <Posts Props={posts} />
    </div>
  );

};



