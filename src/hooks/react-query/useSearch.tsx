import axios from "axios";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import searchApi from "../../lib/api/search";
import { queryKeys } from "../../react-query/queryKeys";

const useSearch = (searchRepoName: string, page: number) => {
  // navigate
  const navigate = useNavigate();

  // queryClient
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery(
      [queryKeys.search, searchRepoName, nextPage],
      () => searchApi.searchRepo({ q: searchRepoName, page: nextPage })
    );
  }, [page, queryClient, searchRepoName]);

  const {
    data: searchRepoList = [],
    isLoading,
    isFetching,
    error,
  } = useQuery(
    [queryKeys.search, searchRepoName, page],
    () => searchApi.searchRepo({ q: searchRepoName, page }),
    {
      select: (response) => response.items,
      keepPreviousData: true,
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

  return { searchRepoList, isLoading, isFetching, error };
};

export default useSearch;
