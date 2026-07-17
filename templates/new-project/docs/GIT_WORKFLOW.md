# Git Workflow

This document describes the lightweight path from local changes to a GitHub push for this workspace.

## Before You Commit

1. Check the current state.

```powershell
git status --short --branch
```

2. Review the diff you actually intend to ship.

```powershell
git diff
```

3. Make sure you are not including unrelated local changes.

## Recommended Flow

### 1. Stage only the intended files

```powershell
git add <file-or-folder>
```

### 2. Create a focused commit

```powershell
git commit -m "Describe the change"
```

### 3. Push to GitHub

```powershell
git push origin <branch-name>
```

## Common Patterns

- If you are already on a feature branch, push that branch directly.
- If you are working on `main`, check whether the task expects a branch first.
- If the task should be reviewed before landing, push the branch and open a pull request.

## What Not To Commit By Default

- `.vscode/`
- Environment files such as `.env` and `.env.local`
- Lockfiles, unless the task explicitly requires them
- Deployment or global configuration files, unless the task explicitly requires them

## Related Docs

- [Project Map](PROJECT_MAP.md)
- [Command Index](COMMANDS.md)
- [New Chat Prompt](NEW_CHAT_PROMPT.md)
