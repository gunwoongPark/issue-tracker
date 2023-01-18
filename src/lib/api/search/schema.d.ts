export interface SearchReposReq {
  q: string;
  page: number;
}

export interface SearchReposRes {
  total_count: TotalCount;
  incomplete_results: IncompleteResults;
  items: Items;
}

export interface TotalCount {
  type: string;
}

export interface IncompleteResults {
  type: string;
}

export interface Items {
  type: string;
  items: Items2;
}

export interface Items2 {
  title: string;
  description: string;
  type: string;
  properties: Properties2;
  required: string[];
}

export interface Properties2 {
  id: Id;
  node_id: NodeId;
  name: Name;
  full_name: FullName;
  owner: Owner;
  private: Private;
  html_url: HtmlUrl2;
  description: Description;
  fork: Fork;
  url: Url2;
  created_at: CreatedAt;
  updated_at: UpdatedAt;
  pushed_at: PushedAt;
  homepage: Homepage;
  size: Size;
  stargazers_count: StargazersCount;
  watchers_count: WatchersCount;
  language: Language;
  forks_count: ForksCount;
  open_issues_count: OpenIssuesCount;
  master_branch: MasterBranch;
  default_branch: DefaultBranch;
  score: Score;
  forks_url: ForksUrl;
  keys_url: KeysUrl;
  collaborators_url: CollaboratorsUrl;
  teams_url: TeamsUrl;
  hooks_url: HooksUrl;
  issue_events_url: IssueEventsUrl;
  events_url: EventsUrl2;
  assignees_url: AssigneesUrl;
  branches_url: BranchesUrl;
  tags_url: TagsUrl;
  blobs_url: BlobsUrl;
  git_tags_url: GitTagsUrl;
  git_refs_url: GitRefsUrl;
  trees_url: TreesUrl;
  statuses_url: StatusesUrl;
  languages_url: LanguagesUrl;
  stargazers_url: StargazersUrl;
  contributors_url: ContributorsUrl;
  subscribers_url: SubscribersUrl;
  subscription_url: SubscriptionUrl;
  commits_url: CommitsUrl;
  git_commits_url: GitCommitsUrl;
  comments_url: CommentsUrl;
  issue_comment_url: IssueCommentUrl;
  contents_url: ContentsUrl;
  compare_url: CompareUrl;
  merges_url: MergesUrl;
  archive_url: ArchiveUrl;
  downloads_url: DownloadsUrl;
  issues_url: IssuesUrl;
  pulls_url: PullsUrl;
  milestones_url: MilestonesUrl;
  notifications_url: NotificationsUrl;
  labels_url: LabelsUrl;
  releases_url: ReleasesUrl;
  deployments_url: DeploymentsUrl;
  git_url: GitUrl;
  ssh_url: SshUrl;
  clone_url: CloneUrl;
  svn_url: SvnUrl;
  forks: Forks;
  open_issues: OpenIssues;
  watchers: Watchers;
  topics: Topics;
  mirror_url: MirrorUrl;
  has_issues: HasIssues;
  has_projects: HasProjects;
  has_pages: HasPages;
  has_wiki: HasWiki;
  has_downloads: HasDownloads;
  has_discussions: HasDiscussions;
  archived: Archived;
  disabled: Disabled;
  visibility: Visibility;
  license: License;
  permissions: Permissions;
  text_matches: TextMatches;
  temp_clone_token: TempCloneToken;
  allow_merge_commit: AllowMergeCommit;
  allow_squash_merge: AllowSquashMerge;
  allow_rebase_merge: AllowRebaseMerge;
  allow_auto_merge: AllowAutoMerge;
  delete_branch_on_merge: DeleteBranchOnMerge;
  allow_forking: AllowForking;
  is_template: IsTemplate;
  web_commit_signoff_required: WebCommitSignoffRequired;
}

export interface Id {
  type: string;
}

export interface NodeId {
  type: string;
}

export interface Name {
  type: string;
}

export interface FullName {
  type: string;
}

export interface Owner {
  anyOf: AnyOf[];
}

export interface AnyOf {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties3;
  required?: string[];
}

export interface Properties3 {
  name: Name2;
  email: Email;
  login: Login;
  id: Id2;
  node_id: NodeId2;
  avatar_url: AvatarUrl;
  gravatar_id: GravatarId;
  url: Url;
  html_url: HtmlUrl;
  followers_url: FollowersUrl;
  following_url: FollowingUrl;
  gists_url: GistsUrl;
  starred_url: StarredUrl;
  subscriptions_url: SubscriptionsUrl;
  organizations_url: OrganizationsUrl;
  repos_url: ReposUrl;
  events_url: EventsUrl;
  received_events_url: ReceivedEventsUrl;
  type: Type;
  site_admin: SiteAdmin;
  starred_at: StarredAt;
}

export interface Name2 {
  type: string[];
}

export interface Email {
  type: string[];
}

export interface Login {
  type: string;
  examples: string[];
}

export interface Id2 {
  type: string;
  examples: number[];
}

export interface NodeId2 {
  type: string;
  examples: string[];
}

export interface AvatarUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId {
  type: string[];
  examples: string[];
}

export interface Url {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl {
  type: string;
  examples: string[];
}

export interface GistsUrl {
  type: string;
  examples: string[];
}

export interface StarredUrl {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface Type {
  type: string;
  examples: string[];
}

export interface SiteAdmin {
  type: string;
}

export interface StarredAt {
  type: string;
  examples: string[];
}

export interface Private {
  type: string;
}

export interface HtmlUrl2 {
  type: string;
  format: string;
}

export interface Description {
  type: string[];
}

export interface Fork {
  type: string;
}

export interface Url2 {
  type: string;
  format: string;
}

export interface CreatedAt {
  type: string;
  format: string;
}

export interface UpdatedAt {
  type: string;
  format: string;
}

export interface PushedAt {
  type: string;
  format: string;
}

export interface Homepage {
  type: string[];
  format: string;
}

export interface Size {
  type: string;
}

export interface StargazersCount {
  type: string;
}

export interface WatchersCount {
  type: string;
}

export interface Language {
  type: string[];
}

export interface ForksCount {
  type: string;
}

export interface OpenIssuesCount {
  type: string;
}

export interface MasterBranch {
  type: string;
}

export interface DefaultBranch {
  type: string;
}

export interface Score {
  type: string;
}

export interface ForksUrl {
  type: string;
  format: string;
}

export interface KeysUrl {
  type: string;
}

export interface CollaboratorsUrl {
  type: string;
}

export interface TeamsUrl {
  type: string;
  format: string;
}

export interface HooksUrl {
  type: string;
  format: string;
}

export interface IssueEventsUrl {
  type: string;
}

export interface EventsUrl2 {
  type: string;
  format: string;
}

export interface AssigneesUrl {
  type: string;
}

export interface BranchesUrl {
  type: string;
}

export interface TagsUrl {
  type: string;
  format: string;
}

export interface BlobsUrl {
  type: string;
}

export interface GitTagsUrl {
  type: string;
}

export interface GitRefsUrl {
  type: string;
}

export interface TreesUrl {
  type: string;
}

export interface StatusesUrl {
  type: string;
}

export interface LanguagesUrl {
  type: string;
  format: string;
}

export interface StargazersUrl {
  type: string;
  format: string;
}

export interface ContributorsUrl {
  type: string;
  format: string;
}

export interface SubscribersUrl {
  type: string;
  format: string;
}

export interface SubscriptionUrl {
  type: string;
  format: string;
}

export interface CommitsUrl {
  type: string;
}

export interface GitCommitsUrl {
  type: string;
}

export interface CommentsUrl {
  type: string;
}

export interface IssueCommentUrl {
  type: string;
}

export interface ContentsUrl {
  type: string;
}

export interface CompareUrl {
  type: string;
}

export interface MergesUrl {
  type: string;
  format: string;
}

export interface ArchiveUrl {
  type: string;
}

export interface DownloadsUrl {
  type: string;
  format: string;
}

export interface IssuesUrl {
  type: string;
}

export interface PullsUrl {
  type: string;
}

export interface MilestonesUrl {
  type: string;
}

export interface NotificationsUrl {
  type: string;
}

export interface LabelsUrl {
  type: string;
}

export interface ReleasesUrl {
  type: string;
}

export interface DeploymentsUrl {
  type: string;
  format: string;
}

export interface GitUrl {
  type: string;
}

export interface SshUrl {
  type: string;
}

export interface CloneUrl {
  type: string;
}

export interface SvnUrl {
  type: string;
  format: string;
}

export interface Forks {
  type: string;
}

export interface OpenIssues {
  type: string;
}

export interface Watchers {
  type: string;
}

export interface Topics {
  type: string;
  items: Items3;
}

export interface Items3 {
  type: string;
}

export interface MirrorUrl {
  type: string[];
  format: string;
}

export interface HasIssues {
  type: string;
}

export interface HasProjects {
  type: string;
}

export interface HasPages {
  type: string;
}

export interface HasWiki {
  type: string;
}

export interface HasDownloads {
  type: string;
}

export interface HasDiscussions {
  type: string;
}

export interface Archived {
  type: string;
}

export interface Disabled {
  type: string;
  description: string;
}

export interface Visibility {
  description: string;
  type: string;
}

export interface License {
  anyOf: AnyOf2[];
}

export interface AnyOf2 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties4;
  required?: string[];
}

export interface Properties4 {
  key: Key;
  name: Name3;
  url: Url3;
  spdx_id: SpdxId;
  node_id: NodeId3;
  html_url: HtmlUrl3;
}

export interface Key {
  type: string;
  examples: string[];
}

export interface Name3 {
  type: string;
  examples: string[];
}

export interface Url3 {
  type: string[];
  format: string;
  examples: string[];
}

export interface SpdxId {
  type: string[];
  examples: string[];
}

export interface NodeId3 {
  type: string;
  examples: string[];
}

export interface HtmlUrl3 {
  type: string;
  format: string;
}

export interface Permissions {
  type: string;
  properties: Properties5;
  required: string[];
}

export interface Properties5 {
  admin: Admin;
  maintain: Maintain;
  push: Push;
  triage: Triage;
  pull: Pull;
}

export interface Admin {
  type: string;
}

export interface Maintain {
  type: string;
}

export interface Push {
  type: string;
}

export interface Triage {
  type: string;
}

export interface Pull {
  type: string;
}

export interface TextMatches {
  title: string;
  type: string;
  items: Items4;
}

export interface Items4 {
  type: string;
  properties: Properties6;
}

export interface Properties6 {
  object_url: ObjectUrl;
  object_type: ObjectType;
  property: Property;
  fragment: Fragment;
  matches: Matches;
}

export interface ObjectUrl {
  type: string;
}

export interface ObjectType {
  type: string[];
}

export interface Property {
  type: string;
}

export interface Fragment {
  type: string;
}

export interface Matches {
  type: string;
  items: Items5;
}

export interface Items5 {
  type: string;
  properties: Properties7;
}

export interface Properties7 {
  text: Text;
  indices: Indices;
}

export interface Text {
  type: string;
}

export interface Indices {
  type: string;
  items: Items6;
}

export interface Items6 {
  type: string;
}

export interface TempCloneToken {
  type: string;
}

export interface AllowMergeCommit {
  type: string;
}

export interface AllowSquashMerge {
  type: string;
}

export interface AllowRebaseMerge {
  type: string;
}

export interface AllowAutoMerge {
  type: string;
}

export interface DeleteBranchOnMerge {
  type: string;
}

export interface AllowForking {
  type: string;
}

export interface IsTemplate {
  type: string;
}

export interface WebCommitSignoffRequired {
  type: string;
  examples: boolean[];
}
