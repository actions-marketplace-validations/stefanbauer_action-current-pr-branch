const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        let token = core.getInput('github_token');
        let octokit = new github.getOctokit(token);
        let response = await octokit.pulls.get({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            pull_number: github.context.payload.number,
        });

        core.setOutput('branch_name', response.data.head.ref);
        core.setOutput('pull_request_title', response.data.title);
        core.setOutput('pull_request_url', response.data.html_url);
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();
