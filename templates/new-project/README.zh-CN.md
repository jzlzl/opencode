# [项目名称] ([Project Name])

[用一小段话说明这个项目做什么，以及它面向谁或解决什么问题。]

## 新会话先读什么 (Start Here)

如果你在这个项目里打开新的 Codex 对话，建议按这个顺序读取：

1. `AGENTS.md`
2. `docs/PROJECT_MAP.md`
3. `docs/COMMANDS.md`
4. `docs/GIT_WORKFLOW.md`
5. `docs/HANDOFFS/` 下最新、最相关的 handoff 文件

然后只读取和当前任务直接相关的源码文件。

## 模板结构 (Template Structure)

```text
[project-root]
├── AGENTS.md
├── README.md
├── README.zh-CN.md
├── docs/
│   ├── PROJECT_MAP.md
│   ├── COMMANDS.md
│   ├── GIT_WORKFLOW.md
│   ├── NEW_CHAT_PROMPT.md
│   └── HANDOFFS/
│       └── TEMPLATE.md
└── [项目相关源码目录]
```

## 如何使用这个模板 (How To Use)

- 把 `[项目名称]` 换成真实项目名。
- 补上该项目实际使用的源码目录、命令和入口文件。
- 保持文档简短、稳定、可更新。
- 新增或更新 `docs/` 文档时，默认使用中文主文案，标题和关键术语保留英文标记。
- 只保留和新项目匹配的部分。

## 备注 (Notes)

这个模板故意保持通用，具体项目需要根据技术栈、部署方式和协作习惯再做裁剪。