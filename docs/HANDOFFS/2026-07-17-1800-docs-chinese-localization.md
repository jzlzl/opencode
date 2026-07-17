# 交接：文档中文化 (Docs Chinese Localization)

## 任务 (Task)

将根目录 `docs/` 下主要文档改为中文主显示，同时在标题和关键术语中保留英文标记，方便非中文母语者快速识别。

## 已完成 (Completed)

- 将 `docs/PROJECT_MAP.md` 改为中文主文案，保留 `Project Map`、`Architecture Map`、`Run And Access` 等英文标记。
- 将 `docs/COMMANDS.md` 改为中文主文案，保留 `Commands`、`token-store`、`token-store-video` 等关键标识。
- 将 `docs/GIT_WORKFLOW.md` 改为中文主文案，保留 `Git Workflow`、`commit`、`push`、`GitHub` 等关键术语。
- 将 `docs/NEW_CHAT_PROMPT.md` 改为中文主文案，并保留英文段落标记。
- 将 `docs/HANDOFFS/TEMPLATE.md` 改为中文主模板。
- 将现有 `docs/HANDOFFS/` 历史交接记录改为中文主文案。

## 未修改 (Not Changed)

- 没有修改业务源码。
- 没有修改 `README.md` 或 `README.zh-CN.md`。
- 没有修改 `templates/new-project/` 下的通用模板文档。
- 没有修改 lockfile、环境文件或部署配置。
- 没有处理 `.vscode/` 未跟踪状态。

## 验证 (Verification)

- 回读 `docs/PROJECT_MAP.md`、`docs/COMMANDS.md`、`docs/GIT_WORKFLOW.md`、`docs/NEW_CHAT_PROMPT.md`。
- 回读并改写 `docs/HANDOFFS/` 下现有交接记录。
- 使用 `rg` 检查文档文件清单和当前工作区状态。

## 风险 (Risks)

- 英文标记只保留在标题和关键术语上；如果未来需要完整双语文档，可能需要重新设计文档结构。
- `templates/new-project/` 仍偏通用英文模板；如需要，也可以另做中文模板版本。

## 下一步 (Next Step)

后续新写入 `docs/` 的文档应默认使用中文主文案，标题和关键术语保留英文标记。
