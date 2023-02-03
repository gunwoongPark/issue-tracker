import { PropsWithChildren, useMemo } from "react";
import { useLocation } from "react-router-dom";

import HeaderView from "./HeaderView";

const LayoutView = (props: PropsWithChildren) => {
  const location = useLocation();

  const isValidPage = useMemo(() => {
    if (location.pathname === "/") {
      return true;
    }

    if (location.pathname === "/search") {
      return true;
    }

    return false;
  }, [location.pathname]);

  return (
    <>
      {isValidPage && <HeaderView />}

      {props.children}
    </>
  );
};

export default LayoutView;
