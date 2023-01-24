import styled from "styled-components";
import GhostImage from "../../assets/ghost.svg";

const PlzReloadView = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>
        보조 요금 제한을 초과했습니다. 다시 시도하기 전에 잠시 기다려 주십시오.
      </span>
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
      color: ${({ theme }) => theme.mainColor};
      font-size: 21px;
      border: none;
      cursor: pointer;
    }
  `,
};
