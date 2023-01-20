import { isNil } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import type { Repository } from "../lib/api/search/schema";
import type { BookmarkListType } from "../types/bookmark";
import { isNotBlank, isNotNil } from "../util/lodash";
import { BsBookmarkCheckFill, BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
// import { BiAlarm } from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import { HiOutlineScale } from "react-icons/hi";

const RepoItemView = (props: { repo: Repository }) => {
  // theme
  const theme = useTheme();

  const [isBookmark, setIsBookmark] = useState<boolean>(false);

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
      {props.repo.visibility === "public" && (
        <>
          <label
            className="bookmark-icon"
            htmlFor={`bookmark-${props.repo.id}`}
          >
            {isBookmark ? (
              <BsBookmarkCheckFill size={34} color="#4D6AB6" />
            ) : (
              <BsBookmarkCheck size={34} color="#4D6AB6" />
            )}
          </label>
          <input
            id={`bookmark-${props.repo.id}`}
            className="bookmark"
            type="checkbox"
            checked={isBookmark}
            onChange={(e) => onChangeBookmark(e)}
          />
        </>
      )}

      <span className="repo-full-name">{props.repo.full_name}</span>

      {isNotBlank(props.repo.topics) && (
        <div className="topic-container">
          {props.repo.topics.map((topic, idx) => (
            <div className="topic" key={idx}>
              <span className="topic-name">{topic}</span>
            </div>
          ))}
        </div>
      )}

      <p className="repo-description">{props.repo.description}</p>

      <div className="divider" />

      <div className="bottom-container">
        <div className="repo-information">
          <div className="star-container">
            <AiOutlineStar size={24} color={theme.iconColor} />
            <span>{props.repo.stargazers_count.toLocaleString("en")}</span>
          </div>

          <div className="language-container">
            <TbLanguage size={24} color={theme.iconColor} />
            <span>{props.repo.language}</span>
          </div>

          {props.repo.license && (
            <div className="license-container">
              <HiOutlineScale size={24} color={theme.iconColor} />
              <span>{props.repo.license.name}</span>
            </div>
          )}

          <div className="fork-container">
            <TbGitFork size={24} color={theme.iconColor} />
            <span>{props.repo.forks_count.toLocaleString("en")}</span>
          </div>
        </div>

        {/* <div className="update-container">
          <BiAlarm size={24} color={theme.iconColor} />
          <span>updated at {props.repo.updated_at}</span>
        </div> */}
      </div>
    </S.Container>
  );
};

export default RepoItemView;

const S = {
  Container: styled.li`
    width: 100%;
    // only light
    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid #dedede;
      `}

    background-color: ${({ theme }) => theme.cardBackgroundColor};
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    &:not(:first-child) {
      margin-top: 20px;
    }

    .bookmark-icon {
      position: absolute;
      right: 30px;
      top: 30px;
      cursor: pointer;
    }
    .bookmark {
      display: none;
    }

    .repo-full-name {
      font-size: 21px;
      font-weight: 600;
      line-height: 31px;
      color: ${({ theme }) => theme.mainTextColor};
    }

    .topic-container {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      .topic {
        border-radius: 31px;
        border: 1px solid ${({ theme }) => theme.mainTextColor};
        margin-top: 5px;
        &:not(:first-child) {
          margin-left: 5px;
        }

        .topic-name {
          color: ${({ theme }) => theme.mainTextColor};
          font-size: 16px;
          line-height: 27px;
          font-weight: 400;
          padding: 0 16px;
        }
      }
    }

    .repo-description {
      margin-top: 16px;
      color: ${({ theme }) => theme.subTextColor};
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }

    .divider {
      margin-top: 14px;
      border: 1px solid ${({ theme }) => theme.dividerColor};
    }

    .bottom-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .repo-information {
        display: flex;

        div {
          display: flex;
          align-items: center;
          &:not(:first-child) {
            margin-left: 10px;
          }

          span {
            margin-left: 3px;
            font-size: 14px;
            line-height: 24px;
            font-weight: 400;
            color: ${({ theme }) => theme.iconColor};
          }
        }
      }

      .update-container {
        display: flex;
        align-items: center;
        span {
          margin-left: 3px;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
          color: ${({ theme }) => theme.iconColor};
        }
      }
    }
  `,
};
