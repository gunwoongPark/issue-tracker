import { useContext } from "react";
import styled from "styled-components";
import { themeContext } from "../context/CustomThemeProvider";
import InputView from "./InputView";
import { BiMoon, BiSun } from "react-icons/bi";

const HeaderView = () => {
  // context
  const context = useContext(themeContext);

  return (
    <S.Container>
      <label htmlFor="theme-toggle-button">
        {context?.theme.mode === "DARK" ? (
          <BiSun size={24} color="#fff" />
        ) : (
          <BiMoon size={24} color="#fff" />
        )}
      </label>
      <input
        id="theme-toggle-button"
        type="checkbox"
        checked={context?.theme.mode === "DARK"}
        onChange={context?.toggle}
      />

      <InputView />
    </S.Container>
  );
};

export default HeaderView;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    label {
      margin-top: 9px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.mainTextColor};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    #theme-toggle-button {
      display: none;
    }
  `,
};
