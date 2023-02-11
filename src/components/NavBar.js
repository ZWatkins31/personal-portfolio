import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
// import { HashLink } from "react-router-hash-link";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const NavBar = () => {
  // State to determine what link we're on
  const [activeLink, setActiveLink] = useState("home");

  // State to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Function to toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav>
      <div className="nav-left">
        <div className="social-icons">
          <a href="#">
            <Linkedin size={30} />
          </a>
          <a href="#">
            <Github size={30} />
          </a>
          <a href="#">
            <FileEarmarkPersonFill size={30} />
          </a>
        </div>
        <div>
          <button className="nav-button">LET'S CONNECT!</button>
        </div>
      </div>
      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SKILLS</a>
        <a href="#">PROJECTS</a>
      </div>
      <div className="burger" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className={menu_class}>
        <div className="menu-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SKILLS</a>
          <a href="#">PROJECTS</a>
        </div>
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
