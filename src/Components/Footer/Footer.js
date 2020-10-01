import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.scss';

/**
 * Footer - uses region list to render dynacmically list with regions and their promotions
 * @param {*} param0
 */
const Footer = ({ regionsList, setRegionState }) => {
  return (
    <footer className="footer">
      <Navbar
        className="footer__nav"
        collapseOnSelect
        expanded
        expand="lg"
        variant="dark"
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav__link" href="https://empik.com">
              Strona domowa
            </Nav.Link>
            <Nav.Link
              className="nav__link"
              href="https://www.empik.com/o-firmie"
            >
              O firmie
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
};

export default Footer;
