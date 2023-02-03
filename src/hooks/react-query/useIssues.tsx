import { useQuery } from "react-query";

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
    },
  );

  return { issueList, isLoading, isFetching };
};

export default useIssues;
