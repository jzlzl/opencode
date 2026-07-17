# COMMANDS

This file is the compact command index for future Codex sessions.

Read `AGENTS.md` and `docs/PROJECT_MAP.md` first, then use this file for the actual commands.

## Root Workspace

From `D:\opencode`:

```powershell
git status --short --branch
```

Use this first to check whether the workspace already contains local changes.

## `token-store/`

From `D:\opencode\token-store`:

```powershell
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

- `npm install` installs the landing-page dependencies.
- `npm run dev` starts the Vite development server.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs Oxlint checks.

Local preview URL:

```text
http://127.0.0.1:5173
```

## `token-store-video/`

From `D:\opencode\token-store-video`:

```powershell
npm install
npm run dev
npm run build
npm run lint
npm run upgrade
npx remotion render
```

- `npm run dev` opens Remotion Studio.
- `npm run build` bundles the Remotion project.
- `npm run lint` runs ESLint and TypeScript checks.
- `npm run upgrade` runs the Remotion upgrade helper.
- `npx remotion render` renders a composition from the CLI.

## Asset Generation

From `D:\opencode\token-store-video`:

```powershell
.\generate-promo-audio.ps1
.\generate-promo-audio-zh.ps1
```

- `generate-promo-audio.ps1` regenerates English narration and music assets.
- `generate-promo-audio-zh.ps1` regenerates Chinese narration assets.

## Recommended Validation

When touching the landing page:

```powershell
cd D:\opencode\token-store
npm run lint
npm run build
```

When touching the video project:

```powershell
cd D:\opencode\token-store-video
npm run lint
```

If timing or media changes are involved, preview in Remotion Studio and render a sample composition before handing off.
