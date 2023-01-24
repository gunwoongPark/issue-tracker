import { PropsWithChildren } from "react";
import HeaderView from "./HeaderView";
// import { Link, useLocation } from "react-router-dom";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  // location
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/" && <Link to="/">HOME</Link>} */}

      <HeaderView />

      {props.children}
    </>
  );
};

export default LayoutView;
