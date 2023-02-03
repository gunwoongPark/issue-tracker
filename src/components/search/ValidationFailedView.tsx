import styled from "styled-components";

import GhostImage from "../../assets/ghost.svg";

const ValidationFailedView = () => {
  return (
    <S.Container>
      <img src={GhostImage} alt="유령 이미지" />
      <span>유효성 검사에 실패했거나 엔드포인트가 스팸 처리되었습니다.</span>
    </S.Container>
  );
};

export default ValidationFailedView;

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
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.selectTextColor};
    }
  `,
};
