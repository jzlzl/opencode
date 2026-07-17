# 新项目模板用法 (New Project Template Usage)

这个目录是可复用的新项目起步结构，适合复制到新的 Codex 管理项目中。

## 结构 (Structure)

```text
templates/new-project/
├── AGENTS.md
├── README.md
├── README.zh-CN.md
├── TEMPLATE_USAGE.md
└── docs/
    ├── PROJECT_MAP.md
    ├── COMMANDS.md
    ├── GIT_WORKFLOW.md
    ├── NEW_CHAT_PROMPT.md
    └── HANDOFFS/
        └── TEMPLATE.md
```

## 如何使用 (How To Use)

1. 将这个目录复制到新项目中。
2. 替换 `[项目名称]`、`[project-root]`、`[path]` 等占位符。
3. 补全真实源码目录、命令、入口文件和部署说明。
4. 保持文档简短、稳定，并与实际代码同步。
5. 如果团队不需要模板说明，可以在新项目中删除 `TEMPLATE_USAGE.md`。

## 文档风格 (Documentation Style)

模板默认采用中文主文案；标题和关键术语保留英文标记，例如 `Project Map`、`Commands`、`Git Workflow`、`commit`、`push`、`GitHub`、`PR`。复制到新项目后，新增或更新 `docs/` 文档时继续保持这个风格。

## 覆盖内容 (What This Template Covers)

- 通过 `AGENTS.md` 提供默认 Codex 规则。
- 通过 `docs/PROJECT_MAP.md` 提供项目导览。
- 通过 `docs/COMMANDS.md` 记录运行、构建、测试命令。
- 通过 `docs/GIT_WORKFLOW.md` 记录 GitHub commit 和 push 流程。
- 通过 `docs/NEW_CHAT_PROMPT.md` 提供新会话简短提示。
- 通过 `docs/HANDOFFS/TEMPLATE.md` 提供任务交接格式。

## 不覆盖内容 (What This Template Does Not Cover)

这个模板不预设源码目录结构、框架、包管理器、部署平台或测试工具。请根据新项目的实际技术栈补充。