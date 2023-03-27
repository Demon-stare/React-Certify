import * as React from 'react';
import './Feed.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion';


export default function Posts({ Props }) {

    let data = Array.from(Props)
    console.log("data form postsclass" + Props);


    return (

        <div>


            {
                data.map(row =>


                    <div id="Post-UI-Card">

                       <Card id="Post-img">



                        <Stack id="Poster-details" gap={2}>
                            <Image roundedCircle id="Post-Avatar" src={row.Post_Image} />
                            <p id='Post-UserName'>{row.profiles.full_name}<br />
                                <sub>Posted this</sub></p>

                        </Stack>


                       


                            <Card.Img variant="top" src={row.Post_Image} alt="code red" />


                            <div id='testaccordian'>

                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header id="post-header" >{row.Post_title}</Accordion.Header>
                                        <Accordion.Body id="post-data" >
                                            {row.Post_Content}
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>

                        </Card>

                        <hr></hr>

                    </div>



                )
            }


        </div>
    );
}





