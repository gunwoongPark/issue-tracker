import { isNil } from "lodash";
import { useEffect, useState } from "react";
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
            {bookmark.owner}/{bookmark.repoName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
