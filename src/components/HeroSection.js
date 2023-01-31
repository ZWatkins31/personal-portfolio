import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsMobile(true);
    }
  }, []);

  const handleClick = () => {
    if (isDesktop) {
      console.log("Desktop!");
    } else {
      console.log("Mobile!");
    }
  };

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade direction="up" distance="30px" duration={1000} delay={500}>
          <h1 className="hero-title">
            {`Hi! My name is `}
            <span className="gradient-text-color-main">Zach.</span>
            <br />
            {`I'm a full stack developer.`}
          </h1>
          <button onClick={handleClick}>Click Me!</button>
        </Fade>
      </Container>
    </section>
  );
};

export default HeroSection;
