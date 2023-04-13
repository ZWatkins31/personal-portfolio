import { motion } from "framer-motion";
import { wordAnimation, staggerChildren } from "../utilities/animations";

const SpanWords = ({ string }) => {
  const renderElement = (word, index) => {
    if (index == 2) {
      return (
        <>
          <motion.span
            variants={wordAnimation}
            key={index}
            className="inline-block title-word gradient-text-color-main overflow-hidden"
          >
            {word + "\u00A0"}
          </motion.span>
          <br />
        </>
      );
    } else {
      return (
        <motion.span
          variants={wordAnimation}
          key={index}
          className="title-word overflow-hidden"
        >
          {word + "\u00A0"}
        </motion.span>
      );
    }
  };

  return (
    <motion.span initial="initial" animate="animate" variants={staggerChildren}>
      {string.split(" ").map((word, idx) => renderElement(word, idx))}
    </motion.span>
  );
};

export default SpanWords;
