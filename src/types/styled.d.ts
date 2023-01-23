import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeType;
    backgroundColor: string;
    mainTextColor: string;
    subTextColor: string;
    dividerColor: string;
    cardBackgroundColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    iconColor: string;
    arrowIconColor: string;
    skeletonBaseColor: string;
    skeletonHighlightColor: string;
  }
}
