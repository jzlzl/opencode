# Git 工作流 (Git Workflow)

这个文件说明本工作区从本地改动到 GitHub push 的轻量流程。

## 提交前检查 (Before You Commit)

1. 查看当前状态。

```powershell
git status --short --branch
```

2. 查看准备提交的实际 diff。

```powershell
git diff
```

3. 确认没有包含无关改动。

本仓库可能被多个 Codex 会话并行开发，因此 commit 范围要尽量小而清晰。

## 推荐流程 (Recommended Flow)

### 1. 只暂存目标文件 (Stage Intended Files)

```powershell
git add <file-or-folder>
```

优先使用明确路径，不要默认 `git add .`，除非本次任务确实覆盖整个变更范围。

### 2. 创建聚焦提交 (Focused Commit)

```powershell
git commit -m "Describe the change"
```

提交信息应简短、具体，能反映用户可见变化或修复内容。

### 3. 推送到 GitHub (Push To GitHub)

```powershell
git push origin <branch-name>
```

当前仓库已经配置了 GitHub `origin` remote。

## 常见模式 (Common Patterns)

- 如果已经在功能分支上，可以直接 push 当前分支。
- 如果正在 `main` 上工作，先确认任务是否要求新建分支。
- 如果需要审查后再合并，push 分支后再创建 PR。

## 默认不要提交 (Do Not Commit By Default)

除非任务明确要求，不要默认提交：

- `.vscode/`
- `.env`、`.env.local` 等环境文件
- lockfile
- 部署配置
- 全局配置
- 与当前任务无关的共享文件

## 有用检查 (Useful Checks)

提交或 push 前，根据任务类型运行相关检查：

- `token-store/` 中的 `npm run lint`
- `token-store/` 中的 `npm run build`
- `token-store-video/` 中的 `npm run lint`

如果任务包含用户可见界面变化，还应进行本地浏览器检查。

## 相关文档 (Related Docs)

- [项目地图 (Project Map)](PROJECT_MAP.md)
- [命令索引 (Command Index)](COMMANDS.md)
- [新会话模板 (New Chat Prompt)](NEW_CHAT_PROMPT.md)
