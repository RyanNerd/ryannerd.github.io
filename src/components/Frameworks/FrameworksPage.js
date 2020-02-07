import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./../../styles/hover_underline_animation.css";
import "./../../styles/etched_text.css";

function FrameworksPage()
{
    return (
        <>
        <ListGroup as="ul" style={{ width: '30rem'}}>
            <ListGroup.Item as="li" active>
                 <b>Frameworks</b>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Button variant={"link"} className="hover-underline-animation" href="https://reactjs.org/">
                    React
                </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Button variant={"link"} className="hover-underline-animation" href="https://www.notion.so/ryannerd/Willow-Framework-Users-Guide-bf56317580884ccd95ed8d3889f83c72">
                    Willow
                </Button>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Button variant={"link"} className="hover-underline-animation" href="http://www.slimframework.com/">
                    Slim
                </Button>
            </ListGroup.Item>
        </ListGroup>


        <ListGroup as="ul" style={{ width: "45rem", marginTop: "25px"}}>
            <ListGroup.Item as="li" active>
                <b>Languages</b>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <span className="etched-text">
             PHP
            </span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <span className="etched-text">
                JavaScript / TypeScript
            </span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <span className="etched-text">
                C#
            </span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <span className="etched-text">
                SQL (MySQL, Oracle, MS-SQL): T-SQL, PL/SQL
            </span>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <span className="etched-text">
                Many Others (Kotlin, Dart, C, C++)
            </span>
            </ListGroup.Item>
        </ListGroup>
        </>
    )
}

export default FrameworksPage;