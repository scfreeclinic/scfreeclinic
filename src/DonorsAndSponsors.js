import React from 'react'
import { Jumbotron } from "./components/Jumbotron";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const DonorsAndSponsors = () => {
    return (
        <React.Fragment>
            <Jumbotron jumboClasses="newsletterblog_jumbo" jumboText="DONORS AND SPONSORS" />
            <title>Donors and Sponsors - Santa Cruz Free Clinic</title>
            <div className="bodywidth">
                <p>Santa Cruz Free Clinic works with and maintains a close relationship with 
                    all of our sponsors and donors. The contributions they have given will allow 
                    us to continue providing free and accessible healthcare to those in need. 
                    Updates regarding how the donations are used will be posted on our website 
                    and social media pages.</p>
                <p>Donations can be made through <a href="https://charity.gofundme.com/o/en/campaign/santa-cruz-free-clinic-fudraising">GoFundMe</a> and we will efficiently handle your 
                    tax deductible contributions. If you have any questions and concerns, please feel free to contact 
                    us <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com</a>.</p>
            
                <Tab.Container id="left-tabs-example" defaultActiveKey="bombas">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column sidebar">
                        <Nav.Item>
                            <Nav.Link eventKey="bombas">Bombas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="pathwater">Pathwater</Nav.Link>
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
                        <Tab.Pane eventKey="bombas">
                            <p>
                            Bombas was founded on the belief that everyone 
                            deserves access to clean clothes, no matter their circumstance. 
                            They have graciously sent us over 1000 pairs of socks so that 
                            we can distribute to those experiencing houselessness in the Santa 
                            Cruz community! 
                            </p>
                        </Tab.Pane>

                        <Tab.Pane eventKey="pathwater">
                            <p>Did you know that by 2050, there will be more plastic in our ocean 
                                than fish? This statistic is what led the founders of Pathwater to 
                                create a brand that aims to end the use of single-use plastic bottles. 
                                It’s also what led them to expand their mission by partnering with 
                                organizations such as the Santa Cruz Free Clinic! We would like to extend 
                                 gratitude to them for sending us over 160 reusable bottles to distribute 
                                 amongst those experiencing houselessness in the Santa Cruz community! </p>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div>
        </React.Fragment>
    )
}
