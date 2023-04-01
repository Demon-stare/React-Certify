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

function Home() {
  return (
    <div>
        <Tab.Container>
          <Col>
            <Row>
              
              <Nav justify navbar >
                <Nav.Item>
                  <Nav.Link eventKey="Home">
                  <p>Home</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Feed">Feed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="People">People</Nav.Link>
                </Nav.Item>
              </Nav>

            </Row>
            <Row>
              <Tab.Content>
                <Tab.Pane eventKey="Home">
                  <CreatePost/>
                </Tab.Pane>
                <Tab.Pane eventKey="Feed">
                  <Feed />
                </Tab.Pane>
                <Tab.Pane eventKey="People">
                  <People />
                </Tab.Pane>
              </Tab.Content>

            </Row>
          </Col>
        </Tab.Container>
    
    </div>
  );
}

export default Home;