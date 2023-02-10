import { isNil } from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BookmarkListType } from "../../types/bookmark";

const useBookmark = (setIsToastMessage: Dispatch<SetStateAction<boolean>>) => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]);

  // 북마크 목록 초기화
  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const localStorageBookmarkList: BookmarkListType = JSON.parse(data);
    setBookmarkList(localStorageBookmarkList);
  }, []);

  const deleteBookmarkRepo = (deleteBookmarkId: number) => {
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string,
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== deleteBookmarkId,
    );

    setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));

    setIsToastMessage(true);
  };

  return { bookmarkList, deleteBookmarkRepo };
};

export default useBookmark;
