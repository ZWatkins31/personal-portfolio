import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from "react-router-hash-link";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Github />
              </a>
              <a href="#">
                <FileEarmarkPersonFill />
              </a>
            </div>
            {/* <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
