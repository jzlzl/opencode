# Agent Instructions

## New Project Defaults

When this template is copied into a new workspace, new Codex conversations should start by reading:
- `README.md` or `README.zh-CN.md`
- `docs/PROJECT_MAP.md`
- `docs/COMMANDS.md`
- `docs/GIT_WORKFLOW.md`
- the latest relevant file under `docs/HANDOFFS/`

After that, read only the source files directly relevant to the task.

## Parallel Work

- Check the current git status before editing.
- Assume the workspace may already contain uncommitted changes from another session.
- Do not overwrite unrelated changes.
- Keep edits scoped to the current task.
- Avoid unrelated refactors, formatting sweeps, or dependency upgrades.

## Protected Files

Unless the task explicitly requires it, do not modify:
- `.env`
- `.env.local`
- lockfiles
- deployment config
- global project config
- other shared files unrelated to the task

## Task Scope

- If the task is unclear, make a conservative assumption and only edit what is necessary.
- If a change might disrupt another session, explain the risk before proceeding.

## Review Tasks

- Default to review only.
- Call out bugs, regressions, missing tests, and integration risks.
- Only edit files if the user explicitly asks for fixes.

## Implementation Tasks

- Keep changes focused.
- Reuse the existing project style and tools.
- Add verification when the change affects user-visible behavior.

## Handoff

At the end of a task, include:
- modified files
- what changed
- what did not change
- commands or tests run
- verification result
- known risks
- next step
