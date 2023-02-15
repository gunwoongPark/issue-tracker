import issuesApi from "lib/api/issues";
import { useQuery } from "react-query";
import { queryKeys } from "react-query/queryKeys";

const useIssues = ({
  owner,
  repoName,
  page,
}: {
  owner: string;
  repoName: string;
  page: number;
}) => {
  const { data: issueList = [], isLoading } = useQuery(
    [queryKeys.issues, owner, repoName, page],
    () =>
      issuesApi.fetchIssues({
        owner,
        repo: repoName,
        page,
      }),
  );

  return { issueList, isLoading };
};

export default useIssues;
