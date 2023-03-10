import apiBase from "..";
import { IssuesReq, IssuesRes } from "./schema";

const PER_PAGE = 3;

const issuesApi = {
  /**
   * ์ด์ ์กฐํ
   * @param  {} {owner
   * @param  {} repo
   * @param  {IssuesReq} page}
   * @returns Promise
   */
  fetchIssues: ({ owner, repo, page }: IssuesReq): Promise<IssuesRes> =>
    apiBase.get(
      `/repos/${owner}/${repo}/issues?page=${page}&per_page=${PER_PAGE}`,
    ),
};

export default issuesApi;
