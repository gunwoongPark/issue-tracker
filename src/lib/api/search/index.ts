import apiBase from "..";
import { SearchRepoReq, SearchRepoRes } from "./schema";

const searchApi = {
  /**
   * 레포지토리 검색
   * @param  {} {q
   * @param  {SearchRepoReq} page}
   * @returns Promise
   */
  searchRepo: ({ q, page }: SearchRepoReq): Promise<SearchRepoRes> =>
    apiBase.get(`/search/repositories?q=${q}+in:name&page=${page}&per_page=15`),
};

export default searchApi;
