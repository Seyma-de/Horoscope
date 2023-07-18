import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./MyNavbar.scss";

const MyNavbar = () => {
  return (
    <Navbar className="ilk-nav" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://react-horoscope-app.netlify.app/static/media/logo.d6c42622bddf5a8e7575.png"
            alt=""
            width="100px"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">HOROSCOPE</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            DALIY
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            TAROT
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            ARTICLE
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            CONTACT
          </Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
