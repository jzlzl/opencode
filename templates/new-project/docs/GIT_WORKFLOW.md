# Git 工作流 (Git Workflow)

这个文档记录从本地改动到 GitHub push 的轻量流程。

## 提交前检查 (Before You Commit)

1. 检查当前状态。

```powershell
git status --short --branch
```

2. 查看本次真正准备提交的 diff。

```powershell
git diff
```

3. 确认没有包含无关的本地改动。

## 推荐流程 (Recommended Flow)

### 1. 只暂存本次需要的文件 (Stage Intended Files)

```powershell
git add <file-or-folder>
```

### 2. 创建聚焦的提交 (Create A Focused Commit)

```powershell
git commit -m "Describe the change"
```

### 3. push 到 GitHub (Push To GitHub)

```powershell
git push origin <branch-name>
```

## 常见模式 (Common Patterns)

- 如果已经在 feature branch 上，通常直接 push 当前分支。
- 如果正在 `main` 上工作，先确认任务是否需要新建分支。
- 如果改动需要 review 后再合并，push 分支并创建 PR。

## 默认不要提交什么 (What Not To Commit By Default)

- `.vscode/`
- `.env`、`.env.local` 等环境文件
- lockfile，除非任务明确要求
- 部署或全局配置文件，除非任务明确要求

## 相关文档 (Related Docs)

- [项目地图 (Project Map)](PROJECT_MAP.md)
- [命令索引 (Command Index)](COMMANDS.md)
- [新会话模板 (New Chat Prompt)](NEW_CHAT_PROMPT.md)