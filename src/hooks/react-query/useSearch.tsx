import axios from "axios";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import searchApi from "../../lib/api/search";
import { OrderType, SortType } from "../../lib/api/search/schema";
import { queryKeys } from "../../react-query/queryKeys";

const useSearch = (
  searchRepoName: string,
  page: number,
  order: OrderType,
  sort: SortType
) => {
  // navigate
  const navigate = useNavigate();

  // queryClient
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = page + 1;

    queryClient.prefetchQuery(
      [queryKeys.search, searchRepoName, nextPage, order, sort],
      () =>
        searchApi.searchRepo({ q: searchRepoName, page: nextPage, order, sort })
    );
  }, [page, queryClient, searchRepoName, order, sort]);

  const {
    data: searchRepoList = [],
    isLoading,
    isFetching,
    error,
  } = useQuery(
    [queryKeys.search, searchRepoName, page, order, sort],
    () => searchApi.searchRepo({ q: searchRepoName, page, order, sort }),
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
