import { ChangeEvent, createContext, PropsWithChildren, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import { ThemeContextValueType } from "../types/theme";
import { getTheme } from "../util/getTheme";

export const themeContext = createContext<ThemeContextValueType>(null);

const CustomThemeProvider = (props: PropsWithChildren<Record<never, any>>) => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("hi");
    if (e.target.checked) {
      localStorage.setItem("theme", "DARK");
      setTheme(darkTheme);
    } else {
      localStorage.setItem("theme", "LIGHT");
      setTheme(lightTheme);
    }
  };

  const value: ThemeContextValueType = {
    theme,
    toggle: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
