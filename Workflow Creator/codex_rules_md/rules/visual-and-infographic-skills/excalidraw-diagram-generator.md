---
name: excalidraw-diagram-generator
description: Converts textual concepts or workflows into clear diagram instructions suitable for Excalidraw or other visual tools.
category: Visual & Infographic Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Excalidraw Diagram Generator

## When to use this rule

Converts textual concepts or workflows into clear diagram instructions suitable for Excalidraw or other visual tools.

## Overview

Transforms ideas into diagram structures for visualization, learning, and planning.

## Keywords

- diagrams
- visualization
- excalidraw
- workflows
- mapping

## Rule behavior

When this rule is relevant, follow these behaviors:

- Node and connector generation
- Logical hierarchy
- Clear labels

## Output requirements

- Diagram title
- Nodes and connections
- Layout suggestion
- Output format, such as outline, Mermaid, or Excalidraw JSON, when requested
- Node ids, labels, types, and connection labels for complex diagrams
- Assumptions and omitted details

## Instructions

- Identify main elements
- Create nodes
- Connect nodes logically
- Suggest a layout
- Keep node labels short and action-oriented.
- Use consistent directionality and group related nodes.
- Ask or state the target format before producing tool-specific JSON when unclear.

## Constraints

- Avoid clutter
- Maintain clarity
- Do not claim a diagram is valid Excalidraw JSON unless the JSON structure is actually produced.
- Avoid crossing connectors when a simpler layout is possible.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
