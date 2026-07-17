# 交接：主题切换与项目文档 (Theme Toggle And Docs)

## 任务 (Task)

为 TokenFlow 落地页新增明亮风格切换，同时保留当前暗色风格作为默认；并创建第一批项目上下文文档，降低后续新会话重新理解项目的成本。

## 已完成 (Completed)

- 在 `token-store/src/App.jsx` 新增右上角主题切换按钮。
- 保持首次加载默认暗色风格。
- 将主题选择持久化到 `localStorage`。
- 在 `token-store/src/App.css` 增加亮色主题覆盖样式。
- 创建 `docs/PROJECT_MAP.md` 作为稳定项目入口文档。
- 创建 `docs/HANDOFFS/TEMPLATE.md` 作为后续任务交接模板。

## 未修改 (Not Changed)

- 没有修改 `.vscode/`。
- 没有修改 lockfile。
- 没有修改部署或环境配置。
- 没有重构 Remotion 视频项目。

## 验证 (Verification)

- 在 `D:\opencode\token-store` 运行 `npm run build`。
- 在 `D:\opencode\token-store` 运行 `npm run lint`。
- 使用浏览器检查 `http://127.0.0.1:5173`。
- 确认主题按钮可在暗色和明亮模式间切换，并更新根节点主题状态。

## 风险 (Risks)

- 亮色样式是基于现有暗色 UI 的 class 覆盖实现；如果后续大改页面结构，相关选择器可能需要同步调整。

## 下一步 (Next Step)

如果落地页进行下一轮大规模 UI 调整，应同步更新 `docs/PROJECT_MAP.md` 并新增 handoff。
