# TokenFlow 工作区

TokenFlow 工作区是一个围绕 TokenFlow 产品概念组织的小型多项目仓库。它包含网页落地页、宣传视频项目，以及供 Codex 会话快速接手的文档入口。

## 新会话先读什么

如果你是新开的 Codex 对话，建议按这个顺序读取：

1. `AGENTS.md`
2. `docs/PROJECT_MAP.md`
3. `docs/COMMANDS.md`
4. `docs/HANDOFFS/` 下最新、最相关的 handoff 文件

读完这些，再根据当前任务只打开相关源码文件，不要一上来扫描整个仓库。

## 工作区概览

| 项目 | 路径 | 说明 |
| --- | --- | --- |
| TokenFlow 营销页 | `token-store/` | React + Vite 营销落地页。 |
| TokenFlow 宣传视频 | `token-store-video/` | Remotion 宣传视频项目，包含英文和中文版本。 |
| Codex/OpenCode 配置 | `.opencode/` | 本地技能和配置，帮助后续会话在这个工作区里工作。 |

网页项目是主要的用户可见应用。视频项目则把同一套产品叙事转成带配音和动效的短视频资产。

## 继续往下看

- 要看项目总图和源码入口，打开 `docs/PROJECT_MAP.md`
- 要看常用命令和验证步骤，打开 `docs/COMMANDS.md`
- 要接手一个未完成任务，打开 `docs/HANDOFFS/` 中最新的 handoff
- 要复制新会话开场模板，打开 `docs/NEW_CHAT_PROMPT.md`

## 快速启动

### 营销页

```powershell
cd D:\opencode\token-store
npm install
npm run dev
```

Vite 默认通常会在 `http://127.0.0.1:5173` 提供预览。

### 视频项目

```powershell
cd D:\opencode\token-store-video
npm install
npm run dev
```

Remotion Studio 会在本地启动，用于预览 composition、检查帧和渲染视频。

## 文件分布

### `token-store/`

- `src/App.jsx`：大部分页面内容和区块布局
- `src/App.css` 与 `src/index.css`：全局和页面级样式
- `src/main.jsx`：应用挂载入口
- `public/`：静态媒体资源，例如宣传视频和图标

### `token-store-video/`

- `src/Root.tsx`：Remotion compositions 入口
- `src/TokenFlowVideo.jsx` 和 `src/TokenFlowVideoZh.jsx`：英文与中文版本
- `public/voiceover/` 与 `public/voiceover-zh/`：生成的配音文件
- `public/music/`：背景音乐资源
- `generate-promo-audio.ps1` 和 `generate-promo-audio-zh.ps1`：本地音频生成脚本

## 工作约定

- 修改前先读 `AGENTS.md`
- 默认认为工作区里可能已有其他会话留下的未提交改动
- 保持改动聚焦，不要扩散到无关模块
- 除非任务明确要求，不要改 lockfile、环境文件、部署配置或其他共享配置
- 任务较大时，记得在 `docs/HANDOFFS/` 下补一条交接记录

## 参考文档

- [项目地图](docs/PROJECT_MAP.md)
- [命令索引](docs/COMMANDS.md)
- [新会话模板](docs/NEW_CHAT_PROMPT.md)

## 许可证

`token-store-video/package.json` 中声明为 `UNLICENSED`。当前没有工作区级别的 LICENSE 文件；在项目负责人提供明确许可证之前，请将代码和生成资产视为私有内容。
