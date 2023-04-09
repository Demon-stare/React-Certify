import * as React from 'react';
import { useState } from 'react';
import './Auth.css';
import { supabase } from '../../supabaseClient';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Auth() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email, type: 'signup', options: { data: { full_name: email } } });

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

    <Container id='BackCover' fluid>
      <Row>
        <Col>

          <div id="Auth-UI-Parent">
            <Card id="Auth-UI-Card">
              <h2 id="Auth-UI-Title">Welcome to Blogo</h2>
              {
                loading ? ('Sending one click sign on link...') : (

                  <Stack direction="row" spacing={2}>

                    <Form id="email_feild" onSubmit={handleLogin}>

                      <Form.Label>Email address</Form.Label>

                      <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}>
                      </Form.Control>
                      <Button id="Send_Link_Button" type="submit">
                        Submit
                      </Button>

                    </Form>

                  </Stack>

                )}

            </Card>

          </div>

        </Col>
      </Row>
    </Container>



  );
}

