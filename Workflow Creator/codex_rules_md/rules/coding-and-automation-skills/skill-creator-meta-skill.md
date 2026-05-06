---
name: skill-creator-meta-skill
description: Generates new AI skills in `.md` format, providing structured name, description, and instruction for future use.
category: Coding & Automation Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Skill Creator (Meta Skill)

## When to use this rule

Generates new AI skills in `.md` format, providing structured name, description, and instruction for future use.

## Overview

Automates creation of AI skills by generating fully structured `.md` files.

## Keywords

- skill creation
- automation
- AI
- md
- modular

## Rule behavior

When this rule is relevant, follow these behaviors:

- Generates skill metadata
- Includes detailed instructions
- Ready-to-use format

## Output requirements

- Skill name
- Description
- Instruction steps
- Trigger conditions and non-trigger conditions
- Inputs, outputs, constraints, and verification guidance
- Safe handling notes for sensitive domains

## Instructions

- Accept an input goal
- Define role, task, and process
- Output a structured `.md` skill
- Use clear metadata that lets the skill be selected only when relevant.
- Include examples only when they reduce ambiguity.
- Keep instructions actionable and testable.

## Constraints

- Maintain clarity
- Ensure usability
- Do not create skills that override higher-priority safety, privacy, or tool-use rules.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
