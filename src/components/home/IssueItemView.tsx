import { BiAlarm } from "react-icons/bi";
import ReactTimeago from "react-timeago";
import styled, { useTheme } from "styled-components";
import { isNotBlank } from "../../util/lodash";
import LabelItemView from "./LabelItemView";
import type { Issue } from "../../lib/api/issues/schema";

const IssueItemView = (props: { repoName: string; issue: Issue }) => {
  // theme
  const theme = useTheme();

  return (
    <S.Container onClick={() => window.open(props.issue.html_url, "_blank")}>
      <div className="head-container">
        <span className="repo-name">{props.repoName} </span>
        <span className="issue-title">{props.issue.title}</span>
      </div>

      {isNotBlank(props.issue.labels) && (
        <ul className="label-container">
          {props.issue.labels.map((label) => (
            <LabelItemView key={label.id} label={label} />
          ))}
        </ul>
      )}

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
          <BiAlarm color={theme.iconColor} size={24} />
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
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: ${({ theme }) => theme.issueItemColor};
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;

    .head-container {
      display: flex;
      align-items: baseline;
      .repo-name {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        color: ${({ theme }) => theme.mainColor};
      }

      .issue-title {
        word-break: break-word;
        margin-left: 16px;
        text-decoration: none;
        color: ${({ theme }) => theme.textColor1};
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
      }
    }

    .label-container {
      margin-top: 2px;
      display: flex;
      flex-wrap: wrap;
    }

    .bottom-container {
      display: flex;
      justify-content: space-between;
      margin-top: 4px;

      .user-container {
        display: flex;
        align-items: center;
        .user-image {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .user-login {
          margin-left: 6px;
          font-size: 12px;
          line-height: 22px;
          color: ${({ theme }) => theme.issueItemTextColor};
        }
      }

      .update-container {
        display: flex;
        align-items: center;
        span {
          font-weight: 400;
          margin-left: 6px;
          font-size: 12px;
          line-height: 22px;
          color: ${({ theme }) => theme.issueItemTextColor};
        }
      }
    }
  `,
};
