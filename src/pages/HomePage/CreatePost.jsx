import * as React from 'react';
import './Feed.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function CreatePost() {


    return (

        <Container>
           

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control  placeholder="Enter Post Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                
          <Button type="submit">Submit</Button>
     
                </Form>

           

        </Container>
    );
}





