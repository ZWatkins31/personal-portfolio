export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
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
      ease: [0.6, 0.01, 0.05, 0.95],
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
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.5,
    },
  },
};

export const slideRight = {
  initial: {
    x: -100,
  },
  animate: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.75,
    },
  },
};

export const slideLeft = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.75,
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
    },
  },
};
