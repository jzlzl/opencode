# 项目地图 (Project Map)

## 项目快照 (Project Snapshot)

`D:\opencode` 是一个围绕 TokenFlow 产品概念组织的小型多项目工作区。

- `token-store/`：主要用户可见应用，是 TokenFlow 的 React + Vite 营销落地页。
- `token-store-video/`：Remotion 宣传视频项目，用于生成英文和中文版本的产品视频。
- `.opencode/`：本地 Codex/OpenCode 配置和技能目录。
- `templates/new-project/`：可复用的新项目 Codex 文档模板。

当前仓库更像一个多项目工作区，而不是单一应用。大多数任务会落在 `token-store/` 或 `token-store-video/` 中。

## 推荐阅读顺序 (Suggested Reading Order)

新开的 Codex 会话建议按这个顺序读取：

1. `AGENTS.md`
2. `README.md` 或 `README.zh-CN.md`
3. `docs/PROJECT_MAP.md`
4. `docs/COMMANDS.md`
5. `docs/GIT_WORKFLOW.md`，如果任务涉及提交、push、GitHub 或 PR
6. `docs/HANDOFFS/` 下与当前任务最相关的交接文件

读完这些入口文档后，再根据当前任务只阅读相关源码文件，不要为了建立上下文默认扫描整个仓库。

## 架构地图 (Architecture Map)

### `token-store/`

`token-store/` 是一个单页 React 应用，使用 Vite 构建。

关键点：

- Tailwind CSS v4 通过 `@tailwindcss/vite` 接入。
- Framer Motion 用于页面动效。
- Lucide React 用于图标。
- 主 UI 集中在 `src/App.jsx`。
- 全局和页面样式主要在 `src/App.css` 与 `src/index.css`。
- `src/main.jsx` 负责挂载 React 应用。

页面包含：

- 固定顶部导航栏
- Hero 区域和宣传视频
- 指标展示区
- 功能卡片
- 价格卡片
- 集成能力展示
- CTA 和页脚

最近的 UI 变更包括右上角主题切换和语言切换。主题状态由 `App.jsx` 管理，亮色/暗色样式主要通过 `App.css` 覆盖。

### `token-store-video/`

`token-store-video/` 是 Remotion 视频项目，用于生成 TokenFlow 宣传视频。

关键点：

- `src/Root.tsx` 定义 Remotion compositions。
- `src/TokenFlowVideo.jsx` 是英文版本。
- `src/TokenFlowVideoZh.jsx` 是中文版本。
- `src/Composition.tsx` 和 `src/index.ts` 是辅助入口。
- `public/voiceover/` 与 `public/voiceover-zh/` 存放生成的配音文件。
- `public/music/` 存放背景音乐资源。
- `generate-promo-audio.ps1` 和 `generate-promo-audio-zh.ps1` 用于本地生成音频资源。

视频项目和落地页项目是分离的，这样同一套产品叙事可以分别用于网页和视频资产。

## 目录指南 (Directory Guide)

- `AGENTS.md`：Codex 默认行为规则、并行开发规则、交接要求。
- `README.md` / `README.zh-CN.md`：人和新 Codex 会话的入口说明。
- `docs/PROJECT_MAP.md`：项目结构、入口文件和风险区域地图。
- `docs/COMMANDS.md`：运行、构建、验证命令索引。
- `docs/GIT_WORKFLOW.md`：提交、commit、push 到 GitHub 的轻量流程。
- `docs/NEW_CHAT_PROMPT.md`：新会话可复制的简短提示模板。
- `docs/HANDOFFS/`：任务交接记录。命名使用 `YYYY-MM-DD-HHMM-short-topic.md`，确保同一天多次交接也能按文件名排序。
- `token-store/src/`：落地页源码。
- `token-store/public/`：落地页静态媒体资源。
- `token-store-video/src/`：Remotion composition 源码。
- `token-store-video/public/`：视频项目的配音、音乐和渲染资源。
- `.agents/`：agent 相关支持文件。
- `.opencode/`：Codex/OpenCode 本地配置。
- `templates/new-project/`：可复制到新项目的 Codex 文档模板。

## 重要配置 (Important Config)

### 根目录 (Root)

- `README.md` 和 `README.zh-CN.md` 指向稳定的项目入口文档。
- 根目录 `package.json` 很小，不是主要项目脚本入口。

### `token-store/`

- `package.json` 定义 `dev`、`build`、`preview`、`lint`。
- `vite.config.js` 配置 Vite。
- `src/App.jsx` 包含大部分页面内容、组件和布局。
- `src/App.css` 与 `src/index.css` 包含全局和页面级样式。

### `token-store-video/`

- `package.json` 定义 `dev`、`build`、`lint`、`upgrade`。
- `remotion.config.ts` 配置 Remotion。
- `tsconfig.json` 配置 TypeScript 检查。
- `eslint.config.mjs` 配置 lint。

## 运行和访问 (Run And Access)

### 落地页 (Landing Page)

在 `D:\opencode\token-store` 下运行：

```powershell
npm install
npm run dev
```

本地 Vite 开发服务通常是：

```text
http://127.0.0.1:5173
```

完整命令见 `docs/COMMANDS.md`。

### 视频项目 (Video Project)

在 `D:\opencode\token-store-video` 下运行：

```powershell
npm install
npm run dev
```

完整命令和音频生成步骤见 `docs/COMMANDS.md`。

## 部署 (Deployment)

当前没有明确的部署配置文件。

已存在的生成产物：

- `token-store/dist/`：Vite 构建产物。
- `token-store-video/build/`：Remotion bundle 产物。
- `token-store-video/out/`：已渲染的截图和视频文件。

当前未看到：

- Vercel / Cloudflare / Netlify 配置
- CI pipeline 配置

## 开发入口 (Development Entry Points)

### 修改落地页

优先查看：

- `token-store/src/App.jsx`
- `token-store/src/App.css`
- `token-store/src/main.jsx`

必要时再看：

- `token-store/src/index.css`
- `token-store/vite.config.js`

### 修改视频项目

优先查看：

- `token-store-video/src/Root.tsx`
- `token-store-video/src/TokenFlowVideo.jsx`
- `token-store-video/src/TokenFlowVideoZh.jsx`

必要时再看：

- `token-store-video/src/Composition.tsx`
- `token-store-video/remotion.config.ts`
- `token-store-video/generate-promo-audio.ps1`
- `token-store-video/generate-promo-audio-zh.ps1`

## 风险和未知项 (Risks And Unknowns)

- 本仓库可能被多个 Codex 会话并行修改，开始前必须确认工作区状态。
- `dist/`、`build/`、`out/` 等生成产物已经存在，提交前要确认是否应该包含。
- `token-store` 的主题系统通过 class-based overrides 实现，后续大改布局时可能需要同步更新样式覆盖。
- 视频项目依赖本地生成的配音文件，音频缺失或重新生成可能改变场景时长。

## 维护规则 (Maintenance Rules)

- `AGENTS.md` 是新会话行为规则入口。
- `README.md`、`README.zh-CN.md`、`docs/PROJECT_MAP.md`、`docs/COMMANDS.md` 应与实际项目结构和脚本保持一致。
- `docs/GIT_WORKFLOW.md` 应与实际 Git remote 和提交流程保持一致。
- 新增或更新 `docs/` 下文档时，默认使用中文主文案；标题和关键术语保留英文标记，例如 `Project Map`、`Commands`、`Git Workflow`、`commit`、`push`、`GitHub`、`PR`。
- 每个较大的任务完成后，应新增或更新一条 handoff 记录，避免后续会话重复理解上下文。
