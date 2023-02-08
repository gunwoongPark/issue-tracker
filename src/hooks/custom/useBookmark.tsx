import { isNil } from "lodash";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Repository } from "../../lib/api/search/schema";

import { BookmarkListType } from "../../types/bookmark";

const useBookmarak = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]);

  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const localStorageBookmarkList: BookmarkListType = JSON.parse(data);
    setBookmarkList(localStorageBookmarkList);
  }, []);

  const toggleBookmark = (e: ChangeEvent<HTMLInputElement>, clickedRepo:Repository ) => {
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        const data = localStorage.getItem("bookmarkList");

        if (isNil(data)) {
          localStorage.setItem(
            "bookmarkList",
            JSON.stringify([
              {
                id: props.repo.id,
                owner: props.repo.owner?.login ?? "",
                repoName: props.repo.name,
                openIssuesCount: props.repo.open_issues_count,
              },
            ]),
          );

          setIsBookmark(true);
          return;
        }

        const bookmarkList: BookmarkListType = JSON.parse(data);

        // 최대 북마크 수 초과
        if (bookmarkList.length === 4) {
          setIsToastMessage(true);
          return;
        }

        localStorage.setItem(
          "bookmarkList",
          JSON.stringify([
            ...bookmarkList,
            {
              id: props.repo.id,
              owner: props.repo.owner?.login ?? "",
              repoName: props.repo.name,
              openIssuesCount: props.repo.open_issues_count,
            },
          ]),
        );

        setIsBookmark(true);
      } else {
        const bookmarkList: BookmarkListType = JSON.parse(
          localStorage.getItem("bookmarkList") as string,
        );

        const filteredBookmarkList = bookmarkList.filter(
          (bookmark) => bookmark.id !== props.repo.id,
        );

        localStorage.setItem(
          "bookmarkList",
          JSON.stringify(filteredBookmarkList),
        );
        setIsBookmark(false);
      }
  };

  const deleteBookmarkRepo = (deleteBookmarkId: number) => {
    // eslint-disable-next-line no-shadow
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string,
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== deleteBookmarkId,
    );

    setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));
  };

  return { bookmarkList, deleteBookmarkRepo };
};

export default useBookmarak;
