import BookmarkRepoItemView from "components/home/BookmarkRepoItemView";
import NoneBookmarkItemView from "components/home/NoneBookmarkItemView";
import useBookmark from "hooks/custom/useBookmark";
import styled from "styled-components";

const HomePage = () => {
  const { bookmarkList, deleteBookmarkRepo } = useBookmark();

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
