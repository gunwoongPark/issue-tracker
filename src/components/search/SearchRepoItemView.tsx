import { isNil } from "lodash";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { HiOutlineScale } from "react-icons/hi";
import { TbGitFork, TbLanguage } from "react-icons/tb";
import ReactTimeago from "react-timeago";
import styled, { css, useTheme } from "styled-components";

import useToastMessage from "../../hooks/custom/useToastMessage";
import type { Repository } from "../../lib/api/search/schema";
import type { BookmarkListType } from "../../types/bookmark";
import { isNotBlank, isNotNil } from "../../util/lodash";
import ToastMessageView from "../common/ToastMessageView";

const SearchRepoItemView = (props: { repo: Repository }) => {
  // theme
  const theme = useTheme();

  const [isBookmark, setIsBookmark] = useState<boolean>(false); // 북마크 체크 여부
  const { isToastMessage, setIsToastMessage } = useToastMessage();

  // 북마크 체크 여부 초기화
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

  // 북마크 아이콘 클릭시
  const onChangeBookmark = useCallback(
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
    },
    [
      props.repo.id,
      props.repo.name,
      props.repo.open_issues_count,
      props.repo.owner?.login,
      setIsToastMessage,
    ],
  );

  return (
    <>
      <S.Container>
        <div className="title-container">
          <span className="repo-full-name">{props.repo.full_name}</span>
          {props.repo.visibility === "public" && (
            <>
              <label
                className="bookmark-icon"
                htmlFor={`bookmark-${props.repo.id}`}
              >
                {isBookmark ? (
                  <BsBookmarkCheckFill size={28} color="#4D6AB6" />
                ) : (
                  <BsBookmarkCheck size={28} color="#4D6AB6" />
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
        </div>

        {isNotBlank(props.repo.topics) && (
          <ul className="topic-container">
            {props.repo.topics.map((topic, idx) => (
              <li className="topic" key={idx}>
                <span className="topic-name">{topic}</span>
              </li>
            ))}
          </ul>
        )}

        <span className="repo-description">{props.repo.description}</span>

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

          <div className="update-container">
            <BiAlarm size={24} color={theme.iconColor} />

            <span>
              <ReactTimeago date={props.repo.updated_at} />
            </span>
          </div>
        </div>
      </S.Container>

      {isToastMessage && (
        // component: 토스트 메시지
        <ToastMessageView message="등록 가능한 최대 레포지토리 수를 초과했습니다." />
      )}
    </>
  );
};

export default SearchRepoItemView;

const S = {
  Container: styled.li`
    width: 100%;

    ${({ theme }) =>
      theme.mode === "LIGHT" &&
      css`
        border: 1px solid #dedede;
      `}

    background-color: ${({ theme }) => theme.insideColor};
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    &:not(:first-child) {
      margin-top: 20px;
    }

    .title-container {
      display: flex;
      justify-content: space-between;

      .bookmark-icon {
        cursor: pointer;
      }
      .bookmark {
        display: none;
      }

      .repo-full-name {
        font-size: 21px;
        font-weight: 600;
        line-height: 31px;
        color: ${({ theme }) => theme.mainColor};
      }
    }

    .topic-container {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      .topic {
        border-radius: 31px;
        border: 1px solid ${({ theme }) => theme.mainColor};
        margin-top: 5px;
        &:not(:first-child) {
          margin-left: 5px;
        }

        .topic-name {
          color: ${({ theme }) => theme.mainColor};
          font-size: 16px;
          line-height: 27px;
          font-weight: 400;
          padding: 0 16px;
        }
      }
    }

    .repo-description {
      display: inline-block;
      word-break: break-word;
      margin-top: 16px;
      color: ${({ theme }) => theme.textColor1};
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

      @media (max-width: 767px) {
        flex-direction: column;
      }

      .repo-information {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 767px) {
          flex-direction: column;
        }

        div {
          display: flex;
          align-items: flex-start;

          @media (min-width: 768px) {
            &:not(:first-child) {
              margin-left: 10px;
            }
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
        @media (max-width: 767px) {
          justify-content: flex-end;
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
  `,
};
