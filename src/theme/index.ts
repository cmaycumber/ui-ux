import * as button from "./components/button";
import { cards } from "./components/cards";
import { textInputs } from "./components/inputs";
import { layout } from "./components/layout";
import { text } from "./components/text";
import { colors } from "./foundations/colors";
import { radii } from "./foundations/radii";
import { shadows } from "./foundations/shadows";
import { sizes } from "./foundations/sizes";
import { space } from "./foundations/space";
import {
  fontSizes,
  fonts,
  fontWeights,
  letterSpacings,
  lineHeights,
} from "./foundations/typography";

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  radii,
  text,
  layout,
  textInputs,
  cards,
  ...button,
};
