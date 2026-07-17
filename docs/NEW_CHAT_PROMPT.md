# 新会话模板 (New Chat Prompt)

这个文件提供给新 Codex 对话使用的简短开场模板。

详细规则放在 `AGENTS.md` 中，所以这里故意保持简短，避免重复维护两份规则。

## 通用任务 (General Task)

```text
这是 D:\opencode 项目的任务。

请按项目默认入口读取文档，并根据当前任务只读取相关源码文件。

任务：
【写你的任务】
```

## 继续交接任务 (Continue From Handoff)

```text
这是 D:\opencode 项目的继续任务。

请按项目默认入口读取文档，并参考这个 handoff：
D:\opencode\docs\HANDOFFS\【handoff 文件名】

任务：
【写你的任务】
```

## 审查任务 (Review Task)

```text
这是 D:\opencode 项目的 review 任务。

请按项目默认入口读取文档。默认只 review，不修改代码。

Review 范围：
【写当前 diff、某个文件、某个功能或某个 handoff】
```

## 提交任务 (Commit Task)

```text
这是 D:\opencode 项目的提交任务。

请按项目默认入口读取文档，并参考 docs/GIT_WORKFLOW.md。

提交范围：
【写要提交的文件或任务范围】
```

## 说明 (Notes)

- 不要在这个文件里重复 `AGENTS.md` 的详细规则。
- 如果项目规则变化，优先更新 `AGENTS.md`。
- 如果提交流程变化，更新 `docs/GIT_WORKFLOW.md`。
