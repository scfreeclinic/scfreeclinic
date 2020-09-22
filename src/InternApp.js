import React from "react";
import Button from "react-bootstrap/Button";
import { Jumbotron } from "./components/Jumbotron";
import styled from "styled-components";
import InstagramEmbed from 'react-instagram-embed';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Styles = styled.div`
  .btn {
    margin: 1rem 2rem;
    background-color: #dabc66;
    border-color: #dabc66;
  }
`;

export const InternApp = () => (
  <Styles>
    <Jumbotron jumboClasses="internapp_jumbo" jumboText="INTERN APPLICATION" />
    <div className="bodywidth">
      <p>
        We at Santa Cruz Free Clinic are looking to update our intern team with
        a set of passionate individuals equipped with skills in various
        disciplines, seeking to bolster the healthcare scene in Santa Cruz! If
        you are interested in applying, please fill out the application linked
        below. Please don’t hesitate to contact us through email at
        <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com</a>, or
        through instagram{" "}
        <a
          href="https://www.instagram.com/scfreeclinic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @scfreeclinic
        </a>{" "}
        with any questions, comments, or concerns regarding the application. We
        look forward to viewing your application.
      </p>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSeyXKsZa_sJAtBdmFeZ3jbmImXdE1hzwiKWZkcdYF0Llxbqzg/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Intern Application
      </Button>
      
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <InstagramEmbed
            url='https://www.instagram.com/p/CFIuWHdAWeF/'
            maxWidth={250}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          </Col>
          <Col xs={12} md={6}>
            <InstagramEmbed
              url='https://www.instagram.com/p/CFLL4gaAml1/'
              maxWidth={250}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Col>      
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <InstagramEmbed
                url='https://www.instagram.com/p/CFOIR1KA4H2/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Col>
            <Col xs={12} md={6}>
              <InstagramEmbed
                url='https://www.instagram.com/p/CFP6TrSnAYj/'
                maxWidth={250}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Col>
          </Row>
      </Container>

    </div>
  </Styles>
);
