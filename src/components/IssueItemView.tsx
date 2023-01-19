import { useEffect } from "react";
import type { Issue } from "../lib/api/issues/schema";

const IssueItemView = (props: { issue: Issue }) => {
  useEffect(() => {
    console.log(props.issue);
  }, [props.issue]);

  return (
    <li>
      <a href={props.issue.html_url} target="_blank" rel="noopener noreferrer">
        {props.issue.title}
      </a>
    </li>
  );
};

export default IssueItemView;
