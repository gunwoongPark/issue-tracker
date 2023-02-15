import {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "theme/theme";
import { ThemeContextValueType } from "types/theme";
import { getTheme } from "util/getTheme";

export const themeContext = createContext<ThemeContextValueType>(null);

const CustomThemeProvider = (props: PropsWithChildren<unknown>) => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "DARK");
      setTheme(darkTheme);
    } else {
      localStorage.setItem("theme", "LIGHT");
      setTheme(lightTheme);
    }
  };

  const value: ThemeContextValueType = useMemo(
    () => ({
      theme,
      toggle: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
    }),
    [theme],
  );

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
