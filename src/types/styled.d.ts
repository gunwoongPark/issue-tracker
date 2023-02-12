import "styled-components";

import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeType;
    mainColor: string;
    backgroundColor: string;
    dividerColor: string;
    scrollbarColor: string;
    textColor1: string;
    insideColor: string;
    iconColor: string;
    skeletonBaseColor: string;
    skeletonHighlightColor: string;
    selectTextColor: string;
    issueItemColor: string;
    issueItemTextColor: string;
    paginationIndexColor: string;
    paginationCurrentIndexColor: string;
  }
}
