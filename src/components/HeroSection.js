import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade duration={1000} delay={500}>
          <h1 className="hero-title">
            {`Hi! My name is `}
            <span className="gradient-text-color-main">Zach.</span>
            <br />
            {`I'm a Full-Stack Developer.`}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default HeroSection;
