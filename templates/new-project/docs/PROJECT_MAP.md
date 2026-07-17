# PROJECT MAP

## Project Snapshot

`[project-root]` is a [project type] workspace centered on [project purpose].

- `[app-folder]/` is the main user-facing app or service.
- `[secondary-folder]/` is an optional supporting app, job, or asset pipeline.
- `[docs-or-config-folder]/` contains project-specific configuration and collaboration notes.

Most work should happen in the main app or service, with supporting folders used only when the task needs them.

## Suggested Reading Order

For a new Codex session, read the workspace in this order:

1. `AGENTS.md`
2. `README.md` or `README.zh-CN.md`
3. `docs/PROJECT_MAP.md`
4. `docs/COMMANDS.md`
5. `docs/GIT_WORKFLOW.md`
6. The latest relevant file under `docs/HANDOFFS/`

## Architecture Map

Describe the major runtime pieces here.

### Main App

- What it is
- Where the entry point lives
- What files contain the core behavior
- What the user sees

### Supporting Components

- Background jobs
- Shared libraries
- Generated assets
- Configuration files

## Directory Guide

- `AGENTS.md`: workspace rules for parallel development and handoff hygiene.
- `README.md` / `README.zh-CN.md`: entry pages for humans and new Codex sessions.
- `docs/PROJECT_MAP.md`: stable onboarding map for the project shape and entry points.
- `docs/COMMANDS.md`: compact command index for day-to-day work.
- `docs/GIT_WORKFLOW.md`: lightweight guide for committing and pushing to GitHub.
- `docs/NEW_CHAT_PROMPT.md`: copyable short prompt templates for starting new chats.
- `docs/HANDOFFS/`: task-specific handoff notes for continuation work.
- `[source-root]/`: project source code.

## Important Config

List the files that control runtime behavior, build behavior, deployment, and environment setup.

## Run And Access

Document the commands used to install, run, test, build, and preview the project.

## Deployment

Document where the project is deployed, if applicable.

## Development Entry Points

List the first files someone should open for common kinds of changes.

## Risks And Unknowns

- Parallel edits from other sessions
- Generated files
- External services
- Areas that are easy to break

## Maintenance Rules

- Keep `AGENTS.md` as the behavioral contract for new sessions.
- Keep `README.md`, `README.zh-CN.md`, `docs/PROJECT_MAP.md`, and `docs/COMMANDS.md` aligned with the actual project shape and scripts.
- Keep `docs/GIT_WORKFLOW.md` aligned with the actual Git remote and submission flow.
- Add one handoff record per substantial task so future sessions can continue from the latest state without re-reading the whole project.
