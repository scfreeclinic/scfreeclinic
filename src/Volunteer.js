import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import "./components/styles/Volunteer.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Carousel from 'react-bootstrap/Carousel';
import Picture3957 from './assets/Volunteer/3597.jpeg';

export const Volunteer = () => (
  <>
  <title>Our Services - Santa Cruz Free Clinic</title>
    <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="VOLUNTEER" />
    <div className="bodywidth">
        <p>As a nonprofit, we thrive on individuals who are fired up to serve our community. 
            We have a few volunteer opportunities at the moment, and hope to provide more as 
            we grow as an organization!</p>

      <Tab.Container id="left-tabs-example" defaultActiveKey="covidkithandout">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column sidebar">
              <Nav.Item>
                <Nav.Link eventKey="covidkithandout">Covid Kit Handout</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="crochetsleepingmat">Crochet Sleeping Mat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="_____" disabled>
                  _____
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="covidkithandout">
                <p>
                  Santa Cruz Free Clinic is working to provide assistance to
                  those members of our community who are experiencing
                  houselessness during this time. To do this we have created
                  COVID-19 kits to distribute that are filled with health and
                  hygiene items like toothbrushes and feminine care products
                  among other items. We have also included personal protective
                  equipment or PPE like masks and hand sanitizer in our kits to
                  help protect the recipients from the spread of COVID-19. If
                  you would like to help aid our efforts in providing these kits
                  to our community, donations can be made through here:
                </p>
                <Button
                  href="https://docs.google.com/forms/d/116wCvlVDT9VCqrhuzKBwEqpmDD2sKnj_4o8noTh_dLc/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "buttonpop"
                >
                  Sign Up
                </Button>

                <img id="covidkit" src={Picture3957} alt="" />
            
                
              </Tab.Pane>



              <Tab.Pane eventKey="crochetsleepingmat">
                <p>Winter approaches and the temperature is steadily dropping. Sleeping mats 
                    crocheted from plastic bags is a proven cheap and effective way to conserve warmth, 
                    and we’re reaching out to the people in our community to help us! Please fill out the 
                    interest form below if you want to take part. </p>
                
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfQsdPGGA3QtP9dfsibIt1YNywnPCBDsLXBeFaPPeFIZTzg2A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "buttonpop"
                >
                  Sign Up
                </Button>
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </>
);
