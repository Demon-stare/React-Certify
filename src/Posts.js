import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export function Posts({ PostsList }) {

    return (
        <div className="PostsFeed">
            {
                PostsList.map(row =>
                    <div id="Post-UI-Card">
                        <Card>
                            <Card.Img variant="top" src={row.image} />
                            <Card.Body>
                                <Card.Title>{row.Title}</Card.Title>
                                <Card.Text>
                                    {row.content}
                                </Card.Text>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="outline-primary"><img id="button-icon" alt="placeholder" src="https://www.svgrepo.com/show/93813/up-arrow.svg"></img></Button>
                                    <Button variant="outline-danger"><img id="button-icon" alt="placeholder" src="https://www.svgrepo.com/show/80156/down-arrow.svg"></img></Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    );
}
    




