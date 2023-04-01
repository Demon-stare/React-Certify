import * as React from 'react';
import './Feed.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function CreatePost() {


    return (

        <div>
            <Card>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control  placeholder="Enter Post Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    
                </Form>

            </Card>

        </div>
    );
}





