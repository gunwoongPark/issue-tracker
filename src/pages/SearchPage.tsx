import axios from "axios";
import { isNil } from "lodash";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css, useTheme } from "styled-components";
import RepoItemView from "../components/RepoItemView";
import useSearch from "../hooks/react-query/useSearch";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RepoItemSkeletonView from "../components/RepoItemSkeletonView";
import { useQueryClient } from "react-query";
import { queryKeys } from "../react-query/queryKeys";
import useToastMessage from "../hooks/custom/useToastMessage";
import ToastMessageView from "../components/ToastMessageView";
import { OrderType, SortType } from "../lib/api/search/schema";

const SearchPage = () => {
  // theme
  const theme = useTheme();

  // queryClient
  const queryClient = useQueryClient();

  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRepoName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;
  const order = useMemo(() => {
    const order = searchParams.get("order");

    if (order === "desc" || order === "asc") {
      return order;
    }

    return "desc";
  }, [searchParams]);
  const sort = useMemo(() => {
    const sort = searchParams.get("sort");

    if (
      sort === "updated" ||
      sort === "forks" ||
      sort === "stars" ||
      sort === "help-wanted-issues" ||
      sort === "best-match"
    ) {
      return sort;
    }

    return "best-match";
  }, [searchParams]);

  const { searchRepoList, isLoading, isFetching, error } = useSearch(
    searchRepoName ?? "",
    page,
    order as OrderType,
    sort as SortType
  );

  const [isReloadButton, setIsReloadButton] = useState<boolean>(false);
  const [toastMessageValue, setToastMessageValue] = useState<string>("");
  const { isToastMessage, setIsToastMessage } = useToastMessage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);

  useEffect(() => {
    if (isNil(error)) {
      setIsReloadButton(false);
    }

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        setIsReloadButton(true);
      }
    }
  }, [error]);

  const onClickPageButton = useCallback(
    (addPageValue: number) => {
      if (addPageValue > 0) {
        if (
          isNil(
            queryClient.getQueryData([
              queryKeys.search,
              searchRepoName,
              page + addPageValue,
              order,
              sort,
            ])
          )
        ) {
          setToastMessageValue("마지막 페이지입니다.");
          setIsToastMessage(true);
          return;
        }
      } else {
        if (page === 1) {
          setToastMessageValue("첫 페이지입니다.");
          setIsToastMessage(true);
          return;
        }
      }

      searchParams.set("page", String(page + addPageValue));
      searchParams.set("order", order);
      searchParams.set("sort", sort);
      setSearchParams(searchParams);
    },
    [
      page,
      queryClient,
      searchParams,
      searchRepoName,
      setIsToastMessage,
      setSearchParams,
      order,
      sort,
    ]
  );

  // order 변경
  const onChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      searchParams.set("page", String(page));
      searchParams.set("order", e.target.value);
      searchParams.set("sort", sort);
      setSearchParams(searchParams);
    },
    [page, searchParams, setSearchParams, sort]
  );

  // sort 변경
  const onChangeSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      searchParams.set("page", String(page));
      searchParams.set("order", order);
      searchParams.set("sort", e.target.value);
      setSearchParams(searchParams);
    },
    [order, page, searchParams, setSearchParams]
  );

  return (
    <>
      <S.Container>
        <div className="filter-container">
          <select value={order as string} onChange={(e) => onChangeOrder(e)}>
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </select>

          <select value={sort as string} onChange={(e) => onChangeSort(e)}>
            <option value="best-match">best match</option>
            <option value="updated">updated</option>
            <option value="stars">stars</option>
            <option value="forks">forks</option>
            <option value="help-wanted-issues">help wanted issues</option>
          </select>
        </div>

        {(() => {
          if (isLoading || isFetching) {
            return (
              <ul>
                <Skeleton wrapper={RepoItemSkeletonView} count={15} />
              </ul>
            );
          }

          if (isReloadButton) {
            return (
              <>
                <p>please reload</p>
                <button onClick={() => window.location.reload()}>RELOAD</button>
              </>
            );
          }

          return (
            <ul>
              {searchRepoList.map((repo) => (
                <RepoItemView
                  key={`search-repo-list-item-${repo.id}`}
                  repo={repo}
                />
              ))}
            </ul>
          );
        })()}

        <div className="button-container">
          <button onClick={() => onClickPageButton(-1)}>
            <BiLeftArrowCircle size={34} color={theme.arrowIconColor} />
          </button>

          <button onClick={() => onClickPageButton(1)}>
            <BiRightArrowCircle size={34} color={theme.arrowIconColor} />
          </button>
        </div>
      </S.Container>

      {isToastMessage && <ToastMessageView message={toastMessageValue} />}
    </>
  );
};

export default SearchPage;

const S = {
  Container: styled.div`
    .filter-container {
      margin-top: 40px;
      display: flex;

      @media (max-width: 480px) {
        flex-direction: column;
      }

      select {
        ${({ theme }) =>
          theme.mode === "LIGHT"
            ? css`
                border: 1px solid #dedede;
              `
            : css`
                border: none;
              `}
        width: 169px;
        height: 32px;
        background-color: ${({ theme }) => theme.selectBackgroundColor};
        color: ${({ theme }) => theme.selectTextColor};
        border-radius: 6px;
        font-size: 16px;
        padding: 0 14px;

        @media (max-width: 480px) {
          &:not(:first-child) {
            margin-top: 8px;
          }
        }

        @media (min-width: 481px) {
          &:not(:first-child) {
            margin-left: 8px;
          }
        }
      }
    }

    ul {
      margin-top: 14px;
    }

    .button-container {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      button {
        background: transparent;
        cursor: pointer;
        border: none;
      }
    }
  `,
};
