# 交接：命令索引 (Command Reference)

## 任务 (Task)

为项目上下文文档补充紧凑的命令索引，让新会话能从项目总览快速进入执行阶段。

## 已完成 (Completed)

- 新增 `docs/COMMANDS.md`。
- 记录根目录状态检查命令、落地页命令、视频项目命令和音频生成命令。
- 在项目地图中挂载命令索引入口。

## 未修改 (Not Changed)

- 没有修改应用源码。
- 没有修改 lockfile、环境文件或部署配置。
- 没有改变主题切换实现。

## 验证 (Verification)

- 根据当前 `package.json` 和脚本文件核对命令名称。
- 确认文档路径和项目结构一致。

## 风险 (Risks)

- 如果后续子项目脚本发生变化，`docs/COMMANDS.md` 需要同步更新。

## 下一步 (Next Step)

新会话应使用 `docs/PROJECT_MAP.md` 定位项目，再使用 `docs/COMMANDS.md` 执行命令。
