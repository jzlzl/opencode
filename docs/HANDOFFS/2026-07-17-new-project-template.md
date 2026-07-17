# Handoff: New Project Template

## Task

Create a reusable starter directory structure for future projects that need the same Codex onboarding, project map, command index, Git workflow, prompt, and handoff conventions.

## Completed

- Added `templates/new-project/` as a reusable project starter.
- Added generic versions of `AGENTS.md`, `README.md`, `README.zh-CN.md`, `docs/PROJECT_MAP.md`, `docs/COMMANDS.md`, `docs/GIT_WORKFLOW.md`, `docs/NEW_CHAT_PROMPT.md`, and `docs/HANDOFFS/TEMPLATE.md`.
- Added `templates/new-project/TEMPLATE_USAGE.md` to explain how to reuse the starter without confusing it with a real project README.
- Linked the starter from the current workspace README files and project map.

## Not Changed

- Did not touch application source files.
- Did not prescribe a framework, source-code layout, package manager, deployment provider, or test runner.
- Did not modify lockfiles, environment files, or deployment config.
- Did not change the existing `.vscode/` untracked state.

## Verification

- Listed the created template files with `rg --files templates\new-project`.
- Read back the template usage guide, template README, and template AGENTS file.
- Checked workspace status after writing.

## Risks

- The starter is intentionally generic. Each new project must fill in real commands, entry points, deployment notes, and risk areas.
- If the current project docs evolve, the template may need to be synced manually.

## Next Step

For a new project, start from `templates/new-project/TEMPLATE_USAGE.md`, copy the starter structure, and replace the placeholders with project-specific details.
