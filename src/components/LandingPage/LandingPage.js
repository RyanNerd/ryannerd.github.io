import React, {useState} from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContent from "../../styles/tab_content.css";
import AboutPage from "../About/AboutPage";
import ContributionsPage from "../Contributions/ContributionsPage";

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
                <ul>
                     <li>Assembly</li>
                     <li>C, C++</li>
                     <li>COBOL (it's old but for a language invented in the 50's it's not so bad)</li>
                     <li>C# (wonderful language)</li>
                     <li>PHP (In the hands of a seasoned developer this is a powerful language)</li>
                     <li>Visual FoxPro (Microsoft killed this wonderful product)</li>
                     <li>Visual Basic (yuck)</li>
                     <li>SQL MySQL, Oracle and MS-SQL: T-SQL, PL/SQL</li>
                     <li>Kotlin - a great Java alternative</li>
                </ul>
            </Tab>
        </Tabs>
    )
}

export default LandingPage;