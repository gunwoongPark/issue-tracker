import Portal from "./Portal";
import styled from "styled-components";

const ModalView = ({
  message,
  closeButtonClick,
  confirmButtonClick,
}: {
  message: string;
  closeButtonClick: () => void;
  confirmButtonClick?: () => void;
}) => {
  return (
    <Portal>
      <div></div>
    </Portal>
  );
};

export default ModalView;

const S = {
  Container: styled.div``,
};
