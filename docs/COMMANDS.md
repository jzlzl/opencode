# 命令索引 (Commands)

这个文件是给后续 Codex 会话使用的紧凑命令索引。

开始执行命令前，先阅读 `AGENTS.md` 和 `docs/PROJECT_MAP.md`。如果任务涉及提交、push、GitHub 或 PR，再阅读 `docs/GIT_WORKFLOW.md`。

## 根目录 (Root Workspace)

在 `D:\opencode` 下运行：

```powershell
git status --short --branch
```

作用：确认当前分支、是否落后/领先远端，以及是否存在未提交改动。

## 落地页项目 (token-store)

在 `D:\opencode\token-store` 下运行：

```powershell
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

命令说明：

- `npm install`：安装落地页依赖。
- `npm run dev`：启动 Vite 开发服务器。
- `npm run build`：构建生产静态资源到 `dist/`。
- `npm run preview`：本地预览生产构建结果。
- `npm run lint`：运行 Oxlint 检查。

本地预览地址通常是：

```text
http://127.0.0.1:5173
```

## 视频项目 (token-store-video)

在 `D:\opencode\token-store-video` 下运行：

```powershell
npm install
npm run dev
npm run build
npm run lint
npm run upgrade
npx remotion render
```

命令说明：

- `npm install`：安装视频项目依赖。
- `npm run dev`：启动 Remotion Studio。
- `npm run build`：打包 Remotion 项目。
- `npm run lint`：运行 ESLint 和 TypeScript 检查。
- `npm run upgrade`：运行 Remotion 升级助手。
- `npx remotion render`：通过 CLI 渲染 composition。

## 音频资源生成 (Asset Generation)

在 `D:\opencode\token-store-video` 下运行：

```powershell
.\generate-promo-audio.ps1
.\generate-promo-audio-zh.ps1
```

说明：

- `generate-promo-audio.ps1`：重新生成英文配音和音乐资源。
- `generate-promo-audio-zh.ps1`：重新生成中文配音资源。

## 推荐验证 (Recommended Validation)

修改落地页时：

```powershell
cd D:\opencode\token-store
npm run lint
npm run build
```

修改视频项目时：

```powershell
cd D:\opencode\token-store-video
npm run lint
```

如果任务影响浏览器可见界面，应在本地预览里进行实际 UI 检查。
如果任务影响视频节奏、音频或渲染效果，应在 Remotion Studio 中预览，并在必要时渲染样片。
