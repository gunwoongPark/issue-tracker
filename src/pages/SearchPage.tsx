import axios from "axios";
import { isNil } from "lodash";
import { useEffect, useState } from "react";
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

const SearchPage = () => {
  // theme
  const theme = useTheme();

  // queryClient
  const queryClient = useQueryClient();

  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRepoName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

  const { searchRepoList, isLoading, isFetching, error } = useSearch(
    searchRepoName ?? "",
    page
  );

  const [isReloadButton, setIsReloadButton] = useState<boolean>(false);
  const [isNextPage, setIsNextPage] = useState<boolean>(false);

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

  const onClickReloadButton = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (
      isNil(
        queryClient.getQueryData([queryKeys.search, searchRepoName, page + 1])
      )
    ) {
      setIsNextPage(false);
    } else {
      setIsNextPage(true);
    }
  }, [page, queryClient, searchRepoName]);

  return (
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
              <button onClick={() => onClickReloadButton()}>RELOAD</button>
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
        <button
          onClick={() => {
            searchParams.set("page", String(page - 1));
            setSearchParams(searchParams);
          }}
          disabled={page === 1}
        >
          <BiLeftArrowCircle
            size={34}
            color={
              page === 1 ? theme.disabledArrowIconColor : theme.arrowIconColor
            }
          />
        </button>

        <button
          onClick={() => {
            searchParams.set("page", String(page + 1));
            setSearchParams(searchParams);
          }}
          disabled={!isNextPage}
        >
          <BiRightArrowCircle
            size={34}
            color={
              isNextPage ? theme.arrowIconColor : theme.disabledArrowIconColor
            }
          />
        </button>
      </div>
    </S.Container>
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
