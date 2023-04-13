import React from "react";
import resume from "../assets/static/resume.pdf";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import {
  slideUp,
  slideLeft,
  slideRight,
  fadeIn,
} from "../utilities/animations";

const SideBars = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="sidebar-left">
        <motion.div className="sb-social-icons" variants={fadeIn}>
          <a
            href="https://www.linkedin.com/in/zach-j-watkins"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin size={25} />
          </a>
          <a
            href="https://github.com/ZWatkins31"
            rel="noreferrer"
            target="_blank"
          >
            <Github size={25} />
          </a>
          <a href={resume} rel="noreferrer" target="_blank">
            <FileEarmarkPersonFill size={25} />
          </a>
        </motion.div>
        <motion.div className="vert-line" variants={slideUp}></motion.div>
      </div>

      <div className="sidebar-right">
        <motion.div className="vert-line" variants={slideUp}></motion.div>
        <motion.a href="mailto:zwatkins31@gmail.com" variants={fadeIn}>
          zwatkins31@gmail.com
        </motion.a>
      </div>
    </motion.div>
  );
};

export default SideBars;
