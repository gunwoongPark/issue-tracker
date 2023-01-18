import apiBase from "..";
import { SearchReposReq, SearchReposRes } from "./schema";

const searchApi = {
  /**
   * 레포지토리 검색
   * @param  {} {q
   * @param  {SearchReposReq} page}
   * @returns Promise
   */
  searchRepos: ({ q, page }: SearchReposReq): Promise<SearchReposRes> =>
    apiBase.get(`/search/repositories?q=${q}+in:name&page=${page}&per_page=10`),
};

export default searchApi;
