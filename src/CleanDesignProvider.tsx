// @ts-ignore
import { merge } from "@theme-ui/core";
import type { Optional } from "@types";
import { DripsyProvider } from "dripsy";
import React, { ComponentProps } from "react";

import { theme as defaultTheme } from "./theme";

type Props = Optional<ComponentProps<typeof DripsyProvider>, "theme">;

export const CleanDesignProvider = ({ theme, ...props }: Props) => {
  return <DripsyProvider theme={merge(defaultTheme, theme)} {...props} />;
};
