import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/scfc_logo.png";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #490d06;
    padding-top: 0;
  }

  .navbar .scfc-logo {
    padding-top: 1rem;
    padding-bottom: 0;
    color: white;
    font-size: 1.5rem !important;
  }

  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: white;
    }
  }

  // When a dropdown is clicked, remain white
  .navbar-light .navbar-nav .show > .nav-link,
  .dropdown-item.active {
    color: white;
    background: transparent;
  }

  .dropdown-menu {
    background-color: #490d06;
  }

  .dropdown-item,
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    &:hover {
      color: white;
      background: transparent;
    }
  }
  .dropdown_nav {
    padding: 12px 32px;
  }

  .bottomnav-brand {
    display: none;
  }

  @media screen and (max-width: 991px) {
    #link {
      padding: 8px 0 !important;
    }
    .topnav {
      display: none;
      /* visibility: hidden; */
    }
    .bottomnav {
      padding: 1rem;
    }
    .bottomnav-brand {
      display: contents;
      color: white;
    }
    .dropdown_nav {
      padding: 12px 24px;
    }
  }


`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" className="topnav">
      <Container>
        {/* only show brand when on desktop+ */}
        <Navbar.Brand href="/" className="scfc-logo">
          <img src={logo} height="55" alt="SCFC" />
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" variant="dark" className="bottomnav">
      <Container>
        {/* only show brand when on mobile */}
        <Navbar.Brand href="/" className="bottomnav-brand"><img src={logo} height="40" alt="SCFC"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} id="link" to="/our_services">
              Our Services
            </Nav.Link>
            <NavDropdown title="About the Clinic" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/core_values">
                  Core Values
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/about">
                  Mission + Goal
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/our_team">
                  Our Team
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Get Involved" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://charity.gofundme.com/o/en/campaign/santa-cruz-free-clinic-fudraising"
                target="_blank"
                className="dropdown_nav"
              >
                Donate
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://forms.gle/vp6ATFmfQVDgJRuA6"
                target="_blank"
                className="dropdown_nav"
              >
                Volunteer Interest Form
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/intern_application">
                  Intern Application
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} id="link" to="/donors_and_sponsors">
              Donors and Sponsors
            </Nav.Link>

            <NavDropdown title="Newsletter and Blogs" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Nav.Link as={Link} to="/newsletter">
                    Newsletter
                  </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);
