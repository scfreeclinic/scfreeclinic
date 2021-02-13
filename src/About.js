import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
import './components/styles/About.css';
import { Jumbotron } from "./components/Jumbotron";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const About = () => (
  <React.Fragment>
    <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="ABOUT THE CLINIC" />
    <div className="bodywidth">
      {/* <Accordion id="accordian">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Welcome to the Santa Cruz Free Clinic website{" "}
            <FontAwesomeIcon icon={faCaretDown} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                Thank you for dropping by our website, and we hope that you find
                interest in our cause. We are a new and coming clinic looking to
                open up this fall (2020). As operation begins, we hope to accept
                volunteers who can aid us in various services that the clinic
                will offer to the public.
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
      <div id="mission">
        <h6>
          Santa Cruz Free Clinic is dedicated to fighting healthcare disparities
          in the Santa Cruz community by providing access to first step
          healthcare. We strive to provide compassionate and accessible
          healthcare and resources to those who may be experiencing
          houselessness or other difficult conditions at this time.
        </h6>
        <h6>
          It is the goal of the SCFC to provide access to basic healthcare and
          hygiene resources to the community.
        </h6>
      </div>
    </div>
  </React.Fragment>
);
