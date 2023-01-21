import Skeleton from "react-loading-skeleton";
import styled, { css } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const RepoItemSkeletonView = () => {
  return (
    <S.Container>
      <Skeleton className="repo-full-name" baseColor="#000" />
      <Skeleton className="topics" />
      <Skeleton className="repo-description" />
      <div className="divider" />
      <Skeleton className="repo-information" />
    </S.Container>
  );
};

export default RepoItemSkeletonView;

const S = {
  Container: styled.li`
    width: 100%;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
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
