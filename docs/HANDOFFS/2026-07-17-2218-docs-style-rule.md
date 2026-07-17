# 交接：文档风格规则 (Docs Style Rule)

## 任务 (Task)

执行下一步建议：以后新增 `docs/` 文档时，默认使用“中文主文案 + 英文标记”的格式，保持文档风格一致。

## 已完成 (Completed)

- 在 `AGENTS.md` 中新增 `文档风格 / Documentation Style` 规则，明确 `docs/` 文档默认使用中文主文案。
- 在 `docs/PROJECT_MAP.md` 的维护规则中补充同样的文档风格要求。
- 在 `docs/HANDOFFS/TEMPLATE.md` 中新增交接文档风格说明，约束后续 handoff 写法。
- 新增本交接记录，继续使用 `YYYY-MM-DD-HHMM-short-topic.md` 命名。

## 未修改 (Not Changed)

- 没有修改业务源码。
- 没有修改 `README.md`、`README.zh-CN.md` 或 `templates/new-project/`。
- 没有处理 `.vscode/` 未跟踪状态。
- 没有修改 lockfile、环境文件或部署配置。

## 验证 (Verification)

- 已在修改前运行 `git status --short --branch`。
- 已回读相关文档，确认规则落点。
- 已回读新增规则段落，并复查 `git status --short --branch`。

## 风险 (Risks)

- 当前规则只约束 `docs/` 目录；`templates/new-project/` 是否也改成中文模板，需要后续单独决定。

## 下一步 (Next Step)

以后新增或更新 `docs/` 文档时，按 `AGENTS.md` 和 `docs/HANDOFFS/TEMPLATE.md` 的规则使用中文主文案，并在标题与关键术语保留英文标记。
