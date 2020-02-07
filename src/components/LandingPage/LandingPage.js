import React, {useState} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContent from "../../styles/tab_content.css";
import AboutPage from "../About/AboutPage";
import ContributionsPage from "../Contributions/ContributionsPage";
import FrameworksPage from "../Frameworks/FrameworksPage";

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
                <AboutPage/>
            </Tab>

            <Tab className={TabContent}
                eventKey="contributions"
                title="Contributions">
                <ContributionsPage/>
            </Tab>

            <Tab className={TabContent}
                 eventKey="frameworks"
                 title="Frameworks and Languages">
                <FrameworksPage/>
            </Tab>
        </Tabs>
    )
}

export default LandingPage;