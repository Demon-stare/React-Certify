import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from '../My account/About';
import Feed from './Feed';
import MyProfile from '../People/MyProfile'
import './Home.css';
import CreatePost from './CreatePost';
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
        <MyProfile />
        </Tab>
      </Tabs>

    </div >
  );
}

export default Home;