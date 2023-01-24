import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeType;
    mainColor: string;
    backgroundColor: string;
    dividerColor: string;

    subTextColor: string;
    cardBackgroundColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    iconColor: string;
    arrowIconColor: string;

    skeletonBaseColor: string;
    skeletonHighlightColor: string;
    selectBackgroundColor: string;
    selectTextColor: string;
    issueItemColor: string;
    issueItemSubTextColor: string;
    paginationIndexColor: string;
    paginationCurrentIndexColor: string;
  }
}
