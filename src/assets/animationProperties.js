export const pageAnimation = {
  variants: {
    initial: {
      scale: 0
    },
    in: {
      scale: 1
    },
    out: {
      scale: 0
    }
  },
  transition: {
    duration: 0.15,
    style: "spring",
    stiffness: 100
  }
};

export const popupAnimation = {
  variants: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  },
  transition: {
    duration: 2
  }
};

export const menuIconValues = {
  initial: {transform: "rotate(0deg) translate(0px, 0px)"},
  open: {
    top: { transform: "rotate(0deg) translate(4px, 12px)" },
    center: { transform: "rotate(0deg) translate(4px, 22px)" },
    bottom: { transform: "rotate(0deg) translate(4px, 32px)" }
  },
  closed: {
    top: { transform: "rotate(45deg) translate(20px, 12px)" },
    center: { transform: "rotate(-45deg) translate(-12px, 20px)" },
    bottom: { transform: "rotate(45deg) translate(20px, 12px)" }
  }
};
