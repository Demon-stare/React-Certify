import * as React from 'react';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://vuuuwblxyvhowzqcrhwx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dXV3Ymx4eXZob3d6cWNyaHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTY0NzIsImV4cCI6MTk5NDE5MjQ3Mn0.ehzYJFOWr1A35rfELidnvqP26Uvq5JmKq8-s2iBrSzM')


async function getpostsdats () {
  console.log('yup');
  try{
   const { data, error } = await supabase
    .from('POSTS')
    .select()
    console.log(data);
    console.log(error);
  }catch(e){
    console.log('Something theda');
    
  
  }  
}


const Feed = () => {
getpostsdats();
  return (
  <div id="Home">
     <h1>Hey this is feed </h1> 
     <p></p>
  </div>
  )
};

export default Feed;
