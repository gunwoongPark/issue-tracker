import { isNil } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import type { Repository } from "../lib/api/search/schema";
import type { BookmarkListType } from "../types/bookmark";
import { isNotNil } from "../util/lodash";

const RepoItemView = (props: { repo: Repository }) => {
  const [isBookmark, setIsBookmark] = useState<boolean>(false);

  // TODO : 데이터 할당 최적화
  useEffect(() => {
    const data = localStorage.getItem("bookmarkList");

    if (isNil(data)) {
      return;
    }

    const bookmarkList: BookmarkListType = JSON.parse(data);

    if (
      isNotNil(bookmarkList.find((bookmark) => bookmark.id === props.repo.id))
    ) {
      setIsBookmark(true);
    }
  }, [props.repo.id]);

  const onChangeBookmark = (e: ChangeEvent<HTMLInputElement>) => {
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
            },
          ])
        );

        setIsBookmark(true);
        return;
      }

      const bookmarkList: BookmarkListType = JSON.parse(data);

      // 최대 북마크 수 초과
      if (bookmarkList.length === 4) {
        // TODO : 커스텀 모달로 연동
        alert("더 이상 북마크를 추가할 수 없습니다.");
        return;
      }

      // 중복 데이터 존재
      if (
        isNotNil(bookmarkList.find((bookmark) => bookmark.id === props.repo.id))
      ) {
        alert("이미 추가된 레포지토리입니다.");
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
          },
        ])
      );
      setIsBookmark(true);
    } else {
      const bookmarkList: BookmarkListType = JSON.parse(
        localStorage.getItem("bookmarkList") as string
      );

      const filteredBookmarkList = bookmarkList.filter(
        (bookmark) => bookmark.id !== props.repo.id
      );

      localStorage.setItem(
        "bookmarkList",
        JSON.stringify(filteredBookmarkList)
      );
      setIsBookmark(false);
    }
  };

  return (
    <li>
      <span>{props.repo.full_name}</span>
      {props.repo.visibility === "public" && (
        <input
          type="checkbox"
          checked={isBookmark}
          onChange={(e) => onChangeBookmark(e)}
        />
      )}
    </li>
  );
};

export default RepoItemView;
