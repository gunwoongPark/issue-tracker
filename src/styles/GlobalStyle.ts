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

  body::-webkit-scrollbar{
    width:18px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarColor};

    border-radius: 16px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }
`;
