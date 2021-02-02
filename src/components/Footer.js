import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import "./styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'


export const Footer = () => (
        <>
            <Nav className="justify-content-center footer" expand="lg" variant="dark">
                <Container id="footer-content">
                    <p>Location: 223 Church St, Santa Cruz, CA 95060 | Email: <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com </a></p>
                    <Button variant="link" href="https://www.facebook.com/SCfreeclinic" target="_blank" className="socialmedia"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></Button>
                    <Button variant="link" href="https://www.instagram.com/scfreeclinic/" target="_blank" className="socialmedia"><FontAwesomeIcon icon={["fab", "instagram"]} /></Button>
                    <Button variant="link" href="https://twitter.com/scfreeclinic" target="_blank" className="socialmedia"><FontAwesomeIcon icon={["fab", "twitter"]} /></Button>
                </Container>
            </Nav>
        </>
)
