import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from './My account/About';
import Feed from './Feed/Feed';
import People from './People/People' 

function Homebar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
       <Feed/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <People />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <People />
      </Tab>
    </Tabs>
  );
}

export default Homebar;