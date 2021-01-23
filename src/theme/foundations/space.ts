import { Platform } from "react-native";

export const space = Platform.select({
  web: {
    "2xs": ".125rem",
    xs: ".25rem",
    sm: ".5rem",
    md: "1rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
    "4xl": "8rem",
    "5xl": "16rem",
  },
  default: {
    none: 0,
    "2xs": 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 48,
    "2xl": 64,
    "3xl": 96,
    "4xl": 128,
    "5xl": 256,
  },
});
