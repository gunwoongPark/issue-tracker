import { useEffect, useState } from "react";
import searchApi from "../lib/api/search";
import { RepoSearchResultItem } from "../lib/api/search/schema";
import { isNotNaN, isNotNil } from "../util/lodash";

const useSearch = (searchReposName: string | null, page: number) => {
  const [reposList, setReposList] = useState<RepoSearchResultItem[]>([]);

  useEffect(() => {
    if (isNotNil(searchReposName) && isNotNaN(page)) {
      searchRepos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchReposName]);

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

  return { reposList };
};

export default useSearch;
