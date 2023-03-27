import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from '../My account/About';
import Feed from './Feed';
import People from '../People/People' 


function Home() {
  return (
    
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">

      <Tab eventKey="home" title="Home">

       <Feed/>

      </Tab>

      <Tab eventKey="profile" title="Profile">
        
        <People />

      </Tab>

      <Tab eventKey="contact" title="Contact">

        <People />

      </Tab>

    </Tabs>
  );
}

export default Home;