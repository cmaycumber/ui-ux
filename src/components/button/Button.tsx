import type { TempPressableStateCallbackType } from "@types";
import { createThemedComponent, useDripsyTheme } from "dripsy";
import React, { ComponentProps, Fragment } from "react";
import { Pressable } from "react-native";

import { ButtonContext } from "./ButtonContext";
import { ButtonLabel } from "./ButtonLabel";

const DripsyButton = createThemedComponent(Pressable, {
  themeKey: "button",
  defaultVariants: ["common", "primary", "lg"],
});

type Props = {
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
} & ComponentProps<typeof DripsyButton>;

export function Button(props: Props) {
  const { children, loading, disabled, ...pressableProps } = props;

  const dripsyTheme = useDripsyTheme();
  console.log(dripsyTheme);

  return (
    <DripsyButton disabled={disabled ?? loading} {...pressableProps}>
      {({ pressed, hovered, focused }: TempPressableStateCallbackType) => {
        return (
          <ButtonContext.Provider
            value={{
              pressed,
              hovered,
              focused,
              ...props,
            }}
          >
            <Fragment>
              {typeof children === "string" ? (
                <ButtonLabel>{children}</ButtonLabel>
              ) : (
                children
              )}
              {/* <View sx={{ position: "absolute" }}>{loading && <ActivityIndicator />}</View> */}
            </Fragment>
          </ButtonContext.Provider>
        );
      }}
    </DripsyButton>
  );
}

Button.Label = ButtonLabel;
// Button.Icon = ButtonIcon;
