import { Link } from "react-router-dom";
import styled from "styled-components";
import GhostImage from "../assets/ghost.svg";

const NotFoundPage = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>Error 404</span>
      <Link to="/">홈으로</Link>
    </S.Container>
  );
};

export default NotFoundPage;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
      width: 360px;
    }

    span {
      margin-top: 43px;
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.selectTextColor};
    }

    a {
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      margin-top: 11px;
      width: 167px;
      height: 40px;
      border-radius: 2px;
      background: #d0dcfa;
      color: ${({ theme }) => theme.mainColor};
      font-size: 21px;
    }
  `,
};
