import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/scfc_logo.png';

const Styles = styled.div`
    .navbar {
        background-color: #5C1008;
        padding-top: 0;
    }

    .navbar .scfc-logo {
        padding-top: 1rem;
        padding-bottom: 0;
        color: white;
        font-size: 1.5rem !important;
    }

    .navbar-nav .nav-link {
        color: rgba(255,255,255,.6);
        &:hover {
            color: white;
        }
    }

    // When a dropdown is clicked, remain white
    .navbar-light .navbar-nav .show>.nav-link , .dropdown-item.active {
        color: white;
        background: transparent;
    }

    .dropdown-menu {
        background-color: #5C1008;
    }

    .dropdown-item {
        color: rgba(255,255,255,.6);
        &:hover {
            color: white;
            background: transparent;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                {/* only show brand when on desktop+ */}
                <Navbar.Brand href="/" className="scfc-logo"><img src={logo} height="55" alt="SCFC"/></Navbar.Brand>
            </Container>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                {/* only show brand when on mobile */}
                <Navbar.Brand href="/"></Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"> 
                        <Nav.Item><Nav.Link href="/#/ourservices">Our Services</Nav.Link></Nav.Item>
                        <NavDropdown title="About the Clinic" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/#/about">Mission + Goal</NavDropdown.Item>
                            <NavDropdown.Item href="/#/ourteam">Our Team</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Become Involved" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.gofundme.com/f/santa-cruz-free-clinic-gofundme-fund?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all" target="_blank">GoFundMe</NavDropdown.Item>
                            <NavDropdown.Item href="#">Other</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)
