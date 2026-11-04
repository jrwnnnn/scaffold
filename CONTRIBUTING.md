# Contributing

First off, thanks for taking the time to contribute! These are the guidelines for contributing to this project.

## Code of Conduct

All contributors are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

## Before Writing Code

For new features or significant changes, [open an issue](../../issues) or comment on an existing one first. This ensures we do not have multiple people working on the same feature and allows us to discuss the approach before you invest time in building it. For existing bugs, you can jump straight to a PR.

## Development Setup

### Prerequisites

Make sure you have the following:

- LTS version of [Node.js](https://nodejs.org/en/download)
- [Git](https://git-scm.com/)

### Getting Started

1. [Fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo) the repository and [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) it locally.

   ```bash
   git clone https://github.com/<your-username>/scaffold.git
   cd zipo
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev             # optional: pass --host flag to expose the server to the local network
   ```

## Development Guidelines

### Branching Strategy

- `main` contains the latest development code.
- Create a dedicated branch for each feature or bug fix using clear prefixes like `feat/new-feature-name` or `fix/issue-description`.

### Code Style

This project enforces a consistent code style using [Prettier](https://prettier.io/). A [Husky](https://typicode.github.io/husky/) pre-commit hook formats your staged files automatically when you commit. CI fails if any file isn't formatted correctly.

```bash
npm run format          # format all files
npm run format:check    # check formatting of all files
```

### Commit Messages

Follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification. Read the guide through if you aren't familiar with it already.

### Pull Request Guidelines

If you're new to pull requests, GitHub's [guide to creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) walks through it.

- Avoid including multiple unrelated features or fixes in a single PR. If unrelated changes can be separated, open separate PRs so they can be reviewed and merged independently.

- If your PR fixes or resolves existing issues, make sure you mention them with a closing keyword, such as `Closes #123`.

- Make sure your PR title follows the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.

- It's ok to have multiple commits in a single PR. You don't have to rebase or force push for your changes as we will squash the commits into one commit when merging.
