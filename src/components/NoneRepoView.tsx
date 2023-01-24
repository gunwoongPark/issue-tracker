import styled from "styled-components";
import GhostImage from "../assets/ghost.svg";

const NoneRepoView = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>일치하는 검색 결과가 없습니다.</span>
    </S.Container>
  );
};

export default NoneRepoView;

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
  `,
};
