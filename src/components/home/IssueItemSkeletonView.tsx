import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled, { useTheme } from "styled-components";

const IssueItemSkeletonView = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <Skeleton
        className="head"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />
      <Skeleton
        className="label"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />

      <div className="bottom-container">
        <Skeleton
          className="user-image"
          circle
          inline
          baseColor={theme.skeletonBaseColor}
          highlightColor={theme.skeletonHighlightColor}
        />

        <Skeleton
          className="user-login"
          inline
          baseColor={theme.skeletonBaseColor}
          highlightColor={theme.skeletonHighlightColor}
        />
      </div>
    </S.Container>
  );
};

export default IssueItemSkeletonView;

const S = {
  Container: styled.li`
    margin-top: 10px;
    background-color: ${({ theme }) => theme.issueItemColor};
    border-radius: 6px;
    padding: 10px;

    .head {
      width: 70%;
      line-height: 26px;
    }

    .label {
      margin-top: 4px;
      width: 50%;
      line-height: 12px;
    }

    .bottom-container {
      margin-top: 4px;
      display: grid;
      grid-template-columns: 24px 1fr;
      align-items: center;
      .user-image {
        width: 24px;
        height: 24px;
      }

      .user-login {
        margin-left: 6px;
        font-size: 12px;
        width: 30%;
      }
    }
  `,
};
