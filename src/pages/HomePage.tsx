import { isNil } from "lodash";
import { useEffect, useState } from "react";
import BookmarkItemView from "../components/BookmarkItemView";
import InputView from "../components/InputView";
import type { BookmarkListType } from "../types/bookmark";

const HomePage = () => {
  // state
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
          <BookmarkItemView
            key={`bookmark-list-item-${bookmark.id}`}
            bookmark={bookmark}
            setBookmarkList={setBookmarkList}
          />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
