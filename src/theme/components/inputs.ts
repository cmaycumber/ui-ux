import { StyleSheet, Platform } from "react-native";

const commonTextInputStyles = {
  px: "sm",
  py: "md",
  fontSize: "md",
  borderColor: "border",
  borderStyle: "solid",
  borderRadius: "sm",
  backgroundColor: "transparent",
  outlineColor: "primary",
  outlineStyle: {
    opacity: 0.1,
  },
  outlineWidth: 0,
  borderWidth: Platform.select({
    web: 1,
    default: StyleSheet.hairlineWidth,
  }),
};

export const textInputs = {
  default: {
    ...commonTextInputStyles,
  },
  focused: {
    ...commonTextInputStyles,
    borderColor: "primary",
  },
  error: {
    borderColor: "danger",
  },
};
