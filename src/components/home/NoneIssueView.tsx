import styled, { useTheme } from "styled-components";
import { BsEmojiSmile } from "react-icons/bs";

const NoneIssueView = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <BsEmojiSmile size={48} color={theme.mainColor} />
      <span>이슈가 없습니다 :)</span>
    </S.Container>
  );
};

export default NoneIssueView;

const S = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin-top: 32px;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: ${({ theme }) => theme.textColor1};
    }
  `,
};
