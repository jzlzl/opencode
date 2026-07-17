# [项目名称]

这是一个可复用的新项目起步结构，适合放到新的 Codex 管理仓库中。

## 新会话先读什么

如果你在这个项目里打开新的 Codex 对话，建议按这个顺序读取：

1. `AGENTS.md`
2. `docs/PROJECT_MAP.md`
3. `docs/COMMANDS.md`
4. `docs/GIT_WORKFLOW.md`
5. `docs/HANDOFFS/` 下最新、最相关的 handoff 文件

然后只读取和当前任务直接相关的源码文件。

## 模板结构

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

## 如何使用这个模板

- 把 `[项目名称]` 换成真实项目名。
- 补上该项目实际使用的源码目录、命令和入口文件。
- 保持文档简短、稳定、可更新。
- 只保留和新项目匹配的部分。

## 新会话建议顺序

1. 读 `AGENTS.md`
2. 读 `README.md` 或 `README.zh-CN.md`
3. 读 `docs/PROJECT_MAP.md`
4. 读 `docs/COMMANDS.md`
5. 读 `docs/GIT_WORKFLOW.md`
6. 读最新的 handoff

## 备注

这个模板故意保持通用，具体项目需要根据技术栈、部署方式和协作习惯再做裁剪。
