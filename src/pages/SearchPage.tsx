import axios from "axios";
import { isNil } from "lodash";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
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
import { OrderType } from "../lib/api/search/schema";

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

  const { searchRepoList, isLoading, isFetching, error } = useSearch(
    searchRepoName ?? "",
    page,
    order as OrderType
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
    ]
  );

  const onChangeOrder = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      searchParams.set("order", e.target.value);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <>
      <select value={order as string} onChange={(e) => onChangeOrder(e)}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
      <S.Container>
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
    ul {
      margin-top: 40px;
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
