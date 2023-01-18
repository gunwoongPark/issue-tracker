import { useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import useSearch from "../hooks/react-query/useSearch";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page"));

  // state
  const { searchReposList } = useSearch(searchReposName ?? "", page);

  return (
    <>
      <InputView />

      <ul>
        {searchReposList.map((repos) => (
          <li key={`search-repos-list-item-${repos.id}`}>{repos.full_name}</li>
        ))}
      </ul>

      <button>Prev</button>
      <button>Next</button>
    </>
  );
};

export default SearchPage;
