# 交接：新会话模板 (New Chat Prompt)

## 任务 (Task)

减少新会话启动时的重复输入：把默认阅读行为写入项目规则，并补充短提示模板。

## 已完成 (Completed)

- 新增 `docs/NEW_CHAT_PROMPT.md`，包含通用任务、继续 handoff、review、提交任务模板。
- 在 `AGENTS.md` 中加入新会话默认入口规则。
- 在 `README.md`、`README.zh-CN.md`、`docs/PROJECT_MAP.md` 中链接新模板。

## 未修改 (Not Changed)

- 没有修改应用源码。
- 没有修改 lockfile、环境文件或部署配置。
- 没有处理 `.vscode/` 未跟踪状态。

## 验证 (Verification)

- 写入后回读相关文件。
- 编辑前检查工作区状态。

## 风险 (Risks)

- 新会话需要在 `D:\opencode` 工作区中启动，才能自然读取 `AGENTS.md`。
- 如果从其他目录开启对话，需要手动复制 `docs/NEW_CHAT_PROMPT.md` 中的短模板。

## 下一步 (Next Step)

新任务只需复制 `docs/NEW_CHAT_PROMPT.md` 中最匹配的短模板，并填写任务描述。
