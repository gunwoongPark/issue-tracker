import { PropsWithChildren } from "react";
import ReactDom from "react-dom";

const Portal = (props: PropsWithChildren) => {
  const element =
    typeof window !== "undefined" && document.querySelector("#portal");
  return element && props.children
    ? ReactDom.createPortal(props.children, element)
    : null;
};

export default Portal;
