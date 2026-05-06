---
name: flowchart-decision-builder
description: Generates decision trees and flowcharts from textual input to simplify complex decision-making processes.
category: Visual & Infographic Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Flowchart Decision Builder

## When to use this rule

Generates decision trees and flowcharts from textual input to simplify complex decision-making processes.

## Overview

Converts processes into stepwise flowcharts for clear decision-making.

## Keywords

- flowchart
- decision tree
- process
- visualization
- clarity

## Rule behavior

When this rule is relevant, follow these behaviors:

- Node-based structure
- Conditional branching
- Clear labeling

## Output requirements

- Nodes
- Connections
- Layout guidance
- Decision labels and branch conditions
- Start and end states
- Optional Mermaid or JSON when requested

## Instructions

- Identify steps and decisions
- Map conditional paths
- Maintain logical flow
- Use yes/no or mutually exclusive branch labels where possible.
- Make loops explicit and avoid hidden terminal states.
- Validate that every decision branch resolves to another step or an end state.

## Constraints

- Keep diagrams simple
- Avoid unnecessary nodes
- Do not merge branches that have different outcomes without explaining the merge.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
