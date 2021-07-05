import React from 'react';
import Repositories from './Repositories';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

const mockRepositories = [
  {
    "id": 143565718,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNDM1NjU3MTg=",
    "name": "BabelNetPoc",
    "full_name": "tmlima/BabelNetPoc",
    "private": false,
    "owner": {
      "login": "tmlima",
      "id": 4501468,
      "node_id": "MDQ6VXNlcjQ1MDE0Njg=",
      "avatar_url": "https://avatars.githubusercontent.com/u/4501468?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tmlima",
      "html_url": "https://github.com/tmlima",
      "followers_url": "https://api.github.com/users/tmlima/followers",
      "following_url": "https://api.github.com/users/tmlima/following{/other_user}",
      "gists_url": "https://api.github.com/users/tmlima/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tmlima/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tmlima/subscriptions",
      "organizations_url": "https://api.github.com/users/tmlima/orgs",
      "repos_url": "https://api.github.com/users/tmlima/repos",
      "events_url": "https://api.github.com/users/tmlima/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tmlima/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/tmlima/BabelNetPoc",
    "description": "Obtaining hypernyms and synonyms",
    "fork": false,
    "url": "https://api.github.com/repos/tmlima/BabelNetPoc",
    "forks_url": "https://api.github.com/repos/tmlima/BabelNetPoc/forks",
    "keys_url": "https://api.github.com/repos/tmlima/BabelNetPoc/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tmlima/BabelNetPoc/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tmlima/BabelNetPoc/teams",
    "hooks_url": "https://api.github.com/repos/tmlima/BabelNetPoc/hooks",
    "issue_events_url": "https://api.github.com/repos/tmlima/BabelNetPoc/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tmlima/BabelNetPoc/events",
    "assignees_url": "https://api.github.com/repos/tmlima/BabelNetPoc/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tmlima/BabelNetPoc/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tmlima/BabelNetPoc/tags",
    "blobs_url": "https://api.github.com/repos/tmlima/BabelNetPoc/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tmlima/BabelNetPoc/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tmlima/BabelNetPoc/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tmlima/BabelNetPoc/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tmlima/BabelNetPoc/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tmlima/BabelNetPoc/languages",
    "stargazers_url": "https://api.github.com/repos/tmlima/BabelNetPoc/stargazers",
    "contributors_url": "https://api.github.com/repos/tmlima/BabelNetPoc/contributors",
    "subscribers_url": "https://api.github.com/repos/tmlima/BabelNetPoc/subscribers",
    "subscription_url": "https://api.github.com/repos/tmlima/BabelNetPoc/subscription",
    "commits_url": "https://api.github.com/repos/tmlima/BabelNetPoc/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tmlima/BabelNetPoc/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tmlima/BabelNetPoc/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tmlima/BabelNetPoc/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tmlima/BabelNetPoc/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tmlima/BabelNetPoc/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tmlima/BabelNetPoc/merges",
    "archive_url": "https://api.github.com/repos/tmlima/BabelNetPoc/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tmlima/BabelNetPoc/downloads",
    "issues_url": "https://api.github.com/repos/tmlima/BabelNetPoc/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tmlima/BabelNetPoc/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tmlima/BabelNetPoc/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tmlima/BabelNetPoc/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tmlima/BabelNetPoc/labels{/name}",
    "releases_url": "https://api.github.com/repos/tmlima/BabelNetPoc/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tmlima/BabelNetPoc/deployments",
    "created_at": "2018-08-04T21:59:33Z",
    "updated_at": "2018-08-04T22:07:49Z",
    "pushed_at": "2018-08-04T22:07:45Z",
    "git_url": "git://github.com/tmlima/BabelNetPoc.git",
    "ssh_url": "git@github.com:tmlima/BabelNetPoc.git",
    "clone_url": "https://github.com/tmlima/BabelNetPoc.git",
    "svn_url": "https://github.com/tmlima/BabelNetPoc",
    "homepage": null,
    "size": 18923,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Java",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 155640868,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNTU2NDA4Njg=",
    "name": "correfpt-corpus-scripts",
    "full_name": "tmlima/correfpt-corpus-scripts",
    "private": false,
    "owner": {
      "login": "tmlima",
      "id": 4501468,
      "node_id": "MDQ6VXNlcjQ1MDE0Njg=",
      "avatar_url": "https://avatars.githubusercontent.com/u/4501468?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tmlima",
      "html_url": "https://github.com/tmlima",
      "followers_url": "https://api.github.com/users/tmlima/followers",
      "following_url": "https://api.github.com/users/tmlima/following{/other_user}",
      "gists_url": "https://api.github.com/users/tmlima/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tmlima/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tmlima/subscriptions",
      "organizations_url": "https://api.github.com/users/tmlima/orgs",
      "repos_url": "https://api.github.com/users/tmlima/repos",
      "events_url": "https://api.github.com/users/tmlima/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tmlima/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/tmlima/correfpt-corpus-scripts",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts",
    "forks_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/forks",
    "keys_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/teams",
    "hooks_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/hooks",
    "issue_events_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/events",
    "assignees_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/tags",
    "blobs_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/languages",
    "stargazers_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/stargazers",
    "contributors_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/contributors",
    "subscribers_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/subscribers",
    "subscription_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/subscription",
    "commits_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/merges",
    "archive_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/downloads",
    "issues_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/labels{/name}",
    "releases_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tmlima/correfpt-corpus-scripts/deployments",
    "created_at": "2018-11-01T00:39:40Z",
    "updated_at": "2019-01-28T03:31:03Z",
    "pushed_at": "2019-01-28T03:31:00Z",
    "git_url": "git://github.com/tmlima/correfpt-corpus-scripts.git",
    "ssh_url": "git@github.com:tmlima/correfpt-corpus-scripts.git",
    "clone_url": "https://github.com/tmlima/correfpt-corpus-scripts.git",
    "svn_url": "https://github.com/tmlima/correfpt-corpus-scripts",
    "homepage": null,
    "size": 3367,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "C#",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }
];

describe('Repositores', () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockRepositories)
      })
    );
  });

  it('should list the repositories', async () => {
    let repositories = [];
    await act(async () => {
      repositories = mount(<Repositories/>);
      });

      repositories.update();
    expect(repositories.find('li').length).toBe(2);
  });
});

