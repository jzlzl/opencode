# 智能体指令 (Agent Instructions)

## 新项目默认入口 / New Project Defaults

当这个模板复制到新的工作区后，新开的 Codex 对话应优先读取：
- `README.md` 或 `README.zh-CN.md`
- `docs/PROJECT_MAP.md`
- `docs/COMMANDS.md`
- `docs/GIT_WORKFLOW.md`
- `docs/HANDOFFS/` 下最新、最相关的交接文件

读取这些文档后，再根据当前任务只阅读直接相关的源码文件；不要为了建立上下文默认扫描整个仓库。

## 文档风格 / Documentation Style

新增或更新 `docs/` 下文档时，默认使用中文主文案；标题和关键术语可保留英文括注或英文原词，例如 `项目地图 (Project Map)`、`命令索引 (Commands)`、`Git 工作流 (Git Workflow)`、`commit`、`push`、`GitHub`、`PR`。

## 并行开发 / Parallel Work

- 修改前先检查当前 git 状态。
- 默认认为工作区里可能已有其他会话或用户留下的未提交改动。
- 不要覆盖无关改动。
- 修改范围保持在当前任务内。
- 避免无关重构、全局格式化或依赖升级。

## 受保护文件 / Protected Files

除非任务明确需要，不要修改：
- `.env`
- `.env.local`
- lockfile
- 部署配置
- 全局项目配置
- 其他与当前任务无关的共享文件

## 任务范围 / Task Scope

- 如果任务不清楚，先做保守判断，只编辑完成任务所必需的文件。
- 如果某个改动可能影响另一个会话，请先说明风险再继续。

## 审查任务 / Review Tasks

- 默认只做 review，不修改代码。
- 优先指出 bug、回归风险、缺失测试和集成风险。
- 只有在用户明确要求修复时才编辑文件。

## 实现任务 / Implementation Tasks

- 保持改动聚焦。
- 复用项目已有风格和工具。
- 涉及用户可见行为时，尽量增加或运行验证。

## 交接 / Handoff

任务结束时，请输出交接摘要，包括：
- 修改了哪些文件
- 实现了什么
- 没有改什么
- 运行了哪些命令或测试
- 验证结果
- 已知风险
- 下一步建议