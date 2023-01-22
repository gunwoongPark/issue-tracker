import { isNil } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BookmarkItemView from "../components/BookmarkItemView";
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
      <S.Container>
        {bookmarkList.map((bookmark) => (
          <BookmarkItemView
            key={`bookmark-list-item-${bookmark.id}`}
            bookmark={bookmark}
            setBookmarkList={setBookmarkList}
          />
        ))}
      </S.Container>
    </>
  );
};

export default HomePage;

const S = {
  Container: styled.ul`
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  `,
};
