import React from "react";
import resume from "../assets/static/resume.pdf";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const SideBars = () => {
  return (
    <div>
      <div className="sidebar-left">
        <div className="sb-social-icons">
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
        </div>
        <div className="vert-line"></div>
      </div>

      <div className="sidebar-right">
        <div className="vert-line"></div>
        <a href="mailto:zwatkins31@gmail.com">zwatkins31@gmail.com</a>
      </div>
    </div>
  );
};

export default SideBars;
