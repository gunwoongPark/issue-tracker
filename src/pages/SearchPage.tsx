import { Link, useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import ReposItemView from "../components/ReposItemView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

  // state
  const { searchReposList, isLoading, isFetching } = useSearch(
    searchReposName ?? "",
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
          {searchReposList.map((repos) => (
            <ReposItemView
              key={`search-repos-list-item-${repos.id}`}
              repos={repos}
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
        disabled={searchReposList.length < 15}
      >
        Next
      </button>
    </>
  );
};

export default SearchPage;
