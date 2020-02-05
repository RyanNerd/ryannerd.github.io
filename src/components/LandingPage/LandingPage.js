import React, {useState} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TabContent from "../../styles/tab_content.css";

function LandingPage() {
    const [ activeTabKey, setActiveTabKey ] = useState('about');

    return (
        <Tabs
            id="landing-page-tabs"
            activeKey={activeTabKey}
            onSelect={(key) => setActiveTabKey(key)}
        >
            <Tab
                className={TabContent}
                eventKey="about"
                title="About"
            >
                <Card style={{ width: '30rem' }}>
                    <Card.Header>About Ryan Jentzsch</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Over 25 years experience in IT</ListGroup.Item>
                        <ListGroup.Item>Experience with most mainstream languages</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Tab>
            <Tab className={TabContent}
                eventKey="contributions"
                title="Contributions">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Contributions</Card.Header>
                    <ListGroup variant="flush" active>
                        <ListGroup.Item>Willow Framework</ListGroup.Item>
                        <ListGroup.Item>Slim Framework</ListGroup.Item>
                        <ListGroup.Item>Linux Mint</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Tab>
        </Tabs>
    )
}

export default LandingPage;