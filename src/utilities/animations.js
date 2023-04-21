import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export const staggerChildren = {
  animate: {
    transition: {
      // delayChildren: 0.4,
      staggerChildren: 0.25,
    },
  },
};

export const staggerFromAbove = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "linear",
      duration: 1,
    },
  },
};

export const slideUp = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "linear",
      duration: 1,
      delay: 1,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 3,
      delay: 1.5,
    },
  },
};

export const wordAnimation = {
  initial: {
    y: 250,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.075, 0.82, 0.165, 1],
      duration: 2,
    },
  },
};

export const EaseInRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
      }}
    >
      {children}
    </div>
  );
};

export const EaseInLeft = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.75s",
      }}
    >
      {children}
    </div>
  );
};

export const Blinds = ({ children }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1.5, delay: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      {children}
    </motion.div>
  );
};

export const ScaleUp = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </div>
  );
};

export const RotateIn = ({ children }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={
        isInView ? { scale: [1, 2, 1], rotate: [0, 360], opacity: 1 } : false
      }
      transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      {children}
    </motion.div>
  );
};

export const InViewSlideUp = ({ children }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      {children}
    </motion.div>
  );
};
