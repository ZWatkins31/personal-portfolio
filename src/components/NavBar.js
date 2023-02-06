import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
// import { HashLink } from "react-router-hash-link";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const NavBar = () => {
  // State to determine what link we're on
  const [activeLink, setActiveLink] = useState("home");

  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Navbar.Brand className="navbar-logo" href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <h5 className="nav-link-text">Home</h5>
            </Nav.Link>
            <Nav.Link href="#about">
              <h5 className="nav-link-text">About</h5>
            </Nav.Link>
            <Nav.Link href="#skills">
              <h5 className="nav-link-text">Skills</h5>
            </Nav.Link>
            <Nav.Link href="#projects">
              <h5 className="nav-link-text">Projects</h5>
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="#">
                <Linkedin color="background" size={25} />
              </a>
              <a href="#">
                <Github color="background" size={25} />
              </a>
              <a href="#">
                <FileEarmarkPersonFill color="background" size={25} />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("Clicked")}>
              <span>Let's Connect!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
