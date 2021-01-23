import { StyleSheet } from "react-native";

const commonCardStyles = {
  bg: "backgroundLight",
  borderRadius: "md",
};

export const cards = {
  primary: {
    ...commonCardStyles,
  },
  modal: {
    ...commonCardStyles,
    backgroundColor: "backgroundLight",
  },
  flat: {
    shadowOffset: undefined,
    borderStyle: "border",
    borderColor: "border",
    borderWidth: StyleSheet.hairlineWidth,
  },
};
