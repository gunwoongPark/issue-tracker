import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";
import { isNil } from "lodash";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled, { css, useTheme } from "styled-components";

import NoneSearchRepoView from "../components/search/NoneSearchRepoView";
import PlzReloadView from "../components/search/PlzReloadView";
import SearchRepoItemSkeletonView from "../components/search/SearchRepoItemSkeletonView";
import SearchRepoItemView from "../components/search/SearchRepoItemView";
import ValidationFailedView from "../components/search/ValidationFailedView";
import useSearch from "../hooks/react-query/useSearch";
import type {
  OrderType,
  SearchRepoRes,
  SortType,
} from "../lib/api/search/schema";
import { queryKeys } from "../react-query/queryKeys";
import { isBlank } from "../util/lodash";

const SearchPage = () => {
  // theme
  const theme = useTheme();

  // queryClient
  const queryClient = useQueryClient();

  // searchParams
  const [searchParams, setSearchParams] = useSearchParams();

  // query string
  // search repo name
  const searchRepoName = searchParams.get("q");
  // page
  const page = Number(searchParams.get("page")) || 1;
  // order
  const order = useMemo(() => {
    const order = searchParams.get("order");

    if (order === "desc" || order === "asc") {
      return order;
    }

    return "desc";
  }, [searchParams]);
  // sort
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

  // search repository data fetching
  const { searchRepoList, isLoading, isFetching, error } = useSearch(
    searchRepoName ?? "",
    page,
    order as OrderType,
    sort as SortType,
  );

  const [isReload, setIsReload] = useState<boolean>(false);
  const [isValidationFailed, setIsValidationFailed] = useState<boolean>(false);

  // 페이지 이동시 스크롤 최 상단으로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);

  // error handling
  useEffect(() => {
    if (isNil(error)) {
      setIsReload(false);
      setIsValidationFailed(false);
    }

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        setIsReload(true);
      } else if (error.response?.status === 422) {
        setIsValidationFailed(true);
      }
    }
  }, [error]);

  // 페이지 변경시
  const onClickPageButton = useCallback(
    (addPageValue: number) => {
      if (addPageValue > 0) {
        const prefetchData = queryClient.getQueryData([
          queryKeys.search,
          searchRepoName,
          page + addPageValue,
          order,
          sort,
        ]) as SearchRepoRes | undefined;

        if (isBlank(prefetchData?.items)) {
          toast.warn("마지막 페이지입니다.");
          return;
        }
      } else if (page === 1) {
        toast.warn("첫 페이지입니다.");
        return;
      }

      searchParams.set("page", String(page + addPageValue));
      searchParams.set("order", order);
      searchParams.set("sort", sort);
      setSearchParams(searchParams);
    },
    [
      order,
      page,
      queryClient,
      searchParams,
      searchRepoName,
      setSearchParams,
      sort,
    ],
  );

  // order 변경시
  const onChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      searchParams.set("page", String(page));
      searchParams.set("order", e.target.value);
      searchParams.set("sort", sort);
      setSearchParams(searchParams);
    },
    [page, searchParams, setSearchParams, sort],
  );

  // sort 변경시
  const onChangeSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      searchParams.set("page", String(page));
      searchParams.set("order", order);
      searchParams.set("sort", e.target.value);
      setSearchParams(searchParams);
    },
    [order, page, searchParams, setSearchParams],
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
                {/* component: skeleton ui */}
                <Skeleton wrapper={SearchRepoItemSkeletonView} count={15} />
              </ul>
            );
          }

          if (isReload) {
            // component: 잦은 fetching => 403 에러
            return <PlzReloadView />;
          }

          if (isValidationFailed) {
            // component: 422 에러
            return <ValidationFailedView />;
          }

          if (isBlank(searchRepoList)) {
            // component: 검색시 repository가 없을 때
            return <NoneSearchRepoView />;
          }

          return (
            <ul>
              {searchRepoList.map((repo) => (
                // component: repository item
                <SearchRepoItemView
                  key={`search-repo-list-item-${repo.id}`}
                  repo={repo}
                />
              ))}
            </ul>
          );
        })()}

        {(isNil(error) && isBlank(searchRepoList)) || isReload || (
          <div className="button-container">
            <button onClick={() => onClickPageButton(-1)}>
              <BiLeftArrowCircle size={34} color={theme.iconColor} />
            </button>

            {isValidationFailed || (
              <button onClick={() => onClickPageButton(1)}>
                <BiRightArrowCircle size={34} color={theme.iconColor} />
              </button>
            )}
          </div>
        )}
      </S.Container>
    </>
  );
};

export default SearchPage;

const S = {
  Container: styled.div`
    .filter-container {
      @media (max-width: 1319px) {
        margin: 40px 20px 0;
      }

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
        background-color: ${({ theme }) => theme.insideColor};
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
      margin: 30px 0 30px;

      @media (max-width: 1319px) {
        margin: 30px 20px;
      }

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
