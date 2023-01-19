import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import issuesApi from "../../lib/api/issues";
import { queryKeys } from "../../react-query/queryKeys";

const useIssues = (page: number) => {
  const params = useParams();
  const { owner, repoName } = params;

  const {
    data: issueList,
    isLoading,
    isFetching,
  } = useQuery(
    [queryKeys.issues, owner, repoName, page],
    () =>
      issuesApi.fetchIssues({
        owner: owner as string,
        repo: repoName as string,
        page,
      }),
    {
      keepPreviousData: true,
    }
  );

  return { issueList, isLoading, isFetching };
};

export default useIssues;
