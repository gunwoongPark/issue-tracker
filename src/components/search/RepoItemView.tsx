import { isNil } from "lodash";
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import type { Repository } from "../../lib/api/search/schema";
import type { BookmarkListType } from "../../types/bookmark";
import { isNotBlank, isNotNil } from "../../util/lodash";
import { BsBookmarkCheckFill, BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import { BiAlarm } from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import { HiOutlineScale } from "react-icons/hi";
import ReactTimeago from "react-timeago";
import useToastMessage from "../../hooks/custom/useToastMessage";
import ToastMessageView from "../common/ToastMessageView";

const RepoItemView = (props: { repo: Repository }) => {
  // theme
  const theme = useTheme();

  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const { isToastMessage, setIsToastMessage } = useToastMessage();

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
          // TODO : 커스텀 모달로 연동
          setIsToastMessage(true);
          return;
        }

        // 중복 데이터 존재
        if (
          isNotNil(
            bookmarkList.find((bookmark) => bookmark.id === props.repo.id),
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

          <div className="update-container">
            <BiAlarm size={24} color={theme.iconColor} />

            <span>
              <ReactTimeago date={props.repo.updated_at} />
            </span>
          </div>
        </div>
      </S.Container>

      {isToastMessage && (
        <ToastMessageView message="등록 가능한 최대 레포지토리 수를 초과했습니다." />
      )}
    </>
  );
};

export default memo(RepoItemView);

const S = {
  Container: styled.li`
    width: 100%;

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
        color: ${({ theme }) => theme.mainTextColor};
      }
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
        flex-wrap: wrap;

        @media (max-width: 767px) {
          flex-direction: column;
        }

        div {
          display: flex;
          align-items: center;

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
          align-items: flex-end;
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
