# 新会话模板 (New Chat Prompt)

在这个工作区开启新的 Codex 对话时，可以使用下面的简短模板。

## 通用任务 (General Task)

```text
这是 [项目名称] 项目的任务。

请按项目默认入口读取文档，然后只读取和当前任务直接相关的源码文件。

任务：
[在这里写任务]
```

## 从交接继续 (Continue From Handoff)

```text
这是 [项目名称] 项目的延续任务。

请按项目默认入口读取文档，并读取这条 handoff：
[path to handoff]

任务：
[在这里写任务]
```

## 审查任务 (Review Task)

```text
这是 [项目名称] 项目的 review 任务。

请按项目默认入口读取文档。默认只 review，不修改代码。

Review 范围：
[写当前 diff、某个文件、某个功能或某个 handoff]
```

## 备注 (Notes)

提示词保持简短，把长期规则放在 `AGENTS.md` 和 `docs/` 文档里维护。