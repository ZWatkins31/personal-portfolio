import React from "react";
import { Linkedin, Github, FileEarmarkPersonFill } from "react-bootstrap-icons";

const SideBars = () => {
  return (
    <div>
      <div className="sidebar-left">
        <a href="#">
          <Linkedin size={30} />
        </a>
        <a href="#">
          <Github size={30} />
        </a>
        <a href="#">
          <FileEarmarkPersonFill size={30} />
        </a>
        <div className="vert-line"></div>
      </div>

      <div className="sidebar-right">
        <div className="vert-line"></div>
      </div>
    </div>
  );
};

export default SideBars;
