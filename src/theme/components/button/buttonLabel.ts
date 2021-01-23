const buttonLabelVariants = {
  common: {
    cursor: `pointer`,
    fontSize: `100%`,
    lineHeight: `inherit`,
    borderRadius: "sm",
    width: "fit-content",
    userSelect: "none",
  },
  primary: {},
  secondary: {},
  tertiary: {},
  text: {},
  textSecondary: {},
  ghost: {},
};

const buttonLabelSizeVariants = {
  large: {},
  md: {},
  small: {},
};

export const buttonLabel = {
  ...buttonLabelVariants,
  ...buttonLabelSizeVariants,
};
