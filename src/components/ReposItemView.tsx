import { isNil } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import type { RepoSearchResultItem } from "../lib/api/search/schema";
import { isBlank, isNotNil } from "../util/lodash";

const ReposItemView = (props: { repos: RepoSearchResultItem }) => {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const bookmarkList: { id: number; owner: string; name: string }[] =
      JSON.parse(data);

    if (
      isNotNil(bookmarkList.find((bookmark) => bookmark.id === props.repos.id))
    ) {
      setIsBookmark(true);
    }
  }, [props.repos.id]);

  const onChangeBookmark = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const data = localStorage.getItem("bookmarkList");

      if (isNil(data)) {
        localStorage.setItem(
          "bookmarkList",
          JSON.stringify([
            {
              id: props.repos.id,
              owner: props.repos.owner?.login ?? "",
              reposName: props.repos.name,
            },
          ])
        );

        setIsBookmark(true);
        return;
      }

      const bookmarkList: { id: number; owner: string; reposName: string }[] =
        JSON.parse(data);

      // 최대 북마크 수 초과
      if (bookmarkList.length === 4) {
        // TODO : 커스텀 모달로 연동
        alert("더 이상 북마크를 추가할 수 없습니다.");
        return;
      }

      // 중복 데이터 존재
      if (
        isNotNil(
          bookmarkList.find((bookmark) => bookmark.id === props.repos.id)
        )
      ) {
        alert("이미 추가된 레포지토리입니다.");
        return;
      }

      localStorage.setItem(
        "bookmarkList",
        JSON.stringify([
          ...bookmarkList,
          {
            id: props.repos.id,
            owner: props.repos.owner?.login ?? "",
            reposName: props.repos.name,
          },
        ])
      );
      setIsBookmark(true);
    } else {
      const bookmarkList: { id: number; owner: string; name: string }[] =
        JSON.parse(localStorage.getItem("bookmarkList") as string);

      const filteredBookmarkList = bookmarkList.filter(
        (bookmark) => bookmark.id !== props.repos.id
      );

      // 모든 북마크 해제
      if (isBlank(filteredBookmarkList)) {
        localStorage.removeItem("bookmarkList");
      }

      localStorage.setItem(
        "bookmarkList",
        JSON.stringify(filteredBookmarkList)
      );
      setIsBookmark(false);
    }
  };

  return (
    <li>
      <span>{props.repos.full_name}</span>
      {props.repos.visibility === "public" && (
        <input
          type="checkbox"
          checked={isBookmark}
          onChange={(e) => onChangeBookmark(e)}
        />
      )}
    </li>
  );
};

export default ReposItemView;
