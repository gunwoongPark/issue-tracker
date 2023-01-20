import { PropsWithChildren, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { themeContext } from "../context/CustomThemeProvider";
import InputView from "./InputView";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  // location
  const location = useLocation();

  // context
  const context = useContext(themeContext);

  return (
    <S.Container>
      {location.pathname !== "/" && <Link to="/">HOME</Link>}

      <InputView />

      <input
        type="checkbox"
        checked={context?.theme.mode === "DARK"}
        onChange={context?.toggle}
      />
      {props.children}
    </S.Container>
  );
};

export default LayoutView;

const S = {
  Container: styled.div``,
};
