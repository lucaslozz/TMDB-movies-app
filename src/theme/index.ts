import { ViewStyle } from "react-native";

import { createTheme } from "@shopify/restyle";

export const palette = {
  grayBlack: "#000000",
  grayWhite: "#FFFFFF",

  charcoal: "#242A32",
  darkSlate: "#3A3F47",
  graphite: "#67686D",
  skyBlue: "#0296E5",

  gray100: "#EEEEEE",
  gray200: "#EBEBEF",
  gray300: "#92929D",

  greenSuccess: "#4ABC86",

  redError: "#EA3838",
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.skyBlue,
    primaryContrast: palette.grayWhite,
    primaryLight: palette.gray100,
    primaryMedium: palette.gray200,
    primaryDark: palette.gray300,

    buttonPrimary: palette.skyBlue,

    background: palette.charcoal,
    backgroundContrast: palette.darkSlate,

    disabled: palette.graphite,
    grayBlack: palette.grayBlack,

    success: palette.greenSuccess,
    error: palette.redError,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },

  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
