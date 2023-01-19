import { Link, useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import PaginationButtonView from "../components/PaginationButtonView";
import RepoItemView from "../components/RepoItemView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const searchParams = useSearchParams()[0];

  const searchRepoName = searchParams.get("q");
  const page = Number(searchParams.get("page")) || 1;

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

      <PaginationButtonView itemList={searchRepoList} />
    </>
  );
};

export default SearchPage;
