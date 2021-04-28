import React from "react";
// import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo3.png";

const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} className="logo" width="50px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>

            <Nav.Link
              href="https://www.linkedin.com/in/ronald-vilorio/"
              target="#"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/RonaldVilorio" target="#">
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
