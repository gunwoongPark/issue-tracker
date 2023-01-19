import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import searchApi from "../../lib/api/search";
import { queryKeys } from "../../react-query/queryKeys";

const useSearch = (searchRepoName: string, page: number) => {
  // navigate
  const navigate = useNavigate();

  const {
    data: searchRepoList = [],
    isLoading,
    isFetching,
  } = useQuery(
    [queryKeys.search, searchRepoName, page],
    () => searchApi.searchRepo({ q: searchRepoName, page }),
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

  return { searchRepoList, isLoading, isFetching };
};

export default useSearch;
