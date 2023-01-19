export interface IssuesReq {
  owner: string;
  repo: string;
  page: number;
}

export interface IssuesRes {
  id: Id;
  node_id: NodeId;
  url: Url;
  repository_url: RepositoryUrl;
  labels_url: LabelsUrl;
  comments_url: CommentsUrl;
  events_url: EventsUrl;
  html_url: HtmlUrl;
  number: Number;
  state: State;
  state_reason: StateReason;
  title: Title;
  body: Body;
  user: User;
  labels: Labels;
  assignee: Assignee;
  assignees: Assignees;
  milestone: Milestone;
  locked: Locked;
  active_lock_reason: ActiveLockReason;
  comments: Comments;
  pull_request: PullRequest;
  closed_at: ClosedAt2;
  created_at: CreatedAt2;
  updated_at: UpdatedAt2;
  draft: Draft;
  closed_by: ClosedBy;
  body_html: BodyHtml;
  body_text: BodyText;
  timeline_url: TimelineUrl;
  repository: Repository;
  performed_via_github_app: PerformedViaGithubApp;
  author_association: AuthorAssociation;
  reactions: Reactions;
}

export interface Id {
  type: string;
}

export interface NodeId {
  type: string;
}

export interface Url {
  description: string;
  type: string;
  format: string;
  examples: string[];
}

export interface RepositoryUrl {
  type: string;
  format: string;
}

export interface LabelsUrl {
  type: string;
}

export interface CommentsUrl {
  type: string;
  format: string;
}

export interface EventsUrl {
  type: string;
  format: string;
}

export interface HtmlUrl {
  type: string;
  format: string;
}

export interface Number {
  description: string;
  type: string;
  examples: number[];
}

export interface State {
  description: string;
  type: string;
  examples: string[];
}

export interface StateReason {
  description: string;
  type: string[];
  enum: string | undefined[];
  examples: string[];
}

export interface Title {
  description: string;
  type: string;
  examples: string[];
}

export interface Body {
  description: string;
  type: string[];
  examples: string[];
}

export interface User {
  anyOf: AnyOf[];
}

export interface AnyOf {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties2;
  required?: string[];
}

export interface Properties2 {
  name: Name;
  email: Email;
  login: Login;
  id: Id2;
  node_id: NodeId2;
  avatar_url: AvatarUrl;
  gravatar_id: GravatarId;
  url: Url2;
  html_url: HtmlUrl2;
  followers_url: FollowersUrl;
  following_url: FollowingUrl;
  gists_url: GistsUrl;
  starred_url: StarredUrl;
  subscriptions_url: SubscriptionsUrl;
  organizations_url: OrganizationsUrl;
  repos_url: ReposUrl;
  events_url: EventsUrl2;
  received_events_url: ReceivedEventsUrl;
  type: Type;
  site_admin: SiteAdmin;
  starred_at: StarredAt;
}

export interface Name {
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

export interface Url2 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl2 {
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

export interface EventsUrl2 {
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

export interface Labels {
  description: string;
  type: string;
  items: Items2;
  examples: string[];
}

export interface Items2 {
  oneOf: OneOf[];
}

export interface OneOf {
  type: string;
  properties?: Properties3;
}

export interface Properties3 {
  id: Id3;
  node_id: NodeId3;
  url: Url3;
  name: Name2;
  description: Description;
  color: Color;
  default: Default;
}

export interface Id3 {
  type: string;
  format: string;
}

export interface NodeId3 {
  type: string;
}

export interface Url3 {
  type: string;
  format: string;
}

export interface Name2 {
  type: string;
}

export interface Description {
  type: string[];
}

export interface Color {
  type: string[];
}

export interface Default {
  type: string;
}

export interface Assignee {
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
  name: Name3;
  email: Email2;
  login: Login2;
  id: Id4;
  node_id: NodeId4;
  avatar_url: AvatarUrl2;
  gravatar_id: GravatarId2;
  url: Url4;
  html_url: HtmlUrl3;
  followers_url: FollowersUrl2;
  following_url: FollowingUrl2;
  gists_url: GistsUrl2;
  starred_url: StarredUrl2;
  subscriptions_url: SubscriptionsUrl2;
  organizations_url: OrganizationsUrl2;
  repos_url: ReposUrl2;
  events_url: EventsUrl3;
  received_events_url: ReceivedEventsUrl2;
  type: Type2;
  site_admin: SiteAdmin2;
  starred_at: StarredAt2;
}

export interface Name3 {
  type: string[];
}

export interface Email2 {
  type: string[];
}

export interface Login2 {
  type: string;
  examples: string[];
}

export interface Id4 {
  type: string;
  examples: number[];
}

export interface NodeId4 {
  type: string;
  examples: string[];
}

export interface AvatarUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId2 {
  type: string[];
  examples: string[];
}

export interface Url4 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl2 {
  type: string;
  examples: string[];
}

export interface GistsUrl2 {
  type: string;
  examples: string[];
}

export interface StarredUrl2 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl3 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type2 {
  type: string;
  examples: string[];
}

export interface SiteAdmin2 {
  type: string;
}

export interface StarredAt2 {
  type: string;
  examples: string[];
}

export interface Assignees {
  type: string[];
  items: Items3;
}

export interface Items3 {
  title: string;
  description: string;
  type: string;
  properties: Properties5;
  required: string[];
}

export interface Properties5 {
  name: Name4;
  email: Email3;
  login: Login3;
  id: Id5;
  node_id: NodeId5;
  avatar_url: AvatarUrl3;
  gravatar_id: GravatarId3;
  url: Url5;
  html_url: HtmlUrl4;
  followers_url: FollowersUrl3;
  following_url: FollowingUrl3;
  gists_url: GistsUrl3;
  starred_url: StarredUrl3;
  subscriptions_url: SubscriptionsUrl3;
  organizations_url: OrganizationsUrl3;
  repos_url: ReposUrl3;
  events_url: EventsUrl4;
  received_events_url: ReceivedEventsUrl3;
  type: Type3;
  site_admin: SiteAdmin3;
  starred_at: StarredAt3;
}

export interface Name4 {
  type: string[];
}

export interface Email3 {
  type: string[];
}

export interface Login3 {
  type: string;
  examples: string[];
}

export interface Id5 {
  type: string;
  examples: number[];
}

export interface NodeId5 {
  type: string;
  examples: string[];
}

export interface AvatarUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId3 {
  type: string[];
  examples: string[];
}

export interface Url5 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl3 {
  type: string;
  examples: string[];
}

export interface GistsUrl3 {
  type: string;
  examples: string[];
}

export interface StarredUrl3 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl4 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl3 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type3 {
  type: string;
  examples: string[];
}

export interface SiteAdmin3 {
  type: string;
}

export interface StarredAt3 {
  type: string;
  examples: string[];
}

export interface Milestone {
  anyOf: AnyOf3[];
}

export interface AnyOf3 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties6;
  required?: string[];
}

export interface Properties6 {
  url: Url6;
  html_url: HtmlUrl5;
  labels_url: LabelsUrl2;
  id: Id6;
  node_id: NodeId6;
  number: Number2;
  state: State2;
  title: Title2;
  description: Description2;
  creator: Creator;
  open_issues: OpenIssues;
  closed_issues: ClosedIssues;
  created_at: CreatedAt;
  updated_at: UpdatedAt;
  closed_at: ClosedAt;
  due_on: DueOn;
}

export interface Url6 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface LabelsUrl2 {
  type: string;
  format: string;
  examples: string[];
}

export interface Id6 {
  type: string;
  examples: number[];
}

export interface NodeId6 {
  type: string;
  examples: string[];
}

export interface Number2 {
  description: string;
  type: string;
  examples: number[];
}

export interface State2 {
  description: string;
  type: string;
  enum: string[];
  default: string;
  examples: string[];
}

export interface Title2 {
  description: string;
  type: string;
  examples: string[];
}

export interface Description2 {
  type: string[];
  examples: string[];
}

export interface Creator {
  anyOf: AnyOf4[];
}

export interface AnyOf4 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties7;
  required?: string[];
}

export interface Properties7 {
  name: Name5;
  email: Email4;
  login: Login4;
  id: Id7;
  node_id: NodeId7;
  avatar_url: AvatarUrl4;
  gravatar_id: GravatarId4;
  url: Url7;
  html_url: HtmlUrl6;
  followers_url: FollowersUrl4;
  following_url: FollowingUrl4;
  gists_url: GistsUrl4;
  starred_url: StarredUrl4;
  subscriptions_url: SubscriptionsUrl4;
  organizations_url: OrganizationsUrl4;
  repos_url: ReposUrl4;
  events_url: EventsUrl5;
  received_events_url: ReceivedEventsUrl4;
  type: Type4;
  site_admin: SiteAdmin4;
  starred_at: StarredAt4;
}

export interface Name5 {
  type: string[];
}

export interface Email4 {
  type: string[];
}

export interface Login4 {
  type: string;
  examples: string[];
}

export interface Id7 {
  type: string;
  examples: number[];
}

export interface NodeId7 {
  type: string;
  examples: string[];
}

export interface AvatarUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId4 {
  type: string[];
  examples: string[];
}

export interface Url7 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl4 {
  type: string;
  examples: string[];
}

export interface GistsUrl4 {
  type: string;
  examples: string[];
}

export interface StarredUrl4 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl5 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl4 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type4 {
  type: string;
  examples: string[];
}

export interface SiteAdmin4 {
  type: string;
}

export interface StarredAt4 {
  type: string;
  examples: string[];
}

export interface OpenIssues {
  type: string;
  examples: number[];
}

export interface ClosedIssues {
  type: string;
  examples: number[];
}

export interface CreatedAt {
  type: string;
  format: string;
  examples: string[];
}

export interface UpdatedAt {
  type: string;
  format: string;
  examples: string[];
}

export interface ClosedAt {
  type: string[];
  format: string;
  examples: string[];
}

export interface DueOn {
  type: string[];
  format: string;
  examples: string[];
}

export interface Locked {
  type: string;
}

export interface ActiveLockReason {
  type: string[];
}

export interface Comments {
  type: string;
}

export interface PullRequest {
  type: string;
  properties: Properties8;
  required: string[];
}

export interface Properties8 {
  merged_at: MergedAt;
  diff_url: DiffUrl;
  html_url: HtmlUrl7;
  patch_url: PatchUrl;
  url: Url8;
}

export interface MergedAt {
  type: string[];
  format: string;
}

export interface DiffUrl {
  type: string[];
  format: string;
}

export interface HtmlUrl7 {
  type: string[];
  format: string;
}

export interface PatchUrl {
  type: string[];
  format: string;
}

export interface Url8 {
  type: string[];
  format: string;
}

export interface ClosedAt2 {
  type: string[];
  format: string;
}

export interface CreatedAt2 {
  type: string;
  format: string;
}

export interface UpdatedAt2 {
  type: string;
  format: string;
}

export interface Draft {
  type: string;
}

export interface ClosedBy {
  anyOf: AnyOf5[];
}

export interface AnyOf5 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties9;
  required?: string[];
}

export interface Properties9 {
  name: Name6;
  email: Email5;
  login: Login5;
  id: Id8;
  node_id: NodeId8;
  avatar_url: AvatarUrl5;
  gravatar_id: GravatarId5;
  url: Url9;
  html_url: HtmlUrl8;
  followers_url: FollowersUrl5;
  following_url: FollowingUrl5;
  gists_url: GistsUrl5;
  starred_url: StarredUrl5;
  subscriptions_url: SubscriptionsUrl5;
  organizations_url: OrganizationsUrl5;
  repos_url: ReposUrl5;
  events_url: EventsUrl6;
  received_events_url: ReceivedEventsUrl5;
  type: Type5;
  site_admin: SiteAdmin5;
  starred_at: StarredAt5;
}

export interface Name6 {
  type: string[];
}

export interface Email5 {
  type: string[];
}

export interface Login5 {
  type: string;
  examples: string[];
}

export interface Id8 {
  type: string;
  examples: number[];
}

export interface NodeId8 {
  type: string;
  examples: string[];
}

export interface AvatarUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId5 {
  type: string[];
  examples: string[];
}

export interface Url9 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl8 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl5 {
  type: string;
  examples: string[];
}

export interface GistsUrl5 {
  type: string;
  examples: string[];
}

export interface StarredUrl5 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl6 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl5 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type5 {
  type: string;
  examples: string[];
}

export interface SiteAdmin5 {
  type: string;
}

export interface StarredAt5 {
  type: string;
  examples: string[];
}

export interface BodyHtml {
  type: string;
}

export interface BodyText {
  type: string;
}

export interface TimelineUrl {
  type: string;
  format: string;
}

export interface Repository {
  title: string;
  description: string;
  type: string;
  properties: Properties10;
  required: string[];
}

export interface Properties10 {
  id: Id9;
  node_id: NodeId9;
  name: Name7;
  full_name: FullName;
  license: License;
  organization: Organization;
  forks: Forks;
  permissions: Permissions;
  owner: Owner;
  private: Private;
  html_url: HtmlUrl12;
  description: Description3;
  fork: Fork;
  url: Url13;
  archive_url: ArchiveUrl;
  assignees_url: AssigneesUrl;
  blobs_url: BlobsUrl;
  branches_url: BranchesUrl;
  collaborators_url: CollaboratorsUrl;
  comments_url: CommentsUrl2;
  commits_url: CommitsUrl;
  compare_url: CompareUrl;
  contents_url: ContentsUrl;
  contributors_url: ContributorsUrl;
  deployments_url: DeploymentsUrl;
  downloads_url: DownloadsUrl;
  events_url: EventsUrl9;
  forks_url: ForksUrl;
  git_commits_url: GitCommitsUrl;
  git_refs_url: GitRefsUrl;
  git_tags_url: GitTagsUrl;
  git_url: GitUrl;
  issue_comment_url: IssueCommentUrl;
  issue_events_url: IssueEventsUrl;
  issues_url: IssuesUrl;
  keys_url: KeysUrl;
  labels_url: LabelsUrl3;
  languages_url: LanguagesUrl;
  merges_url: MergesUrl;
  milestones_url: MilestonesUrl;
  notifications_url: NotificationsUrl;
  pulls_url: PullsUrl;
  releases_url: ReleasesUrl;
  ssh_url: SshUrl;
  stargazers_url: StargazersUrl;
  statuses_url: StatusesUrl;
  subscribers_url: SubscribersUrl;
  subscription_url: SubscriptionUrl;
  tags_url: TagsUrl;
  teams_url: TeamsUrl;
  trees_url: TreesUrl;
  clone_url: CloneUrl;
  mirror_url: MirrorUrl;
  hooks_url: HooksUrl;
  svn_url: SvnUrl;
  homepage: Homepage;
  language: Language;
  forks_count: ForksCount;
  stargazers_count: StargazersCount;
  watchers_count: WatchersCount;
  size: Size;
  default_branch: DefaultBranch;
  open_issues_count: OpenIssuesCount;
  is_template: IsTemplate;
  topics: Topics;
  has_issues: HasIssues;
  has_projects: HasProjects;
  has_wiki: HasWiki;
  has_pages: HasPages;
  has_downloads: HasDownloads;
  has_discussions: HasDiscussions;
  archived: Archived;
  disabled: Disabled;
  visibility: Visibility;
  pushed_at: PushedAt;
  created_at: CreatedAt3;
  updated_at: UpdatedAt3;
  allow_rebase_merge: AllowRebaseMerge;
  template_repository: TemplateRepository;
  temp_clone_token: TempCloneToken2;
  allow_squash_merge: AllowSquashMerge2;
  allow_auto_merge: AllowAutoMerge2;
  delete_branch_on_merge: DeleteBranchOnMerge2;
  allow_update_branch: AllowUpdateBranch2;
  use_squash_pr_title_as_default: UseSquashPrTitleAsDefault2;
  squash_merge_commit_title: SquashMergeCommitTitle2;
  squash_merge_commit_message: SquashMergeCommitMessage2;
  merge_commit_title: MergeCommitTitle2;
  merge_commit_message: MergeCommitMessage2;
  allow_merge_commit: AllowMergeCommit2;
  allow_forking: AllowForking;
  web_commit_signoff_required: WebCommitSignoffRequired;
  subscribers_count: SubscribersCount2;
  network_count: NetworkCount2;
  open_issues: OpenIssues2;
  watchers: Watchers;
  master_branch: MasterBranch;
  starred_at: StarredAt8;
  anonymous_access_enabled: AnonymousAccessEnabled;
}

export interface Id9 {
  description: string;
  type: string;
  examples: number[];
}

export interface NodeId9 {
  type: string;
  examples: string[];
}

export interface Name7 {
  description: string;
  type: string;
  examples: string[];
}

export interface FullName {
  type: string;
  examples: string[];
}

export interface License {
  anyOf: AnyOf6[];
}

export interface AnyOf6 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties11;
  required?: string[];
}

export interface Properties11 {
  key: Key;
  name: Name8;
  url: Url10;
  spdx_id: SpdxId;
  node_id: NodeId10;
  html_url: HtmlUrl9;
}

export interface Key {
  type: string;
  examples: string[];
}

export interface Name8 {
  type: string;
  examples: string[];
}

export interface Url10 {
  type: string[];
  format: string;
  examples: string[];
}

export interface SpdxId {
  type: string[];
  examples: string[];
}

export interface NodeId10 {
  type: string;
  examples: string[];
}

export interface HtmlUrl9 {
  type: string;
  format: string;
}

export interface Organization {
  anyOf: AnyOf7[];
}

export interface AnyOf7 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties12;
  required?: string[];
}

export interface Properties12 {
  name: Name9;
  email: Email6;
  login: Login6;
  id: Id10;
  node_id: NodeId11;
  avatar_url: AvatarUrl6;
  gravatar_id: GravatarId6;
  url: Url11;
  html_url: HtmlUrl10;
  followers_url: FollowersUrl6;
  following_url: FollowingUrl6;
  gists_url: GistsUrl6;
  starred_url: StarredUrl6;
  subscriptions_url: SubscriptionsUrl6;
  organizations_url: OrganizationsUrl6;
  repos_url: ReposUrl6;
  events_url: EventsUrl7;
  received_events_url: ReceivedEventsUrl6;
  type: Type6;
  site_admin: SiteAdmin6;
  starred_at: StarredAt6;
}

export interface Name9 {
  type: string[];
}

export interface Email6 {
  type: string[];
}

export interface Login6 {
  type: string;
  examples: string[];
}

export interface Id10 {
  type: string;
  examples: number[];
}

export interface NodeId11 {
  type: string;
  examples: string[];
}

export interface AvatarUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId6 {
  type: string[];
  examples: string[];
}

export interface Url11 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl10 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl6 {
  type: string;
  examples: string[];
}

export interface GistsUrl6 {
  type: string;
  examples: string[];
}

export interface StarredUrl6 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl7 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl6 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type6 {
  type: string;
  examples: string[];
}

export interface SiteAdmin6 {
  type: string;
}

export interface StarredAt6 {
  type: string;
  examples: string[];
}

export interface Forks {
  type: string;
}

export interface Permissions {
  type: string;
  properties: Properties13;
  required: string[];
}

export interface Properties13 {
  admin: Admin;
  pull: Pull;
  triage: Triage;
  push: Push;
  maintain: Maintain;
}

export interface Admin {
  type: string;
}

export interface Pull {
  type: string;
}

export interface Triage {
  type: string;
}

export interface Push {
  type: string;
}

export interface Maintain {
  type: string;
}

export interface Owner {
  title: string;
  description: string;
  type: string;
  properties: Properties14;
  required: string[];
}

export interface Properties14 {
  name: Name10;
  email: Email7;
  login: Login7;
  id: Id11;
  node_id: NodeId12;
  avatar_url: AvatarUrl7;
  gravatar_id: GravatarId7;
  url: Url12;
  html_url: HtmlUrl11;
  followers_url: FollowersUrl7;
  following_url: FollowingUrl7;
  gists_url: GistsUrl7;
  starred_url: StarredUrl7;
  subscriptions_url: SubscriptionsUrl7;
  organizations_url: OrganizationsUrl7;
  repos_url: ReposUrl7;
  events_url: EventsUrl8;
  received_events_url: ReceivedEventsUrl7;
  type: Type7;
  site_admin: SiteAdmin7;
  starred_at: StarredAt7;
}

export interface Name10 {
  type: string[];
}

export interface Email7 {
  type: string[];
}

export interface Login7 {
  type: string;
  examples: string[];
}

export interface Id11 {
  type: string;
  examples: number[];
}

export interface NodeId12 {
  type: string;
  examples: string[];
}

export interface AvatarUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId7 {
  type: string[];
  examples: string[];
}

export interface Url12 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl11 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl7 {
  type: string;
  examples: string[];
}

export interface GistsUrl7 {
  type: string;
  examples: string[];
}

export interface StarredUrl7 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl8 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl7 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type7 {
  type: string;
  examples: string[];
}

export interface SiteAdmin7 {
  type: string;
}

export interface StarredAt7 {
  type: string;
  examples: string[];
}

export interface Private {
  description: string;
  default: boolean;
  type: string;
}

export interface HtmlUrl12 {
  type: string;
  format: string;
  examples: string[];
}

export interface Description3 {
  type: string[];
  examples: string[];
}

export interface Fork {
  type: string;
}

export interface Url13 {
  type: string;
  format: string;
  examples: string[];
}

export interface ArchiveUrl {
  type: string;
  examples: string[];
}

export interface AssigneesUrl {
  type: string;
  examples: string[];
}

export interface BlobsUrl {
  type: string;
  examples: string[];
}

export interface BranchesUrl {
  type: string;
  examples: string[];
}

export interface CollaboratorsUrl {
  type: string;
  examples: string[];
}

export interface CommentsUrl2 {
  type: string;
  examples: string[];
}

export interface CommitsUrl {
  type: string;
  examples: string[];
}

export interface CompareUrl {
  type: string;
  examples: string[];
}

export interface ContentsUrl {
  type: string;
  examples: string[];
}

export interface ContributorsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface DeploymentsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface DownloadsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface ForksUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface GitCommitsUrl {
  type: string;
  examples: string[];
}

export interface GitRefsUrl {
  type: string;
  examples: string[];
}

export interface GitTagsUrl {
  type: string;
  examples: string[];
}

export interface GitUrl {
  type: string;
  examples: string[];
}

export interface IssueCommentUrl {
  type: string;
  examples: string[];
}

export interface IssueEventsUrl {
  type: string;
  examples: string[];
}

export interface IssuesUrl {
  type: string;
  examples: string[];
}

export interface KeysUrl {
  type: string;
  examples: string[];
}

export interface LabelsUrl3 {
  type: string;
  examples: string[];
}

export interface LanguagesUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface MergesUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface MilestonesUrl {
  type: string;
  examples: string[];
}

export interface NotificationsUrl {
  type: string;
  examples: string[];
}

export interface PullsUrl {
  type: string;
  examples: string[];
}

export interface ReleasesUrl {
  type: string;
  examples: string[];
}

export interface SshUrl {
  type: string;
  examples: string[];
}

export interface StargazersUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface StatusesUrl {
  type: string;
  examples: string[];
}

export interface SubscribersUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface SubscriptionUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface TagsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface TeamsUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface TreesUrl {
  type: string;
  examples: string[];
}

export interface CloneUrl {
  type: string;
  examples: string[];
}

export interface MirrorUrl {
  type: string[];
  format: string;
  examples: string[];
}

export interface HooksUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface SvnUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface Homepage {
  type: string[];
  format: string;
  examples: string[];
}

export interface Language {
  type: string[];
}

export interface ForksCount {
  type: string;
  examples: number[];
}

export interface StargazersCount {
  type: string;
  examples: number[];
}

export interface WatchersCount {
  type: string;
  examples: number[];
}

export interface Size {
  description: string;
  type: string;
  examples: number[];
}

export interface DefaultBranch {
  description: string;
  type: string;
  examples: string[];
}

export interface OpenIssuesCount {
  type: string;
  examples: number[];
}

export interface IsTemplate {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface Topics {
  type: string;
  items: Items4;
}

export interface Items4 {
  type: string;
}

export interface HasIssues {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface HasProjects {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface HasWiki {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface HasPages {
  type: string;
}

export interface HasDownloads {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface HasDiscussions {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface Archived {
  description: string;
  default: boolean;
  type: string;
}

export interface Disabled {
  type: string;
  description: string;
}

export interface Visibility {
  description: string;
  default: string;
  type: string;
}

export interface PushedAt {
  type: string[];
  format: string;
  examples: string[];
}

export interface CreatedAt3 {
  type: string[];
  format: string;
  examples: string[];
}

export interface UpdatedAt3 {
  type: string[];
  format: string;
  examples: string[];
}

export interface AllowRebaseMerge {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface TemplateRepository {
  type: string[];
  properties: Properties15;
}

export interface Properties15 {
  id: Id12;
  node_id: NodeId13;
  name: Name11;
  full_name: FullName2;
  owner: Owner2;
  private: Private2;
  html_url: HtmlUrl14;
  description: Description4;
  fork: Fork2;
  url: Url15;
  archive_url: ArchiveUrl2;
  assignees_url: AssigneesUrl2;
  blobs_url: BlobsUrl2;
  branches_url: BranchesUrl2;
  collaborators_url: CollaboratorsUrl2;
  comments_url: CommentsUrl3;
  commits_url: CommitsUrl2;
  compare_url: CompareUrl2;
  contents_url: ContentsUrl2;
  contributors_url: ContributorsUrl2;
  deployments_url: DeploymentsUrl2;
  downloads_url: DownloadsUrl2;
  events_url: EventsUrl11;
  forks_url: ForksUrl2;
  git_commits_url: GitCommitsUrl2;
  git_refs_url: GitRefsUrl2;
  git_tags_url: GitTagsUrl2;
  git_url: GitUrl2;
  issue_comment_url: IssueCommentUrl2;
  issue_events_url: IssueEventsUrl2;
  issues_url: IssuesUrl2;
  keys_url: KeysUrl2;
  labels_url: LabelsUrl4;
  languages_url: LanguagesUrl2;
  merges_url: MergesUrl2;
  milestones_url: MilestonesUrl2;
  notifications_url: NotificationsUrl2;
  pulls_url: PullsUrl2;
  releases_url: ReleasesUrl2;
  ssh_url: SshUrl2;
  stargazers_url: StargazersUrl2;
  statuses_url: StatusesUrl2;
  subscribers_url: SubscribersUrl2;
  subscription_url: SubscriptionUrl2;
  tags_url: TagsUrl2;
  teams_url: TeamsUrl2;
  trees_url: TreesUrl2;
  clone_url: CloneUrl2;
  mirror_url: MirrorUrl2;
  hooks_url: HooksUrl2;
  svn_url: SvnUrl2;
  homepage: Homepage2;
  language: Language2;
  forks_count: ForksCount2;
  stargazers_count: StargazersCount2;
  watchers_count: WatchersCount2;
  size: Size2;
  default_branch: DefaultBranch2;
  open_issues_count: OpenIssuesCount2;
  is_template: IsTemplate2;
  topics: Topics2;
  has_issues: HasIssues2;
  has_projects: HasProjects2;
  has_wiki: HasWiki2;
  has_pages: HasPages2;
  has_downloads: HasDownloads2;
  archived: Archived2;
  disabled: Disabled2;
  visibility: Visibility2;
  pushed_at: PushedAt2;
  created_at: CreatedAt4;
  updated_at: UpdatedAt4;
  permissions: Permissions2;
  allow_rebase_merge: AllowRebaseMerge2;
  temp_clone_token: TempCloneToken;
  allow_squash_merge: AllowSquashMerge;
  allow_auto_merge: AllowAutoMerge;
  delete_branch_on_merge: DeleteBranchOnMerge;
  allow_update_branch: AllowUpdateBranch;
  use_squash_pr_title_as_default: UseSquashPrTitleAsDefault;
  squash_merge_commit_title: SquashMergeCommitTitle;
  squash_merge_commit_message: SquashMergeCommitMessage;
  merge_commit_title: MergeCommitTitle;
  merge_commit_message: MergeCommitMessage;
  allow_merge_commit: AllowMergeCommit;
  subscribers_count: SubscribersCount;
  network_count: NetworkCount;
}

export interface Id12 {
  type: string;
}

export interface NodeId13 {
  type: string;
}

export interface Name11 {
  type: string;
}

export interface FullName2 {
  type: string;
}

export interface Owner2 {
  type: string;
  properties: Properties16;
}

export interface Properties16 {
  login: Login8;
  id: Id13;
  node_id: NodeId14;
  avatar_url: AvatarUrl8;
  gravatar_id: GravatarId8;
  url: Url14;
  html_url: HtmlUrl13;
  followers_url: FollowersUrl8;
  following_url: FollowingUrl8;
  gists_url: GistsUrl8;
  starred_url: StarredUrl8;
  subscriptions_url: SubscriptionsUrl8;
  organizations_url: OrganizationsUrl8;
  repos_url: ReposUrl8;
  events_url: EventsUrl10;
  received_events_url: ReceivedEventsUrl8;
  type: Type8;
  site_admin: SiteAdmin8;
}

export interface Login8 {
  type: string;
}

export interface Id13 {
  type: string;
}

export interface NodeId14 {
  type: string;
}

export interface AvatarUrl8 {
  type: string;
}

export interface GravatarId8 {
  type: string;
}

export interface Url14 {
  type: string;
}

export interface HtmlUrl13 {
  type: string;
}

export interface FollowersUrl8 {
  type: string;
}

export interface FollowingUrl8 {
  type: string;
}

export interface GistsUrl8 {
  type: string;
}

export interface StarredUrl8 {
  type: string;
}

export interface SubscriptionsUrl8 {
  type: string;
}

export interface OrganizationsUrl8 {
  type: string;
}

export interface ReposUrl8 {
  type: string;
}

export interface EventsUrl10 {
  type: string;
}

export interface ReceivedEventsUrl8 {
  type: string;
}

export interface Type8 {
  type: string;
}

export interface SiteAdmin8 {
  type: string;
}

export interface Private2 {
  type: string;
}

export interface HtmlUrl14 {
  type: string;
}

export interface Description4 {
  type: string;
}

export interface Fork2 {
  type: string;
}

export interface Url15 {
  type: string;
}

export interface ArchiveUrl2 {
  type: string;
}

export interface AssigneesUrl2 {
  type: string;
}

export interface BlobsUrl2 {
  type: string;
}

export interface BranchesUrl2 {
  type: string;
}

export interface CollaboratorsUrl2 {
  type: string;
}

export interface CommentsUrl3 {
  type: string;
}

export interface CommitsUrl2 {
  type: string;
}

export interface CompareUrl2 {
  type: string;
}

export interface ContentsUrl2 {
  type: string;
}

export interface ContributorsUrl2 {
  type: string;
}

export interface DeploymentsUrl2 {
  type: string;
}

export interface DownloadsUrl2 {
  type: string;
}

export interface EventsUrl11 {
  type: string;
}

export interface ForksUrl2 {
  type: string;
}

export interface GitCommitsUrl2 {
  type: string;
}

export interface GitRefsUrl2 {
  type: string;
}

export interface GitTagsUrl2 {
  type: string;
}

export interface GitUrl2 {
  type: string;
}

export interface IssueCommentUrl2 {
  type: string;
}

export interface IssueEventsUrl2 {
  type: string;
}

export interface IssuesUrl2 {
  type: string;
}

export interface KeysUrl2 {
  type: string;
}

export interface LabelsUrl4 {
  type: string;
}

export interface LanguagesUrl2 {
  type: string;
}

export interface MergesUrl2 {
  type: string;
}

export interface MilestonesUrl2 {
  type: string;
}

export interface NotificationsUrl2 {
  type: string;
}

export interface PullsUrl2 {
  type: string;
}

export interface ReleasesUrl2 {
  type: string;
}

export interface SshUrl2 {
  type: string;
}

export interface StargazersUrl2 {
  type: string;
}

export interface StatusesUrl2 {
  type: string;
}

export interface SubscribersUrl2 {
  type: string;
}

export interface SubscriptionUrl2 {
  type: string;
}

export interface TagsUrl2 {
  type: string;
}

export interface TeamsUrl2 {
  type: string;
}

export interface TreesUrl2 {
  type: string;
}

export interface CloneUrl2 {
  type: string;
}

export interface MirrorUrl2 {
  type: string;
}

export interface HooksUrl2 {
  type: string;
}

export interface SvnUrl2 {
  type: string;
}

export interface Homepage2 {
  type: string;
}

export interface Language2 {
  type: string;
}

export interface ForksCount2 {
  type: string;
}

export interface StargazersCount2 {
  type: string;
}

export interface WatchersCount2 {
  type: string;
}

export interface Size2 {
  type: string;
}

export interface DefaultBranch2 {
  type: string;
}

export interface OpenIssuesCount2 {
  type: string;
}

export interface IsTemplate2 {
  type: string;
}

export interface Topics2 {
  type: string;
  items: Items5;
}

export interface Items5 {
  type: string;
}

export interface HasIssues2 {
  type: string;
}

export interface HasProjects2 {
  type: string;
}

export interface HasWiki2 {
  type: string;
}

export interface HasPages2 {
  type: string;
}

export interface HasDownloads2 {
  type: string;
}

export interface Archived2 {
  type: string;
}

export interface Disabled2 {
  type: string;
}

export interface Visibility2 {
  type: string;
}

export interface PushedAt2 {
  type: string;
}

export interface CreatedAt4 {
  type: string;
}

export interface UpdatedAt4 {
  type: string;
}

export interface Permissions2 {
  type: string;
  properties: Properties17;
}

export interface Properties17 {
  admin: Admin2;
  maintain: Maintain2;
  push: Push2;
  triage: Triage2;
  pull: Pull2;
}

export interface Admin2 {
  type: string;
}

export interface Maintain2 {
  type: string;
}

export interface Push2 {
  type: string;
}

export interface Triage2 {
  type: string;
}

export interface Pull2 {
  type: string;
}

export interface AllowRebaseMerge2 {
  type: string;
}

export interface TempCloneToken {
  type: string;
}

export interface AllowSquashMerge {
  type: string;
}

export interface AllowAutoMerge {
  type: string;
}

export interface DeleteBranchOnMerge {
  type: string;
}

export interface AllowUpdateBranch {
  type: string;
}

export interface UseSquashPrTitleAsDefault {
  type: string;
}

export interface SquashMergeCommitTitle {
  type: string;
  enum: string[];
  description: string;
}

export interface SquashMergeCommitMessage {
  type: string;
  enum: string[];
  description: string;
}

export interface MergeCommitTitle {
  type: string;
  enum: string[];
  description: string;
}

export interface MergeCommitMessage {
  type: string;
  enum: string[];
  description: string;
}

export interface AllowMergeCommit {
  type: string;
}

export interface SubscribersCount {
  type: string;
}

export interface NetworkCount {
  type: string;
}

export interface TempCloneToken2 {
  type: string;
}

export interface AllowSquashMerge2 {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface AllowAutoMerge2 {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface DeleteBranchOnMerge2 {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface AllowUpdateBranch2 {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface UseSquashPrTitleAsDefault2 {
  type: string;
  description: string;
  default: boolean;
  deprecated: boolean;
}

export interface SquashMergeCommitTitle2 {
  type: string;
  enum: string[];
  description: string;
}

export interface SquashMergeCommitMessage2 {
  type: string;
  enum: string[];
  description: string;
}

export interface MergeCommitTitle2 {
  type: string;
  enum: string[];
  description: string;
}

export interface MergeCommitMessage2 {
  type: string;
  enum: string[];
  description: string;
}

export interface AllowMergeCommit2 {
  description: string;
  default: boolean;
  type: string;
  examples: boolean[];
}

export interface AllowForking {
  description: string;
  type: string;
}

export interface WebCommitSignoffRequired {
  description: string;
  default: boolean;
  type: string;
}

export interface SubscribersCount2 {
  type: string;
}

export interface NetworkCount2 {
  type: string;
}

export interface OpenIssues2 {
  type: string;
}

export interface Watchers {
  type: string;
}

export interface MasterBranch {
  type: string;
}

export interface StarredAt8 {
  type: string;
  examples: string[];
}

export interface AnonymousAccessEnabled {
  type: string;
  description: string;
}

export interface PerformedViaGithubApp {
  anyOf: AnyOf8[];
}

export interface AnyOf8 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties18;
  required?: string[];
}

export interface Properties18 {
  id: Id14;
  slug: Slug;
  node_id: NodeId15;
  owner: Owner3;
  name: Name13;
  description: Description5;
  external_url: ExternalUrl;
  html_url: HtmlUrl16;
  created_at: CreatedAt5;
  updated_at: UpdatedAt5;
  permissions: Permissions3;
  events: Events;
  installations_count: InstallationsCount;
  client_id: ClientId;
  client_secret: ClientSecret;
  webhook_secret: WebhookSecret;
  pem: Pem;
}

export interface Id14 {
  description: string;
  type: string;
  examples: number[];
}

export interface Slug {
  description: string;
  type: string;
  examples: string[];
}

export interface NodeId15 {
  type: string;
  examples: string[];
}

export interface Owner3 {
  anyOf: AnyOf9[];
}

export interface AnyOf9 {
  type: string;
  title?: string;
  description?: string;
  properties?: Properties19;
  required?: string[];
}

export interface Properties19 {
  name: Name12;
  email: Email8;
  login: Login9;
  id: Id15;
  node_id: NodeId16;
  avatar_url: AvatarUrl9;
  gravatar_id: GravatarId9;
  url: Url16;
  html_url: HtmlUrl15;
  followers_url: FollowersUrl9;
  following_url: FollowingUrl9;
  gists_url: GistsUrl9;
  starred_url: StarredUrl9;
  subscriptions_url: SubscriptionsUrl9;
  organizations_url: OrganizationsUrl9;
  repos_url: ReposUrl9;
  events_url: EventsUrl12;
  received_events_url: ReceivedEventsUrl9;
  type: Type9;
  site_admin: SiteAdmin9;
  starred_at: StarredAt9;
}

export interface Name12 {
  type: string[];
}

export interface Email8 {
  type: string[];
}

export interface Login9 {
  type: string;
  examples: string[];
}

export interface Id15 {
  type: string;
  examples: number[];
}

export interface NodeId16 {
  type: string;
  examples: string[];
}

export interface AvatarUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface GravatarId9 {
  type: string[];
  examples: string[];
}

export interface Url16 {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl15 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowersUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface FollowingUrl9 {
  type: string;
  examples: string[];
}

export interface GistsUrl9 {
  type: string;
  examples: string[];
}

export interface StarredUrl9 {
  type: string;
  examples: string[];
}

export interface SubscriptionsUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface OrganizationsUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface ReposUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface EventsUrl12 {
  type: string;
  examples: string[];
}

export interface ReceivedEventsUrl9 {
  type: string;
  format: string;
  examples: string[];
}

export interface Type9 {
  type: string;
  examples: string[];
}

export interface SiteAdmin9 {
  type: string;
}

export interface StarredAt9 {
  type: string;
  examples: string[];
}

export interface Name13 {
  description: string;
  type: string;
  examples: string[];
}

export interface Description5 {
  type: string[];
  examples: string[];
}

export interface ExternalUrl {
  type: string;
  format: string;
  examples: string[];
}

export interface HtmlUrl16 {
  type: string;
  format: string;
  examples: string[];
}

export interface CreatedAt5 {
  type: string;
  format: string;
  examples: string[];
}

export interface UpdatedAt5 {
  type: string;
  format: string;
  examples: string[];
}

export interface Permissions3 {
  description: string;
  type: string;
  properties: Properties20;
  additionalProperties: AdditionalProperties;
  example: Example;
}

export interface Properties20 {
  issues: Issues;
  checks: Checks;
  metadata: Metadata;
  contents: Contents;
  deployments: Deployments;
}

export interface Issues {
  type: string;
}

export interface Checks {
  type: string;
}

export interface Metadata {
  type: string;
}

export interface Contents {
  type: string;
}

export interface Deployments {
  type: string;
}

export interface AdditionalProperties {
  type: string;
}

export interface Example {
  issues: string;
  deployments: string;
}

export interface Events {
  description: string;
  type: string;
  items: Items6;
  examples: string[];
}

export interface Items6 {
  type: string;
}

export interface InstallationsCount {
  description: string;
  type: string;
  examples: number[];
}

export interface ClientId {
  type: string;
  examples: string[];
}

export interface ClientSecret {
  type: string;
  examples: string[];
}

export interface WebhookSecret {
  type: string[];
  examples: string[];
}

export interface Pem {
  type: string;
  examples: string[];
}

export interface AuthorAssociation {
  title: string;
  type: string;
  description: string;
  enum: string[];
  examples: string[];
}

export interface Reactions {
  title: string;
  type: string;
  properties: Properties21;
  required: string[];
}

export interface Properties21 {
  url: Url17;
  total_count: TotalCount;
  laugh: Laugh;
  confused: Confused;
  heart: Heart;
  hooray: Hooray;
  eyes: Eyes;
  rocket: Rocket;
}

export interface Url17 {
  type: string;
  format: string;
}

export interface TotalCount {
  type: string;
}

export interface Laugh {
  type: string;
}

export interface Confused {
  type: string;
}

export interface Heart {
  type: string;
}

export interface Hooray {
  type: string;
}

export interface Eyes {
  type: string;
}

export interface Rocket {
  type: string;
}
