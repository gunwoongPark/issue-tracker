import { Link, useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import RepoItemView from "../components/RepoItemView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchRepoName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

  // state
  const { searchRepoList, isLoading, isFetching } = useSearch(
    searchRepoName ?? "",
    page
  );

  return (
    <>
      <Link to="/">HOME</Link>

      <InputView />

      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchRepoList.map((repo) => (
            <RepoItemView
              key={`search-repo-list-item-${repo.id}`}
              repo={repo}
            />
          ))}
        </ul>
      )}

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
