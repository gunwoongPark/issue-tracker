import { useCallback } from "react";
import { BiAlarm } from "react-icons/bi";
import ReactTimeago from "react-timeago";
import styled, { css, useTheme } from "styled-components";
import { calcTextColor } from "../../util/calcTextColor";
import { isNotBlank } from "../../util/lodash";
import type { Issue } from "../../lib/api/issues/schema";

const IssueItemView = (props: { repoName: string; issue: Issue }) => {
  // theme
  const theme = useTheme();

  // 이슈 클릭시
  const onClickIssue = useCallback(() => {
    window.open(props.issue.html_url, "_blank");
  }, [props.issue.html_url]);

  return (
    <S.Container onClick={() => onClickIssue()}>
      <div className="head-container">
        <span className="repo-name">{props.repoName} </span>
        <span className="issue-title">{props.issue.title}</span>
      </div>

      {isNotBlank(props.issue.labels) && (
        <div className="label-container">
          {props.issue.labels.map((label) => (
            <S.Label
              key={label.id}
              className="label"
              color={label.color}
              textColor={calcTextColor(label.color)}
            >
              {label.name}
            </S.Label>
          ))}
        </div>
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
        color: ${({ theme }) => theme.mainTextColor};
      }

      .issue-title {
        margin-left: 16px;
        text-decoration: none;
        color: ${({ theme }) => theme.subTextColor};
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
      }
    }

    .label-container {
      margin-top: 4px;
      display: flex;
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
          color: ${({ theme }) => theme.issueItemSubTextColor};
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
          color: ${({ theme }) => theme.issueItemSubTextColor};
        }
      }
    }
  `,

  Label: styled.span<{ color: string; textColor: string }>`
    background-color: ${({ color }) => css`#${color}`};
    color: ${({ textColor }) => textColor};
    font-size: 10px;
    line-height: 12px;
    border-radius: 12px;
    padding: 0 3px;
    &:not(:first-child) {
      margin-left: 5px;
    }
  `,
};
