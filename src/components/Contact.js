import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2>Let's Connect!</h2>
        <div>
          <p>
            Got a question, looking to network, or want to work together on
            something? Feel free to reach out! I'm always looking for
            opportunities to expand upon my skill set and would love to chat
            about any projects I can help with!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
