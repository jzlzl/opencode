# New Chat Prompt

Use this short template when starting a new Codex chat for this workspace.

## General Task

```text
这是 D:\opencode 项目的任务。

请按项目默认入口读取文档，并根据当前任务只读取相关源码文件。

任务：
【写你的任务】
```

## Continue From Handoff

```text
这是 D:\opencode 项目的继续任务。

请按项目默认入口读取文档，并参考这个 handoff：
D:\opencode\docs\HANDOFFS\【handoff 文件名】

任务：
【写你的任务】
```

## Review Task

```text
这是 D:\opencode 项目的 review 任务。

请按项目默认入口读取文档。默认只 review，不修改代码。

Review 范围：
【写当前 diff、某个文件、某个功能或某个 handoff】
```

## Notes

The detailed rules live in `AGENTS.md`, so this prompt intentionally stays short. Do not duplicate rules here unless the project policy changes.
