import searchApi from "lib/api/search";
import { OrderType, SortType } from "lib/api/search/schema";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "react-query/queryKeys";

const useSearch = (
  searchRepoName: string,
  page: number,
  order: OrderType,
  sort: SortType,
) => {
  // queryClient
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = page + 1;

    queryClient.prefetchQuery(
      [queryKeys.search, searchRepoName, nextPage, order, sort],
      () =>
        searchApi.searchRepo({
          q: searchRepoName,
          page: nextPage,
          order,
          sort,
        }),
    );
  }, [page, queryClient, searchRepoName, order, sort]);

  const {
    data: searchRepoList = [],
    isLoading,
    error,
  } = useQuery(
    [queryKeys.search, searchRepoName, page, order, sort],
    () => searchApi.searchRepo({ q: searchRepoName, page, order, sort }),
    {
      select: (response) => response.items,
    },
  );

  return { searchRepoList, isLoading, error };
};

export default useSearch;
