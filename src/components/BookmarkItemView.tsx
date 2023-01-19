import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import type { BookmarkListType, BookmarkType } from "../types/bookmark";

const BookmarkItemView = (props: {
  bookmark: BookmarkType;
  setBookmarkList: Dispatch<SetStateAction<BookmarkListType>>;
}) => {
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
      <Link
        to={`/issues/${props.bookmark.owner}/${props.bookmark.repoName}?page=1`}
      >
        <span>
          {props.bookmark.owner}/{props.bookmark.repoName}
        </span>
      </Link>
      <button onClick={() => onClickDeleteButton()}>DELETE</button>
    </li>
  );
};

export default BookmarkItemView;
