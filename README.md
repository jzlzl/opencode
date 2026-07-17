# TokenFlow Workspace

TokenFlow Workspace is a small multi-project workspace centered on the TokenFlow product concept. It contains a web landing page, a promo-video project, and Codex-specific onboarding notes so new sessions can get oriented quickly without re-reading the entire repository.

## Start Here

If you are opening a new Codex session in this workspace, read these files in order:

1. `AGENTS.md`
2. `docs/PROJECT_MAP.md`
3. `docs/COMMANDS.md`
4. The latest relevant file under `docs/HANDOFFS/`

After that, read only the source files that are directly relevant to the task. That keeps the session focused and avoids colliding with unrelated work.

## Workspace Snapshot

| Project | Path | What it does |
| --- | --- | --- |
| TokenFlow landing page | `token-store/` | React + Vite marketing site for TokenFlow. |
| TokenFlow promo video | `token-store-video/` | Remotion project for English and Chinese promo videos. |
| Codex/OpenCode config | `.opencode/` | Local skills and configuration for Codex sessions. |

The landing page is the primary user-facing app. The video project is a separate deliverable that reuses the same product story in motion form.

## Where To Go Next

- For a project overview and source-entry map, open `docs/PROJECT_MAP.md`.
- For commands and validation steps, open `docs/COMMANDS.md`.
- For GitHub commit and push flow, open `docs/GIT_WORKFLOW.md`.
- For task history and handoff context, open the latest file under `docs/HANDOFFS/`.
- For a copyable new-chat template, open `docs/NEW_CHAT_PROMPT.md`.
- For a reusable new-project starter, open `templates/new-project/TEMPLATE_USAGE.md`.

## Quick Run

### Landing page

```powershell
cd D:\opencode\token-store
npm install
npm run dev
```

The Vite preview usually opens at `http://127.0.0.1:5173`.

### Video project

```powershell
cd D:\opencode\token-store-video
npm install
npm run dev
```

Remotion Studio opens locally and is used to preview compositions, inspect frames, and render video assets.

## What Lives Where

### `token-store/`

- `src/App.jsx` holds most of the page content and section layout.
- `src/App.css` and `src/index.css` hold the global and app-level styling.
- `src/main.jsx` mounts the app.
- `public/` contains static media such as promo videos and icons.

### `token-store-video/`

- `src/Root.tsx` defines the Remotion compositions.
- `src/TokenFlowVideo.jsx` and `src/TokenFlowVideoZh.jsx` define the English and Chinese versions.
- `public/voiceover/` and `public/voiceover-zh/` contain generated narration files.
- `public/music/` contains background audio assets.
- `generate-promo-audio.ps1` and `generate-promo-audio-zh.ps1` regenerate local audio assets.

## Working Rules

- Read `AGENTS.md` before making changes.
- Assume the workspace may already contain uncommitted changes from another session.
- Keep changes focused on the task at hand.
- Avoid modifying lockfiles, environment files, deployment config, or other shared configuration unless the task explicitly requires it.
- When a task is substantial, add or update a handoff note under `docs/HANDOFFS/`.

## Reference Docs

- [Project Map](docs/PROJECT_MAP.md)
- [Command Index](docs/COMMANDS.md)
- [Git Workflow](docs/GIT_WORKFLOW.md)
- [New Chat Prompt](docs/NEW_CHAT_PROMPT.md)
- [New Project Template](templates/new-project/TEMPLATE_USAGE.md)

## License

`token-store-video/package.json` declares `UNLICENSED`. No workspace-level license file is present, so treat this code and the generated assets as private unless the project owner provides a license.
