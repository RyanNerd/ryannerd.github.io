import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./../../styles/hover_underline_animation.css";

function ContributionsPage()
{
    return (
        <Card>
            <Card.Header>Contributions</Card.Header>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Willow Framework
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Willow Framework details placeholder
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Slim Framework
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Slim Framework details placeholder
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                <span>Linux Mint</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Card.Text>
                                Place holder
                            </Card.Text>

                            <Button variant="link" href="https://cinnamon-spices.linuxmint.com/desklets/view/41" className="hover-underline-animation">
                                Details
                            </Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Card>

    )
}

export default ContributionsPage;