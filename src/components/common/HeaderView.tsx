import { useContext } from "react";
import styled, { css } from "styled-components";
import { themeContext } from "../../context/CustomThemeProvider";
import InputView from "./InputView";
import { BiMoon, BiSun, BiHomeAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const HeaderView = () => {
  // context
  const context = useContext(themeContext);
  // location
  const location = useLocation();

  // 홈인지 여부
  const isHomePage = location.pathname === "/";

  return (
    <S.Container isHomePage={isHomePage}>
      <div className="button-container">
        {!isHomePage && (
          <Link to="/" className="button home-button">
            <BiHomeAlt size={24} color="#ffffff" />
          </Link>
        )}

        <label className="button" htmlFor="theme-toggle-button">
          {context?.theme.mode === "DARK" ? (
            <BiSun size={24} color="#ffffff" />
          ) : (
            <BiMoon size={24} color="#ffffff" />
          )}
        </label>
        <input
          id="theme-toggle-button"
          type="checkbox"
          checked={context?.theme.mode === "DARK"}
          onChange={context?.toggle}
        />
      </div>

      <InputView />
    </S.Container>
  );
};

export default HeaderView;

const S = {
  Container: styled.div<{ isHomePage: boolean }>`
    @media (max-width: 1319px) {
      margin: 0 20px;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .button-container {
      margin-top: 9px;
      display: flex;
      width: 100%;

      ${({ isHomePage }) =>
        isHomePage
          ? css`
              justify-content: flex-end;
            `
          : css`
              justify-content: space-between;
            `}

      .button {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.mainColor};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      #theme-toggle-button {
        display: none;
      }
    }
  `,
};
