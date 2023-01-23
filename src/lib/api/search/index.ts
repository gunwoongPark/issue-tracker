import apiBase from "..";
import { SearchRepoReq, SearchRepoRes } from "./schema";

const PER_PAGE = 15;

const searchApi = {
  searchRepo: ({
    q,
    page,
    // sort,
    order,
  }: SearchRepoReq): Promise<SearchRepoRes> =>
    apiBase.get(
      `/search/repositories?q=${q}+in:name&page=${page}&per_page=${PER_PAGE}&order=${order}`
    ),
};

export default searchApi;
