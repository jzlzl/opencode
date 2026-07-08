# TokenFlow 工作区

TokenFlow 工作区包含两个围绕同一产品概念交付的项目：

- `token-store`：TokenFlow 的 React/Vite 营销落地页。
- `token-store-video`：TokenFlow 的 Remotion 宣传视频项目，可渲染英文和中文版本视频。

这个工作区适合用来开发、预览和迭代 TokenFlow 的网页展示、宣传视频、配音和品牌视觉资产。

## 目录

- [项目概览](#项目概览)
- [子项目](#子项目)
- [技术栈](#技术栈)
- [目录结构](#目录结构)
- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [常用命令](#常用命令)
- [视频工作流](#视频工作流)
- [构建产物](#构建产物)
- [开发说明](#开发说明)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 项目概览

TokenFlow 被设计为一个统一的 AI 模型 API 接入层，可以把 GPT、Claude、Gemini、Llama 等模型通过一个入口提供给开发者。网页项目负责展示产品定位、功能、价格、集成能力和可信指标。视频项目则把同一套产品叙事做成带配音、动效和背景音乐的宣传视频。

当前目录更像一个多项目工作区，而不是一个单一应用仓库。每个子项目都有自己的依赖和脚本。

## 子项目

| 项目 | 路径 | 说明 |
| --- | --- | --- |
| TokenFlow 营销页 | `token-store/` | 使用 React、Vite、Tailwind CSS、Framer Motion 和 Lucide 图标构建的单页营销网站。 |
| TokenFlow 宣传视频 | `token-store-video/` | Remotion 视频项目，包含英文和中文 Composition、动态场景时长、配音资源和已渲染 MP4。 |
| OpenCode/Codex 本地配置 | `.opencode/` | 本地 OpenCode 插件依赖和项目 skills。运行网页或渲染视频时通常不需要直接处理。 |

## 技术栈

### 营销页

- React 19
- Vite
- Tailwind CSS v4，通过 `@tailwindcss/vite` 接入
- Framer Motion
- Lucide React
- Oxlint

### 视频项目

- Remotion 4
- React 19
- TypeScript 检查，开启了 `allowJs`
- Tailwind CSS v4，通过 `@remotion/tailwind-v4` 接入
- Remotion media utilities，用于读取音频时长
- PowerShell 脚本，用于本地生成配音和背景音乐

## 目录结构

```text
D:\opencode
├── AGENTS.md
├── README.md
├── README.zh-CN.md
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

## 环境要求

- Node.js 和 npm
- PowerShell，如果需要重新生成本地配音或背景音乐
- 本地浏览器，用于访问 Vite 开发服务和 Remotion Studio

当前已提交的工作流不依赖 `.env` 文件。

## 快速开始

进入工作区后，在你要开发的子项目里安装依赖。

### 启动营销页

```powershell
cd D:\opencode\token-store
npm install
npm run dev
```

Vite 会在终端输出本地访问地址，默认通常是：

```text
http://localhost:5173
```

### 启动 Remotion Studio

```powershell
cd D:\opencode\token-store-video
npm install
npm run dev
```

Remotion Studio 会在终端输出本地访问地址。你可以在 Studio 中预览 Composition、检查具体帧，并渲染视频资产。

## 常用命令

### 营销页命令

在 `token-store/` 目录下运行。

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器。 |
| `npm run build` | 构建静态站点到 `dist/`。 |
| `npm run preview` | 本地预览生产构建结果。 |
| `npm run lint` | 运行 Oxlint 检查。 |

### 视频项目命令

在 `token-store-video/` 目录下运行。

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 Remotion Studio。 |
| `npm run build` | 将 Remotion 项目打包到 `build/`。 |
| `npm run lint` | 运行 ESLint 和 TypeScript 检查。 |
| `npm run upgrade` | 运行 Remotion 升级助手。 |
| `npx remotion render` | 使用 Remotion 默认流程或交互选择渲染 Composition。 |

## 视频工作流

Remotion 项目在 `token-store-video/src/Root.tsx` 中定义了两个 Composition：

| Composition ID | 组件 | 语言 |
| --- | --- | --- |
| `TokenFlowIntro` | `TokenFlowVideo` | 英文 |
| `TokenFlowIntroZh` | `TokenFlowVideoZh` | 中文 |

每个 Composition 都拆成七个场景：

1. Intro
2. Problem
3. Solution
4. Features
5. Pricing
6. Metrics
7. CTA

场景时长会根据真实配音文件自动计算。项目使用 `getAudioDuration()` 读取每段音频长度，并给每段额外增加 0.5 秒缓冲，避免配音末尾被截断。

### 重新生成音频资产

生成英文配音和背景音乐：

```powershell
cd D:\opencode\token-store-video
.\generate-promo-audio.ps1
```

生成中文配音：

```powershell
cd D:\opencode\token-store-video
.\generate-promo-audio-zh.ps1
```

这些脚本是本地确定性流程，使用 Windows 语音合成和简单生成音频，不依赖远程 TTS 服务。

### 渲染视频

渲染英文宣传视频：

```powershell
cd D:\opencode\token-store-video
npx remotion render TokenFlowIntro out/tokenflow-promo.mp4
```

渲染中文宣传视频：

```powershell
cd D:\opencode\token-store-video
npx remotion render TokenFlowIntroZh out/tokenflow-promo-zh.mp4
```

## 构建产物

当前工作区中已经存在一些生成产物：

| 路径 | 说明 |
| --- | --- |
| `token-store/dist/` | 营销页的 Vite 静态构建产物。 |
| `token-store-video/build/` | Remotion bundle 构建产物。 |
| `token-store-video/out/` | 已渲染的截图和 MP4 文件。 |
| `token-store/output/playwright/` | 已有的视觉验证截图。 |

这些产物可以用于评审和检查，但是否提交到版本库需要先确认团队约定。

## 开发说明

- 修改前先阅读 `AGENTS.md`。这个工作区可能被多个 Codex 会话或多个开发者并行使用。
- 每次改动都应聚焦在当前任务范围内。
- 除非任务明确要求，不要修改 lockfile、环境文件、部署配置或共享全局配置。
- 营销页当前主要集中在 `token-store/src/App.jsx`。大部分文案、价格、区块和视觉组件都在这个文件里。
- 英文和中文视频组件目前是分开的，但结构非常相似。如果后续增加更多语言，建议抽出共享场景组件和语言配置。
- 根目录 `package.json` 当前只声明了 `fluent-ffmpeg` 依赖；已检查的业务代码中暂未看到直接引用。

## 常见问题

### 根目录运行 `git status` 提示不是仓库

在工作区根目录运行 Git 可能会看到：

```text
fatal: not a git repository (or any of the parent directories): .git
```

当前根目录没有表现为一个可用的 Git 仓库，虽然存在 `.git` 目录。进行协作前，请先确认真正的仓库边界。

### `token-store-video` 提示 dubious ownership

Git 可能会提示：

```text
fatal: detected dubious ownership in repository at 'D:/opencode/token-store-video'
```

如果这是你的机器，并且你信任这个目录，可以将它标记为安全目录：

```powershell
git config --global --add safe.directory D:/opencode/token-store-video
```

只在确认目录可信后执行这条命令。

### Python inventory 脚本无法运行

某些本地分析工具可能依赖 Windows Python launcher `py`。当前机器上可能会出现：

```text
No installed Python found!
```

上面列出的应用运行和视频渲染流程不依赖 Python。

### Remotion 使用了音频时长 fallback

如果 Remotion 无法读取配音文件，`Root.tsx` 会回退到 28 秒总时长。请重新生成配音资源，并确认文件存在于：

- `token-store-video/public/voiceover`
- `token-store-video/public/voiceover-zh`

## 贡献指南

1. 先确认你要修改哪个子项目：`token-store` 或 `token-store-video`。
2. 阅读 `AGENTS.md`。
3. 在目标子项目中安装依赖。
4. 做聚焦的小范围改动。
5. 运行相关检查。

营销页检查：

```powershell
cd D:\opencode\token-store
npm run lint
npm run build
```

视频项目检查：

```powershell
cd D:\opencode\token-store-video
npm run lint
```

如果修改了视频内容，请在 Remotion Studio 中预览，并在适合时渲染短样片或最终 MP4。

## 许可证

`token-store-video/package.json` 中声明为 `UNLICENSED`。当前没有工作区级别的 LICENSE 文件。在项目负责人提供明确许可证前，请将代码和生成资产视为私有内容。
