import React from "react";
import { Container } from "react-bootstrap";
import SpanWords from "./SpanWords";
import { motion, useScroll } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero">
      <Container>
        <h1 className="hero-title overflow-hidden">
          <SpanWords string="Hi! I'm Zach. I'm a Software Engineer." />
        </h1>
      </Container>
    </section>
  );
};

export default HeroSection;
