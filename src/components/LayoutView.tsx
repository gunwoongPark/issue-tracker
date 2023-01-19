import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import InputView from "./InputView";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Link to="/">HOME</Link>}

      <InputView />
      {props.children}
    </>
  );
};

export default LayoutView;
