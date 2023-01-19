import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useIssues from "../hooks/react-query/useIssues";

const IssuesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) | 1;

  const { issueList, isLoading, isFetching } = useIssues(page);

  useEffect(() => {
    console.log(issueList);
  }, [issueList]);

  return (
    <>
      <Link to="/">HOME</Link>
      <ul>
        {issueList?.map((issue) => (
          <li key={`issue-list-item-${issue.id}`}>{issue.title}</li>
        ))}
      </ul>
    </>
  );
};

export default IssuesPage;
