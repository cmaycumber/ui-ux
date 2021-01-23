import { Platform } from "react-native";

export const baseFonts = {
  sans:
    'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
  mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
};

export const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: baseFonts.sans,
  monospace: baseFonts.mono,
};

export const fontSizes = Platform.select({
  web: {
    xs: "0.8125rem",
    sm: ".9375rem",
    md: "1rem",
    lg: "1.067rem",
    xl: "1.215rem",
    "2xl": "1.383rem",
    "3xl": "2rem",
    "4xl": "3rem",
    "5xl": "4rem",
    "6xl": "6rem",
  },
  default: {},
});

export const baseFontWeights = {
  hairline: "100",
  thin: "200",
  light: "300",
  normal: "300",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.medium,
};

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export const baseLineHeights = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
};
