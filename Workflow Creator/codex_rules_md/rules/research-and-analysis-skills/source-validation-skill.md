---
name: source-validation-skill
description: Validates the credibility of information sources, highlighting reliability, relevance, and potential biases.
category: Research & Analysis Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Source Validation Skill

## When to use this rule

Validates the credibility of information sources, highlighting reliability, relevance, and potential biases.

## Overview

Filters information for trustworthiness and relevance.

## Keywords

- credibility
- validation
- sources
- research
- bias

## Rule behavior

When this rule is relevant, follow these behaviors:

- Reliability scoring
- Bias detection
- Relevance filtering

## Output requirements

- Source list with links or citations
- Reliability rating and rationale
- Publication or access date when relevant
- Key insights supported by sources
- Bias, uncertainty, and conflict notes

## Instructions

- Check references
- Evaluate author and date
- Highlight trustworthy content
- Prefer primary sources, official documentation, peer-reviewed material, public records, or direct data over summaries.
- Cross-check important claims against more than one source when possible.
- Separate verified facts from interpretation.
- Flag stale, missing, promotional, anonymous, or unverifiable sources.

## Constraints

- Avoid unverified information
- Prioritize high-quality sources
- Do not fabricate citations or claim a source says something it does not support.
- Do not treat source quantity as a substitute for source quality.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
