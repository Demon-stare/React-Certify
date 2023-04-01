import * as React from 'react';
import './Feed.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Posts({ Props }) {

    let data = Array.from(Props)
    console.log("data form postsclass" + Props);


    return (

        <div>

            {
                data.map(row =>

                    <div id="Post-UI-Card">

                        <Card>
                            <Card.Img variant="top" src={row.Post_Image} />
                            <Card.Body>
                                <Accordion flush defaultActiveKey="0">
                                    <Accordion.Item eventKey={row.id}>
                                        <Accordion.Header>
                                            <Col>
                                                <Row>

                                                <Stack direction="horizontal" gap={3}>
      
    
                                                    <Image roundedCircle id="Post-Avatar" src="https://www.shutterstock.com/image-vector/cute-panda-bear-avatar-cartoon-260nw-2115298928.jpg" />
                                             
                                                    <div>

                                                        <p id='Post-UserName'>{row.profiles.full_name}<br />
                                                            Posted this</p>
                                                    </div>
                                                    </Stack>
                                                    </Row>


                                                <Row>
                                                    <Card.Title>{row.Post_title}</Card.Title>

                                                </Row>




                                            </Col>



                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Card.Text>
                                                {row.Post_Content}
                                            </Card.Text>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>

                        <hr></hr>

                    </div>



                )
            }



        </div >
    );
}





