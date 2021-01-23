const commonTextStyles = {
  fontSize: "md",
  lineHeight: "snug",
  my: 0,
  color: "text",
};

const commonHeadingStyles = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "bold",
  my: 0,
};

export const text = {
  a: {
    ...commonTextStyles,
    color: "primary",
  },
  h1: {
    ...commonTextStyles,
    ...commonHeadingStyles,
    fontSize: "2xl",
  },
  h2: {
    ...commonTextStyles,
    ...commonHeadingStyles,
    fontSize: "xl",
  },
  h3: {
    ...commonTextStyles,
    ...commonHeadingStyles,
    fontSize: "lg",
  },
  h4: {
    ...commonTextStyles,
    ...commonHeadingStyles,
    fontSize: "md",
  },
  h5: {
    ...commonTextStyles,
    ...commonHeadingStyles,
    fontSize: "sm",
  },
  p: {
    ...commonTextStyles,
  },
  bold: {
    ...commonTextStyles,
    fontWeight: "bold",
  },
};
