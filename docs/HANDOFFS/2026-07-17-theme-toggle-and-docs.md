# Handoff: Theme Toggle and Project Docs

## Task

Add a bright-style theme switch to the TokenFlow landing page, keep the current dark style as default, and create project context documents for future Codex sessions.

## Completed

- Added a top-right theme toggle to `token-store/src/App.jsx`.
- Kept the current dark visual style as the default on first load.
- Persisted the selected theme in `localStorage`.
- Added light-theme overrides in `token-store/src/App.css`.
- Created `docs/PROJECT_MAP.md` as a stable project onboarding reference.
- Created `docs/HANDOFFS/TEMPLATE.md` for reusable future handoffs.

## Not Changed

- Did not modify `.vscode/`.
- Did not touch lockfiles.
- Did not change deployment or environment files.
- Did not refactor the Remotion video project.

## Verification

- `npm run build` in `D:\opencode\token-store`
- `npm run lint` in `D:\opencode\token-store`
- Browser check against `http://127.0.0.1:5173`
- Verified the toggle switches between dark and bright modes and updates the root theme state

## Risks

- The bright-mode styling is implemented as class-based overrides on top of the existing dark-first UI. If the landing page structure changes, some selectors may need to be updated.
- The workspace already contained unrelated local changes before this handoff was created.

## Next Step

If the landing page gets another major UI pass, update `docs/PROJECT_MAP.md` and add a new handoff note so the next session can start from the latest shape instead of reconstructing it.
