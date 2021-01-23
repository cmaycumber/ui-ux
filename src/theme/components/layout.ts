import { Platform } from "react-native";

export const layout = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
  container: {
    maxWidth: "container",
  },
  header: {
    flexDirection: "row",
    display: "flex",
    height: ["headerHeightMobile", null, "headerHeightDesktop"],
    alignItems: "center",
  },
  nav: {},
  main: {},
  section: {},
  hr: {
    bg: "border",
    height: 1,
    my: 0,
    ...(Platform.OS === "web" && {
      border: 1,
    }),
  },
};
