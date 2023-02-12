import { isNil } from "lodash";
import { darkTheme, lightTheme } from "theme/theme";
import { ThemeType } from "types/theme";

export const getTheme = () => {
  const localStorageTheme: ThemeType | null = localStorage.getItem(
    "theme",
  ) as ThemeType | null;

  if (isNil(localStorageTheme)) {
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (osTheme) {
      return darkTheme;
    }
    return lightTheme;
  }

  if (localStorageTheme === "DARK") {
    return darkTheme;
  }
  return lightTheme;
};
