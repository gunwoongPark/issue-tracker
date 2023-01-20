import { isNil } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import type { Repository } from "../lib/api/search/schema";
import type { BookmarkListType } from "../types/bookmark";
import { isNotNil } from "../util/lodash";

const RepoItemView = (props: { repo: Repository }) => {
  useEffect(() => {
    console.log(props.repo);
  }, [props.repo]);

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
    <S.Container>
      <span className="repo-full-name">{props.repo.full_name}</span>

      <div className="topic-container">
        {props.repo.topics.map((topic, idx) => (
          <div className="topic" key={idx}>
            <span>{topic}</span>
          </div>
        ))}
      </div>

      <p>{props.repo.description}</p>
      <p>updated at {props.repo.updated_at}</p>
      <p>star count {props.repo.stargazers_count}</p>
      <p>fork count {props.repo.forks_count}</p>
      <p>license {props.repo.license ? props.repo.license.name : ""}</p>
      <p>language {props.repo.language}</p>

      {props.repo.visibility === "public" && (
        <input
          type="checkbox"
          checked={isBookmark}
          onChange={(e) => onChangeBookmark(e)}
        />
      )}
    </S.Container>
  );
};

export default RepoItemView;

const S = {
  Container: styled.li`
    width: 100%;
    height: 219px;
    border: 1px solid #dedede;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    &:not(:first-child) {
      margin-top: 20px;
    }

    .repo-full-name {
      font-size: 21px;
      font-weight: 600;
      line-height: 31px;
      color: #4d6ab6;
    }

    .topic-container {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .topic {
        border-radius: 31px;
        border: 1px solid #4d6ab6;
        &:not(:first-child) {
          margin-left: 5px;
        }

        span {
          color: #4d6ab6;
          font-size: 16px;
          line-height: 27px;
          font-weight: 400;
          padding: 0 16px;
        }
      }
    }
  `,
};
