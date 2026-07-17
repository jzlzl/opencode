# 命令索引 (Commands)

这个文件是给后续 Codex 会话使用的精简命令索引。

请先读取 `AGENTS.md` 和 `docs/PROJECT_MAP.md`，再使用本文件执行具体命令。

提交和 push 步骤见 `docs/GIT_WORKFLOW.md`。

## 根工作区 (Root Workspace)

在 `[project-root]` 下运行：

```powershell
git status --short --branch
```

## 主应用 (Main App)

在这里列出主应用常用的安装、运行、测试、构建和预览命令。

```powershell
[install command]
[dev command]
[test command]
[build command]
[preview command]
```

## 支撑应用或任务 (Supporting App Or Jobs)

在这里列出后台服务、任务运行器、资产流水线或辅助工具使用的命令。

```powershell
[command]
```

## 资产生成 (Asset Generation)

如果项目会在本地生成图片、视频、音频、类型文件或其他资产，在这里记录命令。

```powershell
[asset generation command]
```

## 推荐验证 (Recommended Validation)

在这里写明交接或提交前通常应该运行的检查。

```powershell
[validation command]
```