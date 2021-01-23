const buttonVariants = {
  common: {
    justifyContent: "center",
    alignItems: "center",
    cursor: `pointer`,
    fontSize: `100%`,
    lineHeight: `inherit`,
    borderRadius: "sm",
    width: "fit-content",
    userSelect: "none",
  },
  primary: {
    backgroundColor: `primary`,
  },
  secondary: {
    backgroundColor: "#E4E6EB",
  },
  tertiary: {
    backgroundColor: "blue10",
  },
  text: {
    backgroundColor: "transparent",
  },
  textSecondary: {
    backgroundColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
  },
};

const buttonSizeVariants = {
  lg: {
    p: "md",
  },
  md: {
    p: "sm",
  },
  sm: {
    p: "xs",
  },
};

const buttonShapeVariants = {
  round: {
    borderRadius: 9999,
  },
};

export const button = {
  ...buttonVariants,
  ...buttonSizeVariants,
  ...buttonShapeVariants,
};

// export type ButtonVariants = keyof typeof button;
// export type ButtonSizeVariants = keyof typeof buttonSizeVariants;
// export type ButtonBaseVariants = keyof typeof buttonVariants;
// export type ButtonShapeVariants = keyof typeof buttonShapeVariants;
