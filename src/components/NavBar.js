import React from "react";
import { useState } from "react";
// import logo from "../assets/images/logo.png";
// import { HashLink } from "react-router-hash-link";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const NavBar = () => {
  // State to determine what link we're on
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav>
      <div className="logo-icon">
        <h4>The Nav</h4>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SKILLS</a>
        </li>
        <li>
          <a href="#">PROJECTS</a>
        </li>
      </ul>
      {/* <span className="navbar-text">
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
      </span> */}
    </nav>
  );
};

export default NavBar;
