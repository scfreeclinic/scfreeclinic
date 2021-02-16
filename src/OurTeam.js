import React from "react";
import './components/styles/OurTeam.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "./components/Jumbotron";
import EthanImg from "./assets/BoardMembers/ethan_p.png";
import ShayImg from "./assets/BoardMembers/shay_p.png";
import KeertanaImg from "./assets/BoardMembers/keertana_l.png";
import RamtinImg from "./assets/BoardMembers/ramtin_l.jpeg";
import KausthubImg from "./assets/BoardMembers/kausthub_f.png";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export const OurTeam = () => (
  <React.Fragment>
    <title>Our Team - Santa Cruz Free Clinic</title>
    <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="OUR TEAM" />
    <div className="bodywidth">
    <h3>Operations Team</h3>
      <h6>
      The Operations Team works closely with the other clinic teams to organize 
      new projects and ensure all current projects have the required resources. 
      </h6>
      <BoardMember
        memberImage1={RamtinImg}
        memberName1="Ramtin Poustinchi - Executive Director / Operations Director"
        memberDesc1="Ramtin Poustinchi is the founder and executive director of the Santa Cruz Free Clinic. His journey in nonprofit 
            work began with his employment at Housing Matters as a freshman, whilst he was pursuing a B.S. in Neuroscience with a minor 
            in Bioinformatics. During his tenure at housing matters he set out to identify gaps in care for the unsheltered community, 
            and profiled a plan to address those gaps. Over a period of 3 years that plan evolved and grew into the Santa Cruz Free Clinic, 
            with the help of a small group of UCSC students dedicated to community service. Ramtin hopes to grow the clinic into a reputable 
            force for positive change in the community, with the goal of addressing gaps in care for those in need."
      />

      <h3>Legal Team</h3>
      <h6>
        The Legal Team is working to ensure the longevity of Santa Cruz Free
        Clinic by retaining its status as a 501(c)(3) nonprofit organization.{" "}
      </h6>
      <BoardMember
        memberImage1={KeertanaImg}
        memberName1="Keertana Katuru - Legal Director"
        memberDesc1="Keertana Katuru is a third year MCD Biology major at UCSC who has always been passionate about making healthcare more 
        accessible to under-resourced communities. Through the Santa Cruz Free Clinic, Keertana has the opportunity to help provide an impactful 
        service for the community and pursue her passion for healthcare. She hopes that the SC Free Clinic will help her and the SCFC team not only 
        provide supporting healthcare services to those who need them, but also bridge other disparities within the community. In the future, 
        Keertana sees herself continuing nonprofit work with the SC Free Clinic and Seemandhra Forum- a nonprofit started by family and friends- while 
        working within the healthcare industry."
      />

      <h3>Public Relations Team</h3>
      <h6>
        The PR team is working to foster a relationship with the community in
        Santa Cruz by providing opportunities to contribute to the clinic, as
        well as distributing resources to those experiencing houselessness.
      </h6>
      <BoardMembers
        memberImage1={EthanImg}
        memberName1="Ethan Lin - Director of Personal Relations"
        memberDesc1="Ethan Lin is a third year MCD Biology student with a passion for giving back to his community. Throughout high school, 
            he has gone on several service trips to Taiwan to serve the indigenous population there. At UCSC, he interned for Cal Teach to make 
            an impact on K-12 students in local Santa Cruz schools. As the PR Director, Ethan hopes to be able to give back to the homeless 
            and less fortunate in the local Santa Cruz community through Santa Cruz Free Clinic. Like the other members of the clinic, Ethan 
            wants the clinic to become a service that is able to fulfill the basic healthcare and hygiene needs of the community. In the future, 
            he desires to continue to give back through his love for biology and health sciences by becoming a Physician Assistant (PA)."
        memberImage2={ShayImg}
        memberName2="Shay Reed - Director of Personal Relations"
        memberDesc2="Shay Reed is a third year Human Biology student at UCSC. While she is originally from Utah, she has fallen in love
            with Santa Cruz and its community over the years that she has lived there. She joined SCFC in an effort to reach out to those that 
            she saw struggling in the Santa Cruz community and to work to fill those needs that were not being met for people experiencing 
            houselessness. As a PR Director, Shay hopes to build a relationship with the community that SCFC serves and to bring in volunteers 
            and other resources to help take care of those in need. In the future, Shay hopes to use her experience in biology and service to become 
            an emergency physician and to continue to serve her community with knowledge and compassion. "
      />

      <h3>Finance Team</h3>
      <h6>
        The Finance Team is working to ensure that the clinic makes fiscal
        decisions to best support our community.
      </h6>
      <BoardMember
        memberImage1={KausthubImg}
        memberName1="Kausthub Prodduturi - Director of Finance"
        memberDesc1="Kausthub is a third year student studying Neuroscience at UCSC. He was interested in becoming a part of 
            SCFC because he wanted to help people in the community that are under served. After raising money and awareness for 
            various non profit organizations, he has realized that even the smallest help or change can lead to a major difference in 
            the lives of those who need it. As one of the directors of finance, it is his duty to make sure that the clinic is financially 
            stable and able to use its assets to support the community. It is his goal to make sure that SCFC, through donors and sponsors, 
            always has the funds necessary to help anyone in their time of need. After graduation, he hopes to attend medical school in order 
            to become a fully practicing physician so that he can continue to serve our society."
      />

      <hr />

      <h5 id="thank_interns">A THANK YOU TO OUR INTERNS</h5>
      <Accordion id="intern_acc">
        <Card>
          <Card.Header className="card_header">
            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="card_header_text">
              Operations Team
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <ul className="interns">
               <li>Brandon Cheng - Haircutting Clinic [Fall 2020, Winter 2021]</li>
               <li>Citlalli Castillo - Mentorship Program [Fall 2020, Winter 2021]</li>
               <li>Emily Nguyen - Telemedicine [Fall 2020, Winter 2021]</li>
               <li>Joyce Lai - Donation Drive [Fall 2020, Winter 2021]</li>
               <li>Melica Baboldashtian - Winter Weather Program [Fall 2020, Winter 2021]</li>
               <li>Sara Amirkiai - Foot Washing Clinic [Fall 2020, Winter 2021]</li>
               <li>Sarah Khair - HIV Advocacy Program[Fall 2020, Winter 2021]</li>  
            </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card_header">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Legal Team
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul className="interns">
                <li>Sophie Tamayo - Legal Intern [Summer 2020]</li>
                <li>Yatziri Arias Torres - Legal Intern [Summer 2020]</li>
                <li>Allie Nguyen - [Fall 2020, Winter 2021]</li>
                <li>Jackie Rourke - [Fall 2020, Winter 2021]</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card_header">
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Public Relations Team
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="interns">
                <li>Theresa Tan - Website Lead [Summer 2020, Fall 2020, Winter 2021] / Social Media [Summer 2020]</li>
                <li>Jo Leslie - Social Media Lead [Summer 2020] / Website [Summer 2020]</li>
                <li>Haley Block - Hygiene Kit Lead [Summer 2020] / Social Media [Summer 2020]</li>
                <li>Bianca Yuen - [Fall 2020, Winter 2021]</li>
                <li>Elisha Kim - [Winter 2021]</li>
                <li>Juliana McCullen - [Fall 2020, Winter 2021]</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card_header">
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Finance Team
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul className="interns">
                <li>Brian Flores - Finance Intern [Summer 2020]</li>
                <li>Kim Hatch - [Fall 2020, Winter 2021]</li>
                <li>Mary Gonzalez - [Fall 2020, Winter 2021]</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  </React.Fragment>
);

// 1 Board Member in a Team
export const BoardMember = (props) => {
  const {
    memberImage1,
    memberName1,
    memberDesc1,
  } = props;
  return (
    <Container>
      <Row className="boardMember">
        <Col xs={12} md={3}>
          <img width={150} src={memberImage1} alt="member1" />
        </Col>
        <Col xs={12} md={9}>
          <h6>{memberName1}</h6> <p className="p_grid">{memberDesc1}</p>
        </Col>
      </Row>
    </Container>
  );
};

// 2 Board Members in a Team
export const BoardMembers = (props) => {
  const {
    memberImage1,
    memberImage2,
    memberName1,
    memberName2,
    memberDesc1,
    memberDesc2,
  } = props;
  return (
    <Container>
      {/* You can add breakpoints! */}

      <Row className="boardMember">
        <Col xs={12} md={3}>
          <img width={150} src={memberImage1} alt="member1" />
        </Col>
        <Col xs={12} md={9}>
          <h6>{memberName1}</h6> <p className="p_grid">{memberDesc1}</p>
        </Col>
      </Row>
      <Row className="boardMember">
        <Col xs={12} md={3}>
          <img width={150} src={memberImage2} alt="member2" />
        </Col>
        <Col xs={12} md={9}>
          <h6>{memberName2}</h6> <p className="p_grid">{memberDesc2}</p>
        </Col>
      </Row>
    </Container>
  );
};
