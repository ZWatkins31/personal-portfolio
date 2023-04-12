import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerChildren, staggerFromAbove } from "../animations";

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
    <nav className="nav-bar">
      <motion.div
        className="nav-links"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.a variants={staggerFromAbove} href="#">
          ABOUT
        </motion.a>
        <motion.a variants={staggerFromAbove} href="#">
          SKILLS
        </motion.a>
        <motion.a variants={staggerFromAbove} href="#">
          PROJECTS
        </motion.a>
        <motion.a variants={staggerFromAbove} href="#">
          CONNECT
        </motion.a>
      </motion.div>
      <div className="burger" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className={menu_class}>
        <div className="menu-links">
          <a href="#">ABOUT</a>
          <a href="#">SKILLS</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONNECT</a>
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
