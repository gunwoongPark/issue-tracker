import { isNil } from "lodash";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { BookmarkListType } from "types/bookmark";

import useMount from "./useMount";

const useBookmark = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]);

  // 북마크 목록 초기화
  useMount(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const localStorageBookmarkList: BookmarkListType = JSON.parse(data);
    setBookmarkList(localStorageBookmarkList);
  });

  const deleteBookmarkRepo = useCallback((deleteBookmarkId: number) => {
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string,
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== deleteBookmarkId,
    );

    setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));

    toast.success("북마크가 제거되었습니다.");
  }, []);

  return { bookmarkList, deleteBookmarkRepo };
};

export default useBookmark;
