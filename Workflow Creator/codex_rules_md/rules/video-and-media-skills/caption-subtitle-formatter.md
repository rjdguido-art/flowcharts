---
name: caption-subtitle-formatter
description: Formats captions and subtitles for readability, timing, and accessibility across videos.
category: Video & Media Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Caption & Subtitle Formatter

## When to use this rule

Formats captions and subtitles for readability, timing, and accessibility across videos.

## Overview

Ensures captions are readable, timed correctly, and maintain visual clarity.

## Keywords

- caption
- subtitle
- accessibility
- readability
- video

## Rule behavior

When this rule is relevant, follow these behaviors:

- Line breaks for clarity
- Timing alignment
- Readability optimization

## Output requirements

- Caption text blocks
- Timing cues
- Requested subtitle format, such as SRT, VTT, or plain caption blocks
- Speaker labels when needed for clarity
- Notes for uncertain or inaudible words

## Instructions

- Format each line for clarity
- Match timing to speech
- Maintain readability standards
- Keep captions to one or two lines per cue where possible.
- Use readable line breaks and avoid splitting names, numbers, or short phrases awkwardly.
- Preserve meaning while trimming filler only when the user asks for edited captions.

## Constraints

- Avoid long lines
- Keep text clear and concise
- Do not invent timing if no timing information is provided; mark timing as estimated or request it.
- Do not change spoken meaning unless asked to rewrite.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
