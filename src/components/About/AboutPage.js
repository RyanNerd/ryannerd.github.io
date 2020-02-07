import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./../../styles/hover_underline_animation.css";

function AboutPage()
{
    return (
        <Card style={{ width: '40rem' }}>
            <Card.Header>About Ryan Jentzsch</Card.Header>
            <ListGroup variant={"flush"} >
                <ListGroup.Item>
                    <Card.Text>
                        Over 25 years experience in IT.<br></br>
                        I've had my fingers in almost every major language,
                        as well as Networking and SQL experience.
                    </Card.Text>
                </ListGroup.Item>
                <ListGroup horizontal variant={"flush"}>
                    <ListGroup.Item><Button variant={"link"} href="mailto:ryan.jentzsch@gmail.com" className="hover-underline-animation">Contact Me</Button></ListGroup.Item>
                    <ListGroup.Item><Button variant={"link"} href="https://github.com/RyanNerd" className="hover-underline-animation">GitHub Profile</Button></ListGroup.Item>
                    <ListGroup.Item><Button variant={"link"} href="https://stackoverflow.com/users/4323201/ryannerd" className="hover-underline-animation">StackOverflow Reputation</Button></ListGroup.Item>
                </ListGroup>
            </ListGroup>
        </Card>
    )
}

export default AboutPage;