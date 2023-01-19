import { isNil } from "lodash";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputView from "../components/InputView";
import type { BookmarkListType } from "../types/bookmark";

const HomePage = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]);

  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const localStorageBookmarkList: BookmarkListType = JSON.parse(data);
    setBookmarkList(localStorageBookmarkList);
  }, []);

  return (
    <>
      <InputView />
      <ul>
        {bookmarkList.map((bookmark) => (
          <li key={`bookmark-list-item-${bookmark.id}`}>
            <Link to={`/issues/${bookmark.owner}/${bookmark.repoName}?page=1`}>
              {bookmark.owner}/{bookmark.repoName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
