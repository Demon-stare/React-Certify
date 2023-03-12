import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
    <Row>
        <Col><div id="Auth-UI-Container">
    <Card>
      <Card.Body> 
      <div className="header">
      <h1>Welcome to Certify</h1>
      {loading ? (
        'Sending one click sign on link...'
      ) : (
        <Form onSubmit={handleLogin}>
          <br />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We will share link to your email for sign on.
        </Form.Text>
      </Form.Group>
      <Button id="Send_Link_Button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      )}
    </div>
      </Card.Body>
    </Card>
    </div>
    </Col>
      </Row>
      </Container>
    
  );
}
