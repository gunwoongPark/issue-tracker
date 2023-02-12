import GhostImage from "assets/ghost.svg";
import styled from "styled-components";

const NoneSearchRepoView = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>일치하는 검색 결과가 없습니다.</span>
    </S.Container>
  );
};

export default NoneSearchRepoView;

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
      margin-top: 43px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.selectTextColor};
    }
  `,
};
