# 项目地图 (Project Map)

## 项目快照 (Project Snapshot)

`[project-root]` 是一个围绕 `[project purpose]` 组织的 `[project type]` 工作区。

- `[app-folder]/`：主应用或主服务。
- `[secondary-folder]/`：可选的辅助应用、后台任务或资产流水线。
- `[docs-or-config-folder]/`：项目配置、协作说明或文档。

大多数工作应发生在主应用或主服务中，辅助目录只在任务需要时阅读和修改。

## 推荐阅读顺序 (Suggested Reading Order)

新开的 Codex 会话建议按这个顺序读取：

1. `AGENTS.md`
2. `README.md` 或 `README.zh-CN.md`
3. `docs/PROJECT_MAP.md`
4. `docs/COMMANDS.md`
5. `docs/GIT_WORKFLOW.md`
6. `docs/HANDOFFS/` 下最新、最相关的交接文件

读完这些入口文档后，再根据当前任务只阅读相关源码文件。

## 架构地图 (Architecture Map)

在这里描述主要运行模块。

### 主应用 (Main App)

- 它是什么
- 入口文件在哪里
- 哪些文件包含核心行为
- 用户会看到什么

### 支撑组件 (Supporting Components)

- 后台任务
- 共享库
- 生成资产
- 配置文件

## 目录指南 (Directory Guide)

- `AGENTS.md`：新会话默认规则、并行开发规则、交接要求。
- `README.md` / `README.zh-CN.md`：人和新 Codex 会话的入口说明。
- `docs/PROJECT_MAP.md`：项目结构、入口文件和风险区域地图。
- `docs/COMMANDS.md`：日常运行、构建、测试命令索引。
- `docs/GIT_WORKFLOW.md`：提交、commit、push 到 GitHub 的轻量流程。
- `docs/NEW_CHAT_PROMPT.md`：新会话可复制的简短提示模板。
- `docs/HANDOFFS/`：任务交接记录。
- `[source-root]/`：项目源码目录。

## 重要配置 (Important Config)

列出控制运行时行为、构建行为、部署和环境设置的文件。

## 运行和访问 (Run And Access)

记录安装、运行、测试、构建和预览项目所需的命令。

## 部署 (Deployment)

如果项目已有部署目标，在这里记录部署平台、环境和入口。

## 开发入口 (Development Entry Points)

列出不同类型修改最应该先打开的文件。

## 风险和未知项 (Risks And Unknowns)

- 其他会话可能存在并行改动。
- 生成文件可能不应该默认提交。
- 外部服务、密钥和环境变量需要谨慎处理。
- 标记容易破坏的区域或尚未确认的假设。

## 维护规则 (Maintenance Rules)

- `AGENTS.md` 是新会话行为规则入口。
- `README.md`、`README.zh-CN.md`、`docs/PROJECT_MAP.md`、`docs/COMMANDS.md` 应与实际项目结构和脚本保持一致。
- `docs/GIT_WORKFLOW.md` 应与实际 Git remote 和提交流程保持一致。
- 新增或更新 `docs/` 下文档时，默认使用中文主文案；标题和关键术语保留英文标记，例如 `Project Map`、`Commands`、`Git Workflow`、`commit`、`push`、`GitHub`、`PR`。
- 每个较大的任务完成后，应新增或更新一条 handoff 记录，避免后续会话重复理解上下文。