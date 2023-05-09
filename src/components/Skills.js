import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";
import react from "../assets/images/react.svg";
import javascript from "../assets/images/javascript.svg";
import html from "../assets/images/html.png";
import css3 from "../assets/images/css3.svg";
import nodejs from "../assets/images/nodejs.svg";
import express from "../assets/images/express.svg";
import postresql from "../assets/images/postgresql.svg";
import api from "../assets/images/api.png";

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <h2>SKILLS</h2>
        <div className="toolkit">
          <div>
            <img src={react} alt="react-icon" />
            React
          </div>
          <div>
            <img src={javascript} />
            JavaScript
          </div>
          <div>
            <img src={html} />
            HTML5
          </div>
          <div>
            <img src={css3} />
            CSS3
          </div>
          <div>
            <img src={nodejs} />
            Node.js
          </div>
          <div>
            <img src={express} />
            Express
          </div>
          <div>
            <img src={postresql} />
            PostgreSQL
          </div>
          <div>
            <img src={api} />
            RESTful API
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
