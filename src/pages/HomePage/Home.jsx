import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from '../My account/About';
import Feed from './Feed';
import People from '../People/People'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import CreatePost from './CreatePost';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function Home() {

  const [key, setKey] = useState('home');

  




  return (
    <div>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href='#'>Bolgo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.item onSelect={(k) => setKey(k)}>Home</Nav.item>
              <Nav.item href="#features">Features</Nav.item>
              <Nav.item href="#pricing">Pricing</Nav.item>
            </Nav>
          </Container>
        </Navbar>

        <Tabs>
        <Tab eventKey="home">
          <People />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <CreatePost />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Feed />
        </Tab>
        </Tabs>
      
   

    </div >
  );
}

export default Home;