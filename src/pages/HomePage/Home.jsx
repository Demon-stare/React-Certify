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
      <Tabs variant="pills" fill>
        <Tab eventKey="home" title="Create Post">
          <CreatePost />
        </Tab>
        <Tab eventKey="contact" title="Feed">
          <Feed/>
        </Tab>
        <Tab eventKey="profile" title="My Profile">
        <People />
        </Tab>
      </Tabs>

    </div >
  );
}

export default Home;