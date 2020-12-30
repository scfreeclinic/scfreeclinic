import React from 'react'
import { Jumbotron } from "./components/Jumbotron";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import "./components/styles/NewsletterBlog.css";
import Oct2020 from './assets/Newsletters/October2020.jpg';
import Nov2020 from './assets/Newsletters/November2020.jpg';

export const Newsletter = () => {
    return (
        <React.Fragment>
            <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="NEWSLETTER" />
            <div className="bodywidth">
            <Tab.Container id="left-tabs-example" defaultActiveKey="Oct2020">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column sidebar">
              <Nav.Item>
                <Nav.Link eventKey="Oct2020">October 2020</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Nov2020">November 2020</Nav.Link>
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
              <Tab.Pane eventKey="Oct2020">
                <Image className="lettersize" src={Oct2020} alt="October 2020 Newsletter"  />
              </Tab.Pane>
              <Tab.Pane eventKey="Nov2020">
              <Image className="lettersize" src={Nov2020} alt="November 2020 Newsletter"  />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
            </div>
        </React.Fragment>
    )
}
