import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import logoImage from "../../assests/image/logo_image.svg";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="custom_navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logoImage} alt="logo" className="logo_image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="/#">About</Nav.Link>
              <Nav.Link href="/#">Contact</Nav.Link>
              <hr className="horizontal_line" />
              <label className="callnow_label">
                CALL NOW FOR A CONSULT
                <a className="random_number" href="tel:8665562570">
                  XXX.XXX.XXXX
                </a>
              </label>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
