import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchApi from "../lib/api/search";
import { RepoSearchResultItem } from "../lib/api/search/schema";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page"));

  // state
  const [reposList, setReposList] = useState<RepoSearchResultItem[]>([]);

  useEffect(() => {
    searchRepos();
  }, [searchReposName, page]);

  const searchRepos = async () => {
    try {
      const res = await searchApi.searchRepos({
        q: searchReposName as string,
        page: page as number,
      });

      setReposList(res.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(reposList);
  }, [reposList]);

  return (
    <>
      <ul>
        {reposList.map((repos) => (
          <li key={`search-repos-list-item-${repos.id}`}>{repos.full_name}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchPage;
