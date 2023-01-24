import styled, { css } from "styled-components";
import FileQuestion from "../../assets/file-question.svg";

const NoneBookmarkItemView = () => {
  return (
    <S.Container>
      <img src={FileQuestion} alt="파일 아이콘" />
      <span>북마크 된 항목이 없습니다.</span>
    </S.Container>
  );
};

export default NoneBookmarkItemView;

const S = {
  Container: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 456px;
    background-color: ${({ theme }) => theme.insideColor};
    box-sizing: border-box;
    border-radius: 10px;

    @media (max-width: 1319px) {
      width: 100%;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }

    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid #dedede;
      `}

    img {
      width: 48px;
      height: 48px;
    }
    span {
      margin-top: 32px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.textColor1};
    }
  `,
};
