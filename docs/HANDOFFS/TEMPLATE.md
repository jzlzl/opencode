# 交接模板 (Handoff Template)

这个模板用于记录任务交接，方便后续 Codex 会话继续工作。

## 文件命名 (File Naming)

使用下面的命名格式，让同一天的多次交接也能按文件名排序：

```text
YYYY-MM-DD-HHMM-short-topic.md
```

示例：

```text
2026-07-17-1740-git-workflow.md
```

使用本地 24 小时时间。主题保持简短，英文小写并用连字符连接。

## 文档风格 (Documentation Style)

交接内容默认使用中文主文案；标题和关键术语可保留英文标记，例如 `Handoff`、`Task`、`Completed`、`Verification`、`commit`、`push`、`GitHub`、`PR`。

## 任务 (Task)

用户要求做什么。

## 已完成 (Completed)

- 修改了哪些文件
- 实现了哪些行为
- 哪些检查已通过

## 未修改 (Not Changed)

- 哪些无关文件被保留未动
- 哪些区域是有意不碰的

## 验证 (Verification)

- 运行了哪些命令
- 是否做了浏览器或视觉检查
- 验证结果是什么

## 风险 (Risks)

- 未完成的后续事项
- 边界情况
- 需要注意的并行改动

## 下一步 (Next Step)

下一个会话最应该继续做什么。
