import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <Container>
        <h2>About Me</h2>
        <div>
          <p>
            Hi there! My name is Zach and I enjoy building accessible,
            functional, and creative web pages and applications. Along with
            being full stack developer and software engineer, I also have a
            background in mechanical engineering.
          </p>
          <p>
            Passionate about learning and always looking pushing myself to pick
            up new skills, my journey into tech began in 2021 when I began
            teaching myself to how to code. Almost immediately, I knew this is
            what I wanted to do with my life and to further immerse myself in
            the subject I decided to enroll in Thinkful's Software Engineering
            Program where I quickly absorbed new concepts, while bringing
            ambitious ideas and a positive attitude to every challenge. I truly
            love the combination of creative and logical problem-solving skills
            I get to use when writing code and I love how there's always more to
            learn!
          </p>
          <p>
            Whether it's hiking, biking, skiing, or just going on a stroll, when
            I'm not coding you can typically find me exploring the outdoors.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
