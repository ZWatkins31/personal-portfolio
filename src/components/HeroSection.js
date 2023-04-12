import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { motion, useScroll } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero">
      <Container>
        <h1 className="hero-title">
          {`Hi! I'm `}
          <span className="gradient-text-color-main">Zach.</span>
          <br />
          {`I'm a Software Engineer.`}
        </h1>
      </Container>
    </section>
  );
};

const spanWords = (title) => {
  return <span>{title.split(" ")}</span>;
};

export default HeroSection;
