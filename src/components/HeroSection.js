import React from "react";
// import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <h1 className="hero-title">
      {`Hi! My name is `}
      <span className="gradient-text-color-main">Zach.</span>
      <br />
      I'm a full stack developer.
    </h1>
  );
};

export default HeroSection;
