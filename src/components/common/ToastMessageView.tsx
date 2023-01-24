import { memo } from "react";
import styled from "styled-components";
import Portal from "./Portal";

const ToastMessageView = (props: { message: string }) => {
  return (
    <Portal>
      <S.Container>{props.message}</S.Container>
    </Portal>
  );
};

export default memo(ToastMessageView);

const S = {
  Container: styled.div`
    position: fixed;
    bottom: 59px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.mainTextColor};
    width: 632px;

    @media (max-width: 632px) {
      width: 350px;
      font-size: 14px;
      height: 38px;
    }

    height: 51px;
    border-radius: 51px;
    opacity: 0.9;
    color: #ffffff;
    font-size: 18px;
  `,
};
