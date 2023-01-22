export type BookmarkType = {
  id: number;
  owner: string;
  repoName: string;
  openIssuesCount: number;
};

export type BookmarkListType = Array<BookmarkType>;
