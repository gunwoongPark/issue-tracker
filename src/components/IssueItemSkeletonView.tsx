import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const IssueItemSkeletonView = () => {
  return (
    <S.Container>
      <Skeleton className="first" />
      <div className="second">
        <div className="user-container">
          <Skeleton className="user-image" circle />
          <Skeleton className="user-name" />
        </div>
        <Skeleton className="time-ago" />
      </div>
    </S.Container>
  );
};

export default IssueItemSkeletonView;

const S = {
  Container: styled.li`
    .first {
      width: 70%;
      line-height: 28px;
    }
    .second {
      display: flex;
      justify-content: space-between;
      .user-container {
        display: flex;
        align-items: center;
        .user-image {
          width: 24px;
          height: 24px;
        }
        .user-name {
        }
      }
    }
  `,
};
