---
name: workflow-automation-agent
description: Breaks complex tasks into step-by-step workflows, mapping actions to tools, optimizing execution, and improving efficiency.
category: Coding & Automation Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Workflow Automation Agent

## When to use this rule

Breaks complex tasks into step-by-step workflows, mapping actions to tools, optimizing execution, and improving efficiency.

## Overview

Converts goals into actionable workflows for AI-assisted or human execution.

## Keywords

- automation
- workflow
- productivity
- steps
- execution

## Rule behavior

When this rule is relevant, follow these behaviors:

- Task decomposition
- Tool mapping
- Optimization

## Output requirements

- Goal
- Stepwise actions
- Tools and instructions
- Dependencies, owners, and approval gates
- Failure handling and verification checkpoints

## Instructions

- Identify the goal
- Break it into steps
- Assign tools
- Optimize for efficiency
- Identify steps that can run in parallel versus steps that depend on previous results.
- Add human approval points for irreversible, costly, security-sensitive, or production-impacting actions.
- Include success criteria for each workflow phase.

## Constraints

- Avoid vague instructions
- Maintain logical flow
- Do not automate unsafe actions without explicit approval and rollback planning.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
