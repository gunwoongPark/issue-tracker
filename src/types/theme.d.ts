import type { ChangeEvent } from "react";
import type { DefaultTheme } from "styled-components";

export type ThemeType = "DARK" | "LIGHT";

export type ThemeContextValueType = {
  theme: DefaultTheme;
  toggle: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;
