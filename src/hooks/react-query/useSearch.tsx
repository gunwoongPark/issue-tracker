import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import searchApi from "../../lib/api/search";
import { queryKeys } from "../../react-query/queryKeys";

const useSearch = (searchReposName: string, page: number) => {
  // navigate
  const navigate = useNavigate();

  const {
    data: searchReposList = [],
    isLoading,
    isFetching,
  } = useQuery(
    [queryKeys.search, page],
    () => searchApi.searchRepos({ q: searchReposName, page }),
    {
      select: (response) => response.items,
      keepPreviousData: false,
      // TODO : ERROR HANDLING
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 422) {
            alert("올바르지 않은 접근입니다.");
            navigate("/");
          }
        }
      },
    }
  );

  return { searchReposList, isLoading, isFetching };
};

export default useSearch;
