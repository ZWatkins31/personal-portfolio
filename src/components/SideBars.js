import React from "react";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const SideBars = () => {
  return (
    <div>
      <div className="sidebar-left">
        <div className="sb-social-icons">
          <a href="#">
            <Linkedin size={25} />
          </a>
          <a href="#">
            <Github size={25} />
          </a>
          <a href="#">
            <FileEarmarkPersonFill size={25} />
          </a>
        </div>
        <div className="vert-line"></div>
      </div>

      <div className="sidebar-right">
        <div className="vert-line"></div>
        <a href="#">zwatkins31@gmail.com</a>
      </div>
    </div>
  );
};

export default SideBars;
