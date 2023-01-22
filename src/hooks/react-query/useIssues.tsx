import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import issuesApi from "../../lib/api/issues";
import { queryKeys } from "../../react-query/queryKeys";

const useIssues = ({
  owner,
  repoName,
  page,
}: {
  owner: string;
  repoName: string;
  page: number;
}) => {
  // queryClient
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery(
      [queryKeys.issues, owner, repoName, nextPage],
      () =>
        issuesApi.fetchIssues({
          owner,
          repo: repoName,
          page: nextPage,
        })
    );
  }, [owner, page, queryClient, repoName]);

  const {
    data: issueList = [],
    isLoading,
    isFetching,
  } = useQuery(
    [queryKeys.issues, owner, repoName, page],
    () =>
      issuesApi.fetchIssues({
        owner,
        repo: repoName,
        page,
      }),
    {
      keepPreviousData: true,
    }
  );

  return { issueList, isLoading, isFetching };
};

export default useIssues;
