import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./../../styles/hover_underline_animation.css";

function ContributionsPage()
{
    const [ eventKey, setEventKey ] = useState("0");

    return (
        <Card style={{ width: '40rem' }}>
            <Card.Header>Contributions</Card.Header>
            <Accordion activeKey={eventKey}>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={()=>setEventKey("0")}>
                            Willow Framework
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Willow is a marriage between the <Button variant="link" onClick={() => setEventKey("1")} className="hover-underline-animation">Slim Framework</Button>
                            <span> </span>and <Button variant="link" href="https://laravel.com/docs/6.x/eloquent" className="hover-underline-animation">Eloquent ORM</Button>
                            <p>
                                I am the creator of the Willow framework.
                            </p>
                            <Button variant="link" href="https://notion.so/ryannerd/Get-Started-bf56317580884ccd95ed8d3889f83c72" className="hover-underline-animation">
                                Willow Details
                            </Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => setEventKey("1")}>
                            Slim Framework
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Text>
                            The <a href="http://www.slimframework.com/" className="hover-underline-animation">Slim Framework</a> is a lightweight framework
                            used to quickly spin up RESTful APIs. I'm a contributor to the Slim Framework.
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="2" onClick={() => setEventKey("2")}>
                                <span>Linux Mint</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Card.Text>
                                <a href="https://linuxmint.com/about.php" className="hover-underline-animation">Linux Mint</a> is a modern, elegant and
                                comfortable operating system which is both powerful and easy to use.
                            </Card.Text>

                            <Button variant="link" href="https://cinnamon-spices.linuxmint.com/desklets/view/41" className="hover-underline-animation">
                                One of my contributions to Linux Mint
                            </Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Card>
    )
}

export default ContributionsPage;