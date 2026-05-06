# AGENTS.md

Use these repository instructions before editing files in this project.

## Operating Rules

- Inspect relevant files before editing code or rule documentation.
- Make the smallest safe change that solves the request.
- Preserve existing structure, names, and behavior unless the request asks for changes.
- Avoid adding dependencies unless the task clearly requires it or the user approves.
- Do not run destructive git, filesystem, deployment, or production commands without explicit user approval.
- Explain what changed and how it was verified after making edits.

## Rule Library

- The Codex rule library lives in `Workflow Creator/codex_rules_md/`.
- Start with `Workflow Creator/codex_rules_md/AGENTS.md` for rule selection.
- All rules inherit `Workflow Creator/codex_rules_md/GLOBAL-RULE-STANDARDS.md`.
- Use the most specific applicable modular rule in `Workflow Creator/codex_rules_md/rules/`.
- Treat `Workflow Creator/codex_rules_md/all-rules.md` as a consolidated reference, not the only source of truth.
