import { useContext } from "react";

import { ButtonContext } from "./ButtonContext";

export const useButtonContext = () => {
  const buttonContext = useContext(ButtonContext);
  if (!buttonContext)
    throw new Error("Button sub component is being used outside of Button");
  return buttonContext;
};
