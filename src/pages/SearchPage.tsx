import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import searchApi from "../lib/api/search";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    searchRepos();
  }, [searchReposName, page]);

  const searchRepos = async () => {
    try {
      const res = await searchApi.searchRepos({
        q: searchReposName as string,
        page: page as number,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};

export default SearchPage;
