import { useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page"));

  // state
  const { searchReposList, isLoading, isFetching } = useSearch(
    searchReposName ?? "",
    page
  );

  return (
    <>
      <InputView />
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchReposList.map((repos) => (
            <li key={`search-repos-list-item-${repos.id}`}>
              {repos.full_name}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => {
          searchParams.set("page", String(page - 1));
          setSearchParams(searchParams);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          searchParams.set("page", String(page + 1));
          setSearchParams(searchParams);
        }}
      >
        Next
      </button>
    </>
  );
};

export default SearchPage;
