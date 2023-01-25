import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import HeaderView from "./HeaderView";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  const location = useLocation();

  const calcValidPage = () => {
    if (location.pathname === "/") {
      return true;
    }

    if (location.pathname === "/search") {
      return true;
    }

    return false;
  };

  return (
    <>
      {calcValidPage() && <HeaderView />}

      {props.children}
    </>
  );
};

export default LayoutView;
