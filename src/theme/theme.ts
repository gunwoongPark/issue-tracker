import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  mode: "DARK",
  backgroundColor: "#222222",
  mainTextColor: "#4D6AB6",
  subTextColor: "#DDDDDD",
  dividerColor: "#777777",
  cardBackgroundColor: "#363636",
  inputBackgroundColor: "#363636",
  inputTextColor: "#dddddd",
  iconColor: "#888888",
  arrowIconColor: "#AAAAAA",
  disabledArrowIconColor: "#666666",
};

export const lightTheme: DefaultTheme = {
  mode: "LIGHT",
  backgroundColor: "#FCFCFC",
  mainTextColor: "#4D6AB6",
  subTextColor: "#444444",
  dividerColor: "#DEDEDE",
  cardBackgroundColor: "#FFFFFF",
  inputBackgroundColor: "#FFFFFF",
  inputTextColor: "#444444",
  iconColor: "#666666",
  arrowIconColor: "#666666",
  disabledArrowIconColor: "#AAAAAA",
};
