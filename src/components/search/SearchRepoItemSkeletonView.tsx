import Skeleton from "react-loading-skeleton";
import styled, { css, useTheme } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const SearchRepoItemSkeletonView = () => {
  // theme
  const theme = useTheme();

  return (
    <S.Container>
      <Skeleton
        className="repo-full-name"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />
      <Skeleton
        className="topics"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />
      <Skeleton
        className="repo-description"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />
      <div className="divider" />
      <Skeleton
        className="repo-information"
        baseColor={theme.skeletonBaseColor}
        highlightColor={theme.skeletonHighlightColor}
      />
    </S.Container>
  );
};

export default SearchRepoItemSkeletonView;

const S = {
  Container: styled.li`
    width: 100%;
    background-color: ${({ theme }) => theme.insideColor};
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid #dedede;
      `}

    .repo-full-name {
      line-height: 31px;
      width: 50%;
    }

    .topics {
      line-height: 27px;
      width: 50%;
      margin-top: 10px;
    }

    .repo-description {
      margin-top: 16px;
      line-height: 28px;
      width: 100%;
    }

    .divider {
      margin-top: 14px;
      border: 1px solid ${({ theme }) => theme.dividerColor};
    }

    .repo-information {
      margin-top: 10px;
      line-height: 24px;
      width: 50%;
    }
  `,
};
