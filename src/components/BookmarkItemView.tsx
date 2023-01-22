import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
  memo,
} from "react";
import styled, { css, useTheme } from "styled-components";
import useIssues from "../hooks/react-query/useIssues";
import type { BookmarkListType, BookmarkType } from "../types/bookmark";
import IssueItemView from "./IssueItemView";
import { AiFillStar } from "react-icons/ai";
import PaginationView from "./PaginationView";

const PER_PAGE = 5;

const BookmarkItemView = (props: {
  bookmark: BookmarkType;
  setBookmarkList: Dispatch<SetStateAction<BookmarkListType>>;
}) => {
  // theme
  const theme = useTheme();

  const totalPage = useMemo(
    () => Math.ceil(props.bookmark.openIssuesCount / PER_PAGE),
    [props.bookmark.openIssuesCount]
  );
  const [page, setPage] = useState<number>(1);

  const { issueList, isLoading, isFetching } = useIssues({
    owner: props.bookmark.owner,
    repoName: props.bookmark.repoName,
    page,
  });

  const onClickDeleteButton = useCallback(() => {
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== props.bookmark.id
    );

    props.setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));
  }, [props]);

  return (
    <>
      <S.Container>
        <div className="title-container">
          <span className="repo-full-name">
            {props.bookmark.owner}/{props.bookmark.repoName}
          </span>
          <i className="delete-button" onClick={() => onClickDeleteButton()}>
            <AiFillStar size={24} color={theme.mainTextColor} />
          </i>
        </div>

        <div className="divider" />

        {isLoading || isFetching ? (
          <p>Loading...</p>
        ) : (
          <ul className="issue-list">
            {issueList.map((issue) => (
              <IssueItemView
                key={`repo-list-item-${issue.id}`}
                repoName={props.bookmark.repoName}
                issue={issue}
              />
            ))}
          </ul>
        )}

        {totalPage > 1 && (
          <PaginationView
            openIssuesCount={props.bookmark.openIssuesCount}
            page={page}
            setPage={setPage}
            totalPage={totalPage}
          />
        )}
      </S.Container>
    </>
  );
};

export default memo(BookmarkItemView);

const S = {
  Container: styled.li`
    display: flex;
    flex-direction: column;

    width: 650px;
    height: 347px;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 30px 20px 30px;

    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid ${({ theme }) => theme.dividerColor};
      `}

    .title-container {
      display: flex;
      justify-content: space-between;
      .repo-full-name {
        font-size: 21px;
        font-weight: 600;
        line-height: 31px;
        color: ${({ theme }) => theme.mainTextColor};
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
      height: 100%;
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
