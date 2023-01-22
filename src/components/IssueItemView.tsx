import { BiAlarm } from "react-icons/bi";
import ReactTimeago from "react-timeago";
import styled, { css, useTheme } from "styled-components";
import type { Issue } from "../lib/api/issues/schema";

const IssueItemView = (props: { repoName: string; issue: Issue }) => {
  // theme
  const theme = useTheme();

  return (
    <S.Container>
      <span className="repo-name">{props.repoName} </span>
      <a href={props.issue.html_url} target="_blank" rel="noopener noreferrer">
        {props.issue.title}
      </a>

      <div className="label-container">
        {props.issue.labels.map((label) => (
          <S.Label className="label" color={label.color}>
            {label.name}
          </S.Label>
        ))}
      </div>

      <div className="bottom-container">
        <div className="user-container">
          <img
            src={props.issue.user.avatar_url}
            alt={props.issue.user.avatar_url}
            className="user-image"
          />
          <span className="user-login">{props.issue.user.login}</span>
        </div>

        <div className="update-container">
          <BiAlarm color={theme.iconColor} />
          <span>
            <ReactTimeago date={props.issue.updated_at} />
          </span>
        </div>
      </div>
    </S.Container>
  );
};

export default IssueItemView;

const S = {
  Container: styled.li`
    .repo-name {
      color: ${({ theme }) => theme.mainTextColor};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.subTextColor};
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
    }

    .label-container {
      display: inline-block;
    }

    .bottom-container {
      display: flex;
      justify-content: space-between;
      .user-container {
        display: flex;
        align-items: center;
        .user-image {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .user-login {
          margin-left: 5px;
          font-size: 14px;
          color: ${({ theme }) => theme.iconColor};
        }
      }

      .update-container {
        display: flex;
        align-items: center;
        span {
          margin-left: 3px;
          font-size: 14px;
          color: ${({ theme }) => theme.iconColor};
        }
      }
    }
  `,

  Label: styled.span<{ color: string }>`
    background-color: ${({ color }) => css`#${color}`};
    font-size: 12px;
    border-radius: 16px;
    padding: 0 2px;
    &:not(:first-child) {
      margin-left: 5px;
    }
  `,
};
