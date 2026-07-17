# Handoff: Documentation Refresh

## Task

Refine the workspace documentation so new Codex sessions have a clearer path from repository rules to project map to command execution.

## Completed

- Reworked `README.md` into a concise entry page with a clear reading order for new sessions.
- Reworked `README.zh-CN.md` with the same onboarding structure in Chinese.
- Updated `docs/PROJECT_MAP.md` to explain how to use the map and where to continue reading.
- Tightened `docs/COMMANDS.md` so it points back to the project map and stays in the execution role.
- Added this handoff note to capture the documentation refresh.

## Not Changed

- Did not touch application code in `token-store/` or `token-store-video/`.
- Did not modify lockfiles, environment files, or deployment config.
- Did not alter the earlier theme-toggle implementation.
- Did not change the existing `.vscode/` untracked state.

## Verification

- Read back the updated Markdown files to confirm the new reading order and file references are consistent.
- Checked `git status` to make sure the edit scope stayed limited to documentation.

## Risks

- The new onboarding flow assumes future sessions actually follow the reading order. If a chat skips the docs and jumps into source immediately, the value drops fast.
- `docs/PROJECT_MAP.md` and `docs/COMMANDS.md` should stay synchronized with the checked-in scripts and structure.

## Next Step

Use the README files for first contact, `docs/PROJECT_MAP.md` for orientation, and `docs/COMMANDS.md` for commands in subsequent sessions.
