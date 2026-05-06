# AGENTS.md

Use these instructions for files inside `Workflow Creator/`.

## App Work

- Keep the workflow editor usable as the first screen.
- Preserve existing static app behavior unless the user asks to change it.
- Prefer scoped edits to `index.html`, `styles.css`, and `app.js`.
- Verify JavaScript changes with `node --check app.js` when possible.

## Rule Work

- Codex rules live in `codex_rules_md/`.
- Follow `codex_rules_md/AGENTS.md` and `codex_rules_md/GLOBAL-RULE-STANDARDS.md` when editing rules.
- Keep modular rule files and `codex_rules_md/all-rules.md` consistent.
