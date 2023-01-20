import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: Pretendard;
  
    width: 1320px;
    margin:0 auto;
  }
`;
