# 交接：新项目模板中文化 (New Project Template Chinese Defaults)

## 任务 (Task)

将 `templates/new-project/` 也默认改为中文主文案，并保留标题和关键术语的英文标记，方便复制到新项目后直接沿用同一套文档风格。

## 已完成 (Completed)

- 将 `templates/new-project/AGENTS.md` 改为中文主文案，并新增 `文档风格 / Documentation Style` 规则。
- 将 `templates/new-project/README.md` 和 `README.zh-CN.md` 统一为中文主文案 + 英文标记格式。
- 将 `templates/new-project/TEMPLATE_USAGE.md` 改为中文主文案，并说明模板默认文档风格。
- 将 `templates/new-project/docs/PROJECT_MAP.md`、`COMMANDS.md`、`GIT_WORKFLOW.md`、`NEW_CHAT_PROMPT.md` 改为中文主文案。
- 将 `templates/new-project/docs/HANDOFFS/TEMPLATE.md` 改为中文主交接模板，并加入文件命名和文档风格规则。
- 新增本 handoff 记录。

## 未修改 (Not Changed)

- 没有修改业务源码。
- 没有处理 `.vscode/` 未跟踪状态。
- 没有修改 lockfile、环境文件或部署配置。
- 没有改变根项目已有 handoff 重命名结果。

## 验证 (Verification)

- 已运行 `git status --short --branch`。
- 已回读 `templates/new-project/` 相关模板文件。
- 已写入模板中文化内容。
- 已运行 `git diff --check -- templates\\new-project docs\\HANDOFFS\\2026-07-17-2222-new-project-template-zh.md`，未发现空白错误。
- 已使用 `rg` 检查模板标题是否仍有英文主标题，并将 `AGENTS.md` 顶层标题改为 `智能体指令 (Agent Instructions)`。

## 风险 (Risks)

- `README.md` 和 `README.zh-CN.md` 现在内容相近；这是为了让新项目默认打开 `README.md` 时也能看到中文主文案。如果未来需要严格区分英文/中文入口，可以再拆分。

## 下一步 (Next Step)

后续复制 `templates/new-project/` 到新项目时，替换占位符并按实际技术栈补全命令、入口文件和部署说明即可。
