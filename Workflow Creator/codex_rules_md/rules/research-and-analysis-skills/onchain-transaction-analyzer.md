---
name: onchain-transaction-analyzer
description: Analyzes blockchain transactions by tracing wallets, contracts, and token movements and providing simple, understandable explanations.
category: Research & Analysis Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Onchain Transaction Analyzer

## When to use this rule

Analyzes blockchain transactions by tracing wallets, contracts, and token movements and providing simple, understandable explanations.

## Overview

Decodes onchain data into human-readable explanations.

## Keywords

- blockchain
- crypto
- analysis
- transactions
- wallets

## Rule behavior

When this rule is relevant, follow these behaviors:

- Wallet tracking
- Contract mapping
- Token flow visualization
- Simple language

## Output requirements

- Step-by-step explanation
- Key actors and actions
- Summary insights
- Transaction hashes, wallet addresses, contract addresses, chain, and block/time when available
- Links to explorers or data sources when available
- Confidence notes for inferred labels or entity attribution

## Instructions

- Trace wallet and token flows
- Identify key interactions
- Summarize in plain language
- Verify chain, token decimals, contract type, and event direction before drawing conclusions.
- Label unknown wallets as unknown unless a reliable source supports attribution.
- Distinguish transfers, swaps, approvals, mints, burns, bridge events, and contract calls.

## Constraints

- Avoid jargon
- Focus on clarity
- Do not infer identity, intent, profit/loss, or wrongdoing without evidence.
- Do not provide financial advice from transaction analysis alone.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
