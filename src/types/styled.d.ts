import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeType;
    backgroundColor: string;
    color: string;
  }
}
