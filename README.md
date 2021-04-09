# Current PR Branch and URL

Retrieve the branch name related to the current pull request and its URL.

# Usage

```yaml
- name: Retrieve the branch name related to the current pull request and its URL
  id: current_pr_branch
  uses: stefanbauer/action-current-pr-branch@v1
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

Now there are two variables available:

- `${{ steps.current_pr_branch.outputs.branch_name }}` for the current branch name
- `${{ steps.current_pr_branch.outputs.pull_request_title }}` for the current pull request title
- `${{ steps.current_pr_branch.outputs.pull_request_url }}` for the current pull request url

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
