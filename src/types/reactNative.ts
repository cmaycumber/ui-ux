import type { PressableStateCallbackType } from "react-native";

// TODO: Replace this once RN merges in PR with proper types
export type TempPressableStateCallbackType = PressableStateCallbackType & {
  hovered: boolean;
  focused: boolean;
};
