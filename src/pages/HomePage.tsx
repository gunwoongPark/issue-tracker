import { isNil } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BookmarkRepoItemView from "../components/home/BookmarkRepoItemView";
import NoneBookmarkItemView from "../components/home/NoneBookmarkItemView";
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
    <S.Container>
      {bookmarkList.map((bookmark) => (
        <BookmarkRepoItemView
          key={`bookmark-list-item-${bookmark.id}`}
          bookmark={bookmark}
          setBookmarkList={setBookmarkList}
        />
      ))}
      {Array(4 - bookmarkList.length)
        .fill("")
        .map((_, index) => (
          <NoneBookmarkItemView key={index} />
        ))}
    </S.Container>
  );
};

export default HomePage;

const S = {
  Container: styled.ul`
    margin-top: 60px;
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
