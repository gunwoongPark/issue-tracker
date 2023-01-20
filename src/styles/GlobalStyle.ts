import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: Pretendard;
  
    max-width: 1320px;
    margin:0 auto;

    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
