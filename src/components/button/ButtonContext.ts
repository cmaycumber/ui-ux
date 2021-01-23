import type { TempPressableStateCallbackType } from "@types";
import { createContext } from "react";

// Create a context that can be used by the other components
export const ButtonContext = createContext<TempPressableStateCallbackType>({
  pressed: false,
  hovered: false,
  focused: false,
});
