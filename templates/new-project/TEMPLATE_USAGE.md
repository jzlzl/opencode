# New Project Template Usage

This folder is a reusable starter layout for a new Codex-managed project.

## Structure

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

## How To Use

1. Copy this directory into the new project.
2. Replace `[Project Name]`, `[project-root]`, `[path]`, and other placeholders.
3. Fill in the real source folders, commands, entry points, and deployment notes.
4. Keep the documents short, stable, and aligned with the actual codebase.
5. Remove `TEMPLATE_USAGE.md` from the new project if the team does not need template instructions there.

## What This Template Covers

- Default Codex rules through `AGENTS.md`
- Project orientation through `docs/PROJECT_MAP.md`
- Run/build/test commands through `docs/COMMANDS.md`
- GitHub commit and push workflow through `docs/GIT_WORKFLOW.md`
- New-chat starter text through `docs/NEW_CHAT_PROMPT.md`
- Task handoff format through `docs/HANDOFFS/TEMPLATE.md`

## What This Template Does Not Cover

It does not prescribe a source-code layout, framework, package manager, deployment provider, or test runner. Add those according to the new project's actual stack.
