import { Dispatch, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import useIssues from "../hooks/react-query/useIssues";
import type { BookmarkListType, BookmarkType } from "../types/bookmark";
import IssueItemView from "./IssueItemView";

const BookmarkItemView = (props: {
  bookmark: BookmarkType;
  setBookmarkList: Dispatch<SetStateAction<BookmarkListType>>;
}) => {
  const [page, setPage] = useState<number>(1);

  const { issueList, isLoading, isFetching } = useIssues({
    owner: props.bookmark.owner,
    repoName: props.bookmark.repoName,
    page,
  });

  const onClickDeleteButton = () => {
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== props.bookmark.id
    );

    props.setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));
  };

  return (
    <S.Container>
      <p>
        {props.bookmark.owner}/{props.bookmark.repoName}
      </p>
      <button onClick={() => onClickDeleteButton()}>DELETE</button>
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {issueList.map((issue) => (
            <IssueItemView key={`repo-list-item-${issue.id}`} issue={issue} />
          ))}
        </ul>
      )}

      <button
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={issueList.length < 5}
      >
        Next
      </button>
    </S.Container>
  );
};

export default BookmarkItemView;

const S = {
  Container: styled.li`
    width: 650px;
    height: 347px;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    box-sizing: border-box;
    border-radius: 10px;

    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid ${({ theme }) => theme.dividerColor};
      `}
  `,
};
