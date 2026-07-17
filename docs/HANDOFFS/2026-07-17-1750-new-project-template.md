# 交接：新项目模板 (New Project Template)

## 任务 (Task)

整理一套可复用的新项目模板目录，让未来项目能快速获得相同的 Codex 规则、项目地图、命令索引、Git 工作流、新会话模板和 handoff 规范。

## 已完成 (Completed)

- 新增 `templates/new-project/` 模板目录。
- 新增通用版本的 `AGENTS.md`、`README.md`、`README.zh-CN.md`。
- 新增通用版本的 `docs/PROJECT_MAP.md`、`docs/COMMANDS.md`、`docs/GIT_WORKFLOW.md`、`docs/NEW_CHAT_PROMPT.md`、`docs/HANDOFFS/TEMPLATE.md`。
- 新增 `templates/new-project/TEMPLATE_USAGE.md`，说明如何复制和裁剪模板。
- 在当前工作区 README 和项目地图中链接该模板。

## 未修改 (Not Changed)

- 没有修改应用源码。
- 没有规定具体框架、源码布局、包管理器、部署平台或测试工具。
- 没有修改 lockfile、环境文件或部署配置。
- 没有处理 `.vscode/` 未跟踪状态。

## 验证 (Verification)

- 使用 `rg --files templates\new-project` 列出模板文件。
- 回读模板使用说明、模板 README 和模板 AGENTS 文件。
- 检查写入后的工作区状态。

## 风险 (Risks)

- 模板是通用骨架；复制到新项目后必须填写真实命令、入口文件、部署说明和风险区域。
- 如果当前项目文档继续演进，模板可能需要手动同步。

## 下一步 (Next Step)

新项目可以从 `templates/new-project/TEMPLATE_USAGE.md` 开始，复制模板结构并替换占位符。
