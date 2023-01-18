import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InputView from "../components/InputView";
import searchApi from "../lib/api/search";
import { RepoSearchResultItem } from "../lib/api/search/schema";
import { isNotNaN, isNotNil } from "../util/lodash";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page"));

  // state
  const [reposList, setReposList] = useState<RepoSearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let ignore = false;

    const searchRepos = async () => {
      try {
        if (isLoading) {
          return;
        }

        setIsLoading(() => true);

        const res = await searchApi.searchRepos({
          q: searchReposName as string,
          page: page as number,
        });

        if (!ignore) {
          setReposList(res.items);
          setIsLoading(() => false);
        }
      } catch (error) {
        setIsLoading(() => false);
      }
    };

    if (isNotNil(searchReposName) && isNotNil(page) && isNotNaN(page)) {
      searchRepos();
    }

    return () => {
      ignore = true;
    };
  }, [searchReposName, page]);

  return (
    <>
      <InputView />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reposList.map((repos) => (
            <li key={`search-repos-list-item-${repos.id}`}>
              {repos.full_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchPage;
