import type { RepoSearchResultItem } from "../lib/api/search/schema";

const ReposItemView = (props: { repos: RepoSearchResultItem }) => {
  return (
    <li>
      <span>{props.repos.full_name}</span>
      <input type="checkbox" />
    </li>
  );
};

export default ReposItemView;
