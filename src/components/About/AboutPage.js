import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function AboutPage()
{
    return (
        <Card style={{ width: '40rem' }}>
            <Card.Header>About Ryan Jentzsch</Card.Header>
            <ListGroup variant={"flush"} >
                <ListGroup.Item>
                    <ul>
                        <li>Over 25 years experience in IT.</li>
                        <li>I've had my fingers in almost every major language.</li>
                        <li>Networking and SQL experience.</li>
                    </ul>
                </ListGroup.Item>
                <ListGroup horizontal variant={"flush"}>
                    <ListGroup.Item><Button variant={"link"} href="mailto:ryan.jentzsch@gmail.com">Contact Me</Button></ListGroup.Item>
                    <ListGroup.Item><Button variant={"link"} href="https://github.com/RyanNerd">GitHub Profile</Button></ListGroup.Item>
                    <ListGroup.Item><Button variant={"link"} href="https://stackoverflow.com/users/4323201/ryannerd">StackOverflow Reputation</Button></ListGroup.Item>
                </ListGroup>
            </ListGroup>
        </Card>
    )
}

export default AboutPage;