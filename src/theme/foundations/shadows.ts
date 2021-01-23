import { colors } from "./colors";

export const shadows = {
  md: {
    shadowColor: colors.shadow2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 1,
  },
  large: {
    shadowColor: colors.shadow2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  modal: {
    shadowColor: colors.shadow2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 32,
  },
};
