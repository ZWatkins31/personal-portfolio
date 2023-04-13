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
