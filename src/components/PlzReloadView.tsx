import styled from "styled-components";
import GhostImage from "../assets/ghost.svg";

const PlzReloadView = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>Please reload</span>
      <button onClick={() => window.location.reload()}>Reload</button>
    </S.Container>
  );
};

export default PlzReloadView;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;

    img {
      width: 248px;
    }

    span {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.selectTextColor};
    }

    button {
      margin-top: 11px;
      width: 167px;
      height: 40px;
      border-radius: 2px;
      background: #d0dcfa;
      color: ${({ theme }) => theme.mainTextColor};
      font-size: 21px;
      border: none;
      cursor: pointer;
    }
  `,
};
