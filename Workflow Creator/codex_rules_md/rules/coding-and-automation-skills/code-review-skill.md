---
name: code-review-skill
description: Reviews code for bugs, inefficiencies, and adherence to best practices, providing actionable improvement suggestions.
category: Coding & Automation Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Code Review Skill

## When to use this rule

Reviews code for bugs, inefficiencies, and adherence to best practices, providing actionable improvement suggestions.

## Overview

Analyzes code to ensure quality, efficiency, and maintainability.

## Keywords

- code
- review
- bugs
- optimization
- best practices

## Rule behavior

When this rule is relevant, follow these behaviors:

- Error detection
- Optimization recommendations
- Style enforcement

## Output requirements

- Findings first, ordered by severity
- File and line references for each finding when available
- Suggested fixes or mitigation
- Test gaps and residual risk
- Optional summary after findings

## Instructions

- Analyze the changed or relevant code path before commenting.
- Prioritize bugs, regressions, security issues, data loss, performance risks, and missing tests over style preferences.
- Cite concrete evidence with file paths, line numbers, inputs, outputs, or failing scenarios.
- If no issues are found, say so clearly and mention remaining verification limits.

## Constraints

- Maintain accuracy
- Avoid false positives
- Do not invent file references, test results, or behavior.
- Do not bury findings under a long summary.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
