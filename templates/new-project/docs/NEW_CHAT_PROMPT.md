# New Chat Prompt

Use this short template when starting a new Codex chat for this workspace.

## General Task

```text
This is a task for [project name].

Please read the project defaults and then only the source files directly relevant to the task.

Task:
[write your task here]
```

## Continue From Handoff

```text
This is a continuation task for [project name].

Please read the project defaults and the matching handoff:
[path to handoff]

Task:
[write your task here]
```

## Review Task

```text
This is a review task for [project name].

Please read the project defaults. Default to review only and do not modify code.

Review scope:
[write the diff, file, feature, or handoff]
```

## Notes

Keep the prompt short and let `AGENTS.md` hold the durable rules.
