import axios from "axios";
import { isNil } from "lodash";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RepoItemView from "../components/RepoItemView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRepoName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

  const { searchRepoList, isLoading, isFetching, error } = useSearch(
    searchRepoName ?? "",
    page
  );

  console.log(searchRepoList);

  const [isReloadButton, setIsReloadButton] = useState<boolean>(false);

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

  return (
    <>
      {(() => {
        if (isLoading || isFetching) {
          return <p>Loading...</p>;
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

      <button
        onClick={() => {
          searchParams.set("page", String(page - 1));
          setSearchParams(searchParams);
        }}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        onClick={() => {
          searchParams.set("page", String(page + 1));
          setSearchParams(searchParams);
        }}
        disabled={searchRepoList.length < 15}
      >
        Next
      </button>
    </>
  );
};

export default SearchPage;
