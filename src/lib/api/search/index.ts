import apiBase from "..";
import { SearchRepoReq, SearchRepoRes } from "./schema";

const PER_PAGE = 20;

const searchApi = {
  /**
   * repository 검색
   * @param  {} {q
   * @param  {} page
   * @param  {} sort
   * @param  {} order
   * @param  {SearchRepoReq} }
   * @returns Promise
   */
  searchRepo: ({
    q,
    page,
    sort,
    order,
  }: SearchRepoReq): Promise<SearchRepoRes> =>
    apiBase.get(
      `/search/repositories?q=${q}+in:name&page=${page}&per_page=${PER_PAGE}&order=${order}${
        sort !== "best-match" ? `&sort=${sort}` : ""
      }`,
    ),
};

export default searchApi;
