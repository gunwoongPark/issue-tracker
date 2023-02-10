import "react-loading-skeleton/dist/skeleton.css";

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import styled, { css, useTheme } from "styled-components";

import useIssues from "../../hooks/react-query/useIssues";
import type { BookmarkType } from "../../types/bookmark";
import IssueItemSkeletonView from "./IssueItemSkeletonView";
import IssueItemView from "./IssueItemView";
import NoneIssueView from "./NoneIssueView";
import PaginationView from "./PaginationView";

const PER_PAGE = 3;

const BookmarkRepoItemView = (props: {
  bookmark: BookmarkType;
  deleteBookmarkRepo: (deleteBookmarkId: number) => void;
}) => {
  // theme
  const theme = useTheme();

  // pagination 전체 페이지 수
  const totalPage = Math.ceil(props.bookmark.openIssuesCount / PER_PAGE);

  // pagination 현재 페이지
  const [page, setPage] = useState<number>(1);

  // issue data fetching
  const { issueList, isLoading, isFetching } = useIssues({
    owner: props.bookmark.owner,
    repoName: props.bookmark.repoName,
    page,
  });

  // 페이지 변경
  const changePage = (page: number) => {
    setPage(page);
  };

  const onClickDeleteRepo = () => {
    props.deleteBookmarkRepo(props.bookmark.id);
    toast.success("북마크가 제거되었습니다.");
  };

  return (
    <>
      <S.Container>
        <div className="body-container">
          <div className="title-container">
            <span className="repo-full-name">
              {props.bookmark.owner}/{props.bookmark.repoName}
            </span>
            <i className="delete-button" onClick={() => onClickDeleteRepo()}>
              <AiFillStar size={24} color={theme.mainColor} />
            </i>
          </div>

          <div className="divider" />

          {(() => {
            if (isLoading || isFetching) {
              return (
                <ul>
                  {/* component: skeleton ui */}
                  <Skeleton wrapper={IssueItemSkeletonView} count={3} />
                </ul>
              );
            }

            if (!totalPage) {
              // component: repository에 이슈가 없을 때
              return <NoneIssueView />;
            }

            return (
              <ul className="issue-list">
                {issueList.map((issue) => (
                  // component: issue item
                  <IssueItemView
                    key={`repo-list-item-${issue.id}`}
                    repoName={props.bookmark.repoName}
                    issue={issue}
                  />
                ))}
              </ul>
            );
          })()}
        </div>

        {totalPage > 1 && (
          // component: pagination
          <PaginationView
            totalPage={totalPage}
            page={page}
            changePage={changePage}
          />
        )}
      </S.Container>
    </>
  );
};

export default BookmarkRepoItemView;

const S = {
  Container: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 650px;
    height: 456px;
    background-color: ${({ theme }) => theme.insideColor};
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 30px 20px 30px;

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

    .body-container {
      height: 100%;
    }

    .title-container {
      display: flex;
      justify-content: space-between;
      .repo-full-name {
        font-size: 21px;
        font-weight: 600;
        line-height: 31px;
        color: ${({ theme }) => theme.mainColor};
      }
      .delete-button {
        cursor: pointer;
      }
    }

    .divider {
      margin-top: 10px;
      border: 1px solid ${({ theme }) => theme.dividerColor};
    }

    .issue-list {
      height: 316px;
      overflow-y: auto;
    }

    .button-container {
      display: flex;
      justify-content: space-between;
      button {
        background: transparent;
        cursor: pointer;
        border: none;
      }
    }
  `,
};
