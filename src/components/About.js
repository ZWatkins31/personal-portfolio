import React from "react";
import { Container } from "react-bootstrap";
import { motion, useScroll, useInView } from "framer-motion";
import {
  fadeIn,
  EaseInRight,
  EaseInLeft,
  ScaleUp,
  RotateIn,
  Blinds,
  InViewSlideUp,
} from "../utilities/animations";

const About = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about">
      <Container>
        <RotateIn>
          <h2>About Me</h2>
        </RotateIn>
        <InViewSlideUp>
          <p>
            Hi again! Thanks for scrolling this far! I am a Software Engineer
            with 6+ years of experience as a Mechanical Engineer. My journey
            into Software Engineering began in 2021 when I started teaching
            myself to how to code. To expand and gain a deeper understanding of
            key concepts in the subject I completed Thinkful's Software
            Engineering program in November 2022.
          </p>
          <p>
            When I'm not coding, I'm spending time with my family. And whether
            it's hiking, biking, skiing, or just going on a stroll, I'm always
            looking to explore the outdoors!
          </p>
        </InViewSlideUp>
      </Container>
    </section>
  );
};

export default About;
