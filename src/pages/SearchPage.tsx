import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  // query string
  const [searchParams, setSearchParams] = useSearchParams();

  const searchReposName = searchParams.get("q");
  const page = searchParams.get("page");

  useEffect(() => {}, [searchReposName, page]);

  return <></>;
};

export default SearchPage;
