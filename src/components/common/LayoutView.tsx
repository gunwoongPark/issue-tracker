import { PropsWithChildren } from "react";
import HeaderView from "./HeaderView";

const LayoutView = (props: PropsWithChildren<Record<never, any>>) => {
  return (
    <>
      <HeaderView />

      {props.children}
    </>
  );
};

export default LayoutView;
