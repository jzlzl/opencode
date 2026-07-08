# TokenFlow Workspace

TokenFlow Workspace contains two related deliverables for the TokenFlow product concept:

- `token-store`: a React/Vite marketing landing page for TokenFlow.
- `token-store-video`: a Remotion project that renders English and Chinese promotional videos for the same product.

The workspace is useful for building, previewing, and iterating on the TokenFlow brand experience across web and video assets.

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Common Commands](#common-commands)
- [Video Workflow](#video-workflow)
- [Build Outputs](#build-outputs)
- [Development Notes](#development-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

TokenFlow is presented as a unified API layer for AI models such as GPT, Claude, Gemini, and Llama. The web app communicates the product positioning, pricing, integrations, and proof points. The video project turns the same product story into short promotional videos with voiceover, motion graphics, and background music.

This repository currently behaves more like a multi-project workspace than a single packaged application. Each subproject has its own dependencies and scripts.

## Projects

| Project | Path | Purpose |
| --- | --- | --- |
| TokenFlow landing page | `token-store/` | Single-page marketing site built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. |
| TokenFlow promo video | `token-store-video/` | Remotion video project with English and Chinese compositions, dynamic scene duration, generated voiceover, and rendered MP4 outputs. |
| OpenCode/Codex local config | `.opencode/` | Local OpenCode plugin dependency and project skills. Not required for running the landing page or rendering videos. |

## Tech Stack

### Landing Page

- React 19
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Framer Motion
- Lucide React
- Oxlint

### Video Project

- Remotion 4
- React 19
- TypeScript checking with `allowJs`
- Tailwind CSS v4 via `@remotion/tailwind-v4`
- Remotion media utilities for audio duration detection
- PowerShell scripts for local voiceover and music generation

## Directory Structure

```text
D:\opencode
├── AGENTS.md
├── README.md
├── package.json
├── token-store/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── dist/
│   ├── package.json
│   └── vite.config.js
├── token-store-video/
│   ├── src/
│   │   ├── Root.tsx
│   │   ├── TokenFlowVideo.jsx
│   │   ├── TokenFlowVideoZh.jsx
│   │   └── index.ts
│   ├── public/
│   │   ├── music/
│   │   ├── voiceover/
│   │   └── voiceover-zh/
│   ├── out/
│   ├── build/
│   ├── package.json
│   ├── remotion.config.ts
│   └── voiceover-script.md
└── .opencode/
    └── skills/
```

## Prerequisites

- Node.js and npm
- PowerShell, if you need to regenerate local voiceover or music assets
- A local browser for Vite preview and Remotion Studio

No `.env` file is currently required for the checked-in workflows described below.

## Quick Start

Clone or open the workspace, then install dependencies in the subproject you want to work on.

### Run the Landing Page

```powershell
cd D:\opencode\token-store
npm install
npm run dev
```

Vite will print the local preview URL in the terminal. The default is usually:

```text
http://localhost:5173
```

### Run Remotion Studio

```powershell
cd D:\opencode\token-store-video
npm install
npm run dev
```

Remotion Studio will print the local studio URL in the terminal. Use it to preview compositions, inspect frames, and render video assets.

## Common Commands

### Landing Page Commands

Run these from `token-store/`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint checks. |

### Video Commands

Run these from `token-store-video/`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start Remotion Studio. |
| `npm run build` | Bundle the Remotion project into `build/`. |
| `npm run lint` | Run ESLint and TypeScript checks. |
| `npm run upgrade` | Run Remotion's upgrade helper. |
| `npx remotion render` | Render a composition using Remotion defaults or interactive selection. |

## Video Workflow

The Remotion project defines two compositions in `token-store-video/src/Root.tsx`:

| Composition ID | Component | Language |
| --- | --- | --- |
| `TokenFlowIntro` | `TokenFlowVideo` | English |
| `TokenFlowIntroZh` | `TokenFlowVideoZh` | Chinese |

Each composition is divided into seven scenes:

1. Intro
2. Problem
3. Solution
4. Features
5. Pricing
6. Metrics
7. CTA

Scene lengths are calculated from the real voiceover files using `getAudioDuration()`. A 0.5-second padding is added to each scene so that voiceover does not feel clipped.

### Regenerate Audio Assets

English voiceover and background music:

```powershell
cd D:\opencode\token-store-video
.\generate-promo-audio.ps1
```

Chinese voiceover:

```powershell
cd D:\opencode\token-store-video
.\generate-promo-audio-zh.ps1
```

The script content is local and deterministic. It uses Windows speech synthesis and simple generated music/audio rather than a remote TTS service.

### Render Videos

English promo video:

```powershell
cd D:\opencode\token-store-video
npx remotion render TokenFlowIntro out/tokenflow-promo.mp4
```

Chinese promo video:

```powershell
cd D:\opencode\token-store-video
npx remotion render TokenFlowIntroZh out/tokenflow-promo-zh.mp4
```

## Build Outputs

The workspace already contains generated outputs:

| Path | Meaning |
| --- | --- |
| `token-store/dist/` | Static Vite build output for the landing page. |
| `token-store-video/build/` | Remotion bundle output. |
| `token-store-video/out/` | Rendered screenshots and MP4 files. |
| `token-store/output/playwright/` | Existing visual verification screenshots. |

Generated files can be useful for review, but confirm the team's source-control policy before committing build artifacts.

## Development Notes

- Read `AGENTS.md` before making changes. The workspace may be used by multiple Codex sessions or contributors in parallel.
- Keep changes scoped to the task at hand.
- Do not modify lockfiles, environment files, deployment configuration, or shared global configuration unless the task explicitly requires it.
- The landing page is currently concentrated in `token-store/src/App.jsx`. Most copy, pricing, sections, and visual components live in that file.
- The English and Chinese video components are intentionally separate today, but they share a very similar structure. If more languages are added, consider extracting shared scene components and language-specific copy/configuration.
- The root `package.json` only declares `fluent-ffmpeg`; current checked-in project code does not appear to depend on it directly.

## Troubleshooting

### `git status` says this is not a repository

At the workspace root, Git may report:

```text
fatal: not a git repository (or any of the parent directories): .git
```

The root currently does not behave like a valid Git repository, even though a `.git` directory exists. Confirm the intended repository boundary before relying on Git commands.

### `token-store-video` reports dubious ownership

Git may report:

```text
fatal: detected dubious ownership in repository at 'D:/opencode/token-store-video'
```

If this is your machine and you trust the directory, you can mark it as safe:

```powershell
git config --global --add safe.directory D:/opencode/token-store-video
```

Only do this after confirming the directory is trusted.

### Python inventory script does not run

Some local analysis tools may expect the Windows Python launcher `py`. On this machine it may report:

```text
No installed Python found!
```

The application workflows above do not require Python.

### Remotion audio duration fallback is used

If Remotion cannot read the voiceover files, `Root.tsx` falls back to a 28-second total duration. Regenerate voiceover assets and verify files exist under `token-store-video/public/voiceover` and `token-store-video/public/voiceover-zh`.

## Contributing

1. Confirm which project you are changing: `token-store` or `token-store-video`.
2. Read `AGENTS.md`.
3. Install dependencies inside the target subproject.
4. Make focused changes.
5. Run the relevant checks:

```powershell
cd D:\opencode\token-store
npm run lint
npm run build
```

```powershell
cd D:\opencode\token-store-video
npm run lint
```

For video changes, preview in Remotion Studio and render a short sample or final MP4 when appropriate.

## License

The video project declares `UNLICENSED` in `token-store-video/package.json`. No workspace-level license file is currently present. Treat this code and generated assets as private unless the project owner provides a license.
