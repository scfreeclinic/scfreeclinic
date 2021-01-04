import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import "./components/styles/OurServices.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel';
import Picture1455 from './assets/CovidKits/1455.jpg';
import Picture1480 from './assets/CovidKits/1480.jpg';
import Picture1497 from './assets/CovidKits/1497.jpg';
import Picture1535 from './assets/CovidKits/1535.jpg';

export const OurServices = () => (
  <>
  <title>Our Services - Santa Cruz Free Clinic</title>
    <Jumbotron jumboClasses="ourservices_jumbo" jumboText="OUR SERVICES" />
    <div className="bodywidth">
      <Tab.Container id="left-tabs-example" defaultActiveKey="covidkits">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column sidebar">
              <Nav.Item>
                <Nav.Link eventKey="covidkits">Covid Kits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="haircuts">Hair Cuts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tb">TB Testing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hivstd">HIV/STD Testing</Nav.Link>
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
              <Tab.Pane eventKey="covidkits">
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
                  href="https://charity.gofundme.com/o/en/campaign/santa-cruz-free-clinic-fudraising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className = "buttonpop"
                >
                  GoFundMe
                </Button>
                <div className="tab_images">
                  <Carousel>
                    <Carousel.Item interval={1000}>
                      <img
                        className="d-block w-100 covidkit"
                        src={Picture1455}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        className="d-block w-100 covidkit"
                        src={Picture1480}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 covidkit"
                        src={Picture1497}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 covidkit"
                        src={Picture1535} 
                        alt="Fourth slide"
                      />
                    </Carousel.Item>
                  </Carousel> 
                </div>
                
              </Tab.Pane>



              <Tab.Pane eventKey="haircuts">
                <p>In the works.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tb">
                <p>In the works.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="hivstd">
                <p>In the works.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  </>
);
