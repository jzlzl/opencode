# PROJECT MAP

## Project Snapshot

`D:\opencode` is a small multi-project workspace centered on the TokenFlow product concept.

- `token-store/` is the main user-facing app: a React + Vite marketing site for TokenFlow.
- `token-store-video/` is a Remotion project that renders English and Chinese promo videos for the same product story.
- `.opencode/` contains local Codex/OpenCode configuration and skills that help future sessions work in this workspace.

The current repository shape is intentionally lightweight. Most work happens in one of the two subprojects rather than through a shared app shell.

## Suggested Reading Order

For a new Codex session, read the workspace in this order:

1. `AGENTS.md`
2. `README.md` or `README.zh-CN.md`
3. `docs/PROJECT_MAP.md`
4. `docs/COMMANDS.md`
5. The latest relevant file under `docs/HANDOFFS/`

That sequence gives you the rules, the high-level shape, the execution commands, and the most recent task state without forcing a full repository reread.

## Architecture Map

### `token-store/`

- Single-page React app built with Vite.
- Uses Tailwind CSS v4 through `@tailwindcss/vite`.
- Uses Framer Motion for section animation and Lucide React for iconography.
- The main UI is concentrated in `src/App.jsx`.
- Global visual rules live in `src/App.css` and `src/index.css`.
- `src/main.jsx` mounts the app into `#root`.

The page currently contains:

- a fixed top navigation bar
- hero content with a promo video
- metric/stat sections
- feature cards
- pricing cards
- integrations
- CTA and footer

Recent UI work added a top-right theme switch and language switch. The theme state is driven from `App.jsx` and themed through `App.css`.

### `token-store-video/`

- Remotion project for promotional video output.
- `src/Root.tsx` defines the Remotion compositions.
- `src/TokenFlowVideo.jsx` and `src/TokenFlowVideoZh.jsx` hold the English and Chinese versions.
- `src/Composition.tsx` and `src/index.ts` provide supporting entry points.
- `public/voiceover/` and `public/voiceover-zh/` contain generated audio assets.
- `public/music/` contains background music assets.
- `generate-promo-audio.ps1` and `generate-promo-audio-zh.ps1` generate local narration and music assets.
- `generate-voiceover.mjs` and `generate-voiceover-tts.mjs` are supporting generation scripts.

The video project is intentionally separate from the landing page so the same product story can be shipped as both web and motion assets.

## Directory Guide

- `AGENTS.md`: workspace rules for parallel development and handoff hygiene.
- `README.md` / `README.zh-CN.md`: entry pages for humans and new Codex sessions.
- `docs/PROJECT_MAP.md`: stable onboarding map for the project shape and entry points.
- `docs/COMMANDS.md`: compact command index for day-to-day work.
- `docs/NEW_CHAT_PROMPT.md`: copyable short prompt templates for starting new chats.
- `docs/HANDOFFS/`: task-specific handoff notes for continuation work.
- `token-store/src/`: landing page source code.
- `token-store/public/`: static media for the landing page.
- `token-store-video/src/`: Remotion composition source code.
- `token-store-video/public/`: voiceover, music, and rendered video assets.
- `.agents/`: agent-specific support files and any local handoff artifacts.
- `.opencode/`: Codex/OpenCode local configuration.

## Important Config

### Root

- `README.md` and `README.zh-CN.md` describe the workspace and point new sessions to the durable docs.
- The root `package.json` is minimal and does not define the main product scripts.

### `token-store/`

- `package.json` defines `dev`, `build`, `preview`, and `lint`.
- `vite.config.js` configures the Vite build.
- `src/index.css` and `src/App.css` provide global and app-level styling.
- `src/App.jsx` holds most of the page copy and layout logic.

### `token-store-video/`

- `package.json` defines `dev`, `build`, `lint`, and `upgrade`.
- `remotion.config.ts` configures the Remotion project.
- `tsconfig.json` enables TypeScript checking for the video code.
- `eslint.config.mjs` controls linting.

## Run And Access

### Landing page

From `D:\opencode\token-store`:

```powershell
npm install
npm run dev
```

The local Vite dev server usually opens on:

```text
http://127.0.0.1:5173
```

For the full landing-page command list, see `docs/COMMANDS.md`.

### Video project

From `D:\opencode\token-store-video`:

```powershell
npm install
npm run dev
```

For the full video command list and asset-generation steps, see `docs/COMMANDS.md`.

## Deployment

No explicit deployment target is configured in this workspace snapshot.

What is present:

- Vite build output for the landing page under `token-store/dist/`
- Remotion bundle and rendered outputs under `token-store-video/build/` and `token-store-video/out/`

What is not present in the current repo state:

- no checked-in Vercel/Cloudflare/Netlify deployment config
- no CI pipeline files in the visible workspace root

## Development Entry Points

### Landing page work

Start here:

- `token-store/src/App.jsx`
- `token-store/src/App.css`
- `token-store/src/main.jsx`

Good follow-up files:

- `token-store/src/index.css`
- `token-store/vite.config.js`

### Video work

Start here:

- `token-store-video/src/Root.tsx`
- `token-store-video/src/TokenFlowVideo.jsx`
- `token-store-video/src/TokenFlowVideoZh.jsx`

Good follow-up files:

- `token-store-video/src/Composition.tsx`
- `token-store-video/remotion.config.ts`
- `token-store-video/generate-promo-audio.ps1`
- `token-store-video/generate-promo-audio-zh.ps1`

## Risks And Unknowns

- The workspace is used for parallel Codex sessions, so local changes may already exist before a new task starts.
- Generated artifacts such as `dist/`, `build/`, and `out/` are already present in the repo tree and should be handled carefully.
- The theme system in `token-store` is currently implemented through class-based overrides. Future layout changes may need matching CSS updates.
- The video project relies on locally generated voiceover assets; missing or regenerated audio files can change scene timing.

## Maintenance Rules

- Keep `AGENTS.md` as the behavioral contract for new sessions.
- Keep `README.md`, `README.zh-CN.md`, `docs/PROJECT_MAP.md`, and `docs/COMMANDS.md` aligned with the actual project shape and scripts.
- Add one handoff record per substantial task so future sessions can continue from the latest state without re-reading the whole project.
