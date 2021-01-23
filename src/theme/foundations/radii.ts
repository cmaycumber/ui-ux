import { Platform } from "react-native";

export const radii = Platform.select({
  default: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    full: 99999,
  },
});
