import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section id="hero">
      <Container>
        <Fade duration={1000} delay={1000}>
          <h1 className="hero-title">
            {`Hi! I'm `}
            <span className="gradient-text-color-main">Zach.</span>
            <br />
            {`I'm a Full-Stack Developer / Software Engineer.`}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default HeroSection;
