import { isNil } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BookmarkRepoItemView from "../components/home/BookmarkRepoItemView";
import NoneBookmarkItemView from "../components/home/NoneBookmarkItemView";
import type { BookmarkListType } from "../types/bookmark";

const HomePage = () => {
  // state
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]);

  // setting bookmark list
  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const localStorageBookmarkList: BookmarkListType = JSON.parse(data);
    setBookmarkList(localStorageBookmarkList);
  }, []);

  // 북마크 repository 삭제시
  const deleteBookmarkRepo = (deleteBookmarkId: number) => {
    const bookmarkList: BookmarkListType = JSON.parse(
      localStorage.getItem("bookmarkList") as string,
    );

    const filteredBookmarkList = bookmarkList.filter(
      (bookmark) => bookmark.id !== deleteBookmarkId,
    );

    setBookmarkList(filteredBookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(filteredBookmarkList));
  };

  return (
    <S.Container>
      {bookmarkList.map((bookmark) => (
        // component: 북마크된 repository
        <BookmarkRepoItemView
          key={`bookmark-list-item-${bookmark.id}`}
          bookmark={bookmark}
          deleteBookmarkRepo={deleteBookmarkRepo}
        />
      ))}
      {Array(4 - bookmarkList.length)
        .fill("")
        .map((_, index) => (
          // component: 북마크된 repository가 없을 때
          <NoneBookmarkItemView key={`bookmark-list-item-fallback-${index}`} />
        ))}
    </S.Container>
  );
};

export default HomePage;

const S = {
  Container: styled.ul`
    margin-top: 60px;
    margin-bottom: 30px;
    @media (min-width: 1320px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
    }
    @media (max-width: 1319px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
};
