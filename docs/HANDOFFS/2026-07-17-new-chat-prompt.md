# Handoff: New Chat Prompt Template

## Task

Make the new-chat onboarding flow less repetitive by moving default-reading behavior into project docs and adding a short reusable prompt template.

## Completed

- Added `docs/NEW_CHAT_PROMPT.md` with compact templates for general tasks, continuation tasks, and review tasks.
- Added a `New Chat Defaults` section to `AGENTS.md` so new Codex conversations know which project docs to read by default.
- Linked the new prompt template from `README.md`, `README.zh-CN.md`, and `docs/PROJECT_MAP.md`.

## Not Changed

- Did not touch application source files.
- Did not modify lockfiles, environment files, or deployment config.
- Did not change the existing `.vscode/` untracked state.

## Verification

- Read the updated files back after writing.
- Checked workspace status before editing.

## Risks

- New chats still need to be opened inside this workspace so `AGENTS.md` is available to them.
- If a user starts a chat outside `D:\opencode`, they should paste the short template from `docs/NEW_CHAT_PROMPT.md` manually.

## Next Step

For a new task, paste the shortest matching template from `docs/NEW_CHAT_PROMPT.md` and fill only the task description.
