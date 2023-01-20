import { PropsWithChildren, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { themeContext } from "../context/CustomThemeProvider";
import InputView from "./InputView";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  // location
  const location = useLocation();

  // context
  const context = useContext(themeContext);

  return (
    <>
      {location.pathname !== "/" && <Link to="/">HOME</Link>}

      <InputView />

      <input
        type="checkbox"
        checked={context?.theme.mode === "DARK"}
        onChange={context?.toggle}
      />
      {props.children}
    </>
  );
};

export default LayoutView;
