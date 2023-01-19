import { Dispatch, SetStateAction, useState } from "react";
import useIssues from "../hooks/react-query/useIssues";
import type { BookmarkListType, BookmarkType } from "../types/bookmark";
import IssueItemView from "./IssueItemView";

const BookmarkItemView2 = (props: {
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
    <li>
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

      <button onClick={() => setPage((prevPage) => prevPage - 1)}>Prev</button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
    </li>
  );
};

export default BookmarkItemView2;
