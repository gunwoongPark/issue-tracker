import { isNil } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ToastMessageView from "../components/common/ToastMessageView";
import BookmarkRepoItemView from "../components/home/BookmarkRepoItemView";
import NoneBookmarkItemView from "../components/home/NoneBookmarkItemView";
import useToastMessage from "../hooks/custom/useToastMessage";
import type { BookmarkListType } from "../types/bookmark";

const HomePage = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkListType>([]); // 북마크 목록
  const { isToastMessage, setIsToastMessage } = useToastMessage();

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

    setIsToastMessage(true);
  };

  return (
    <>
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
            <NoneBookmarkItemView
              key={`bookmark-list-item-fallback-${index}`}
            />
          ))}
      </S.Container>

      {/* component: 토스트 메시지 */}
      {isToastMessage && <ToastMessageView message="북마크가 제거됐습니다." />}
    </>
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
