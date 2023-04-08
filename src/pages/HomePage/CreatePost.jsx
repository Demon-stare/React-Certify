import * as React from 'react';
import './Feed.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'



export default function CreatePost() {

    const supabase = createClient('https://fjyhzorwyiggzjglhxbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeWh6b3J3eWlnZ3pqZ2xoeGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMTc3MTIsImV4cCI6MTk5NDc5MzcxMn0.YpkAHXhwZrbDWROw4PiuFTe6ePKydhOTPaTJ2h9OIZk')

    const [posttitle, setPostTitle] = useState('');
    const [postcontent, setPostContent] = useState('');
    const [useris, setUseris] = useState('');






    const handlepost = async (e) => {

        e.preventDefault();

        try {

            const {
                data: { user },
              } = await supabase.auth.getUser()

            const { error } = await supabase.
                from('POSTS')
                .insert({ Post_title: posttitle, Post_Content: postcontent ,Posterid: user.id})
                
            if (error) throw error;
        }

        catch (error) {
            alert(error.error_description || error.message);
        }


    }



    return (

        <Container>


            <Form onSubmit={handlepost}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={posttitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        placeholder="Enter Post Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={postcontent}
                        onChange={(e) => setPostContent(e.target.value)} />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>



        </Container>
    );
}





