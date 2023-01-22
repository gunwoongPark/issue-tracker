import styled from "styled-components";
import type { Issue } from "../lib/api/issues/schema";

const IssueItemView = (props: { issue: Issue }) => {
  return (
    <S.Container>
      <a href={props.issue.html_url} target="_blank" rel="noopener noreferrer">
        {props.issue.title}
      </a>
    </S.Container>
  );
};

export default IssueItemView;

const S = {
  Container: styled.li`
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.subTextColor};
      font-size: 18px;
      line-height: 28px;
      font-weight: 400;
    }
  `,
};
