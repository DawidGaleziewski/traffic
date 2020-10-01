import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavMain.scss";
import { ReactComponent as EmpikLogo } from "../../assets/empik-logo.svg";

/**
 * Main navigation for the app
 */
const NavMain = () => {
  return (
    <Navbar className="main-nav" variant="dark" expand="lg">
      <Navbar.Toggle
        className="main-nav__toggle-button"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Brand className="main-nav__logo" href="/">
        T-raffic
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="main-nav__link" href="https://www.empik.com/">
            Strona główna
          </Nav.Link>
          <Nav.Link className="main-nav__link" href="#link">
            Kontakt
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMain;
