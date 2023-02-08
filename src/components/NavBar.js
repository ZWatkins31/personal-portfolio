import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
// import { HashLink } from "react-router-hash-link";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const NavBar = () => {
  // State to determine what link we're on
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav>
      <div className="logo-icon">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#">HOME</a>

        <a href="#">ABOUT ME</a>

        <a href="#">SKILLS</a>

        <a href="#">PROJECTS</a>
      </div>
    </nav>
  );
};

export default NavBar;

/* <div className="social-icons">
          <a href="#">
            <Linkedin color="background" size={25} />
          </a>
          <a href="#">
            <Github color="background" size={25} />
          </a>
          <a href="#">
            <FileEarmarkPersonFill color="background" size={25} />
          </a>
        </div> */
