import { Text } from "dripsy";
import React from "react";

// import { Text } from "../text/Text";
// import { useButtonContext } from "./useButtonContext";

/** Defines expected props for this component */
type Props = object & React.ComponentProps<typeof Text>;

// const DripsyLabelText = createThemedComponent(Text, {
//   themeKey: "buttonLabel",
//   defaultVariants: ["common", "primary"],
// });

/** The label of the button component */
export const ButtonLabel = ({ ...props }: Props) => {
  // const buttonContext = useButtonContext();
  // const { theme }: any = useDripsyTheme();
  return <Text {...props} />;
};
