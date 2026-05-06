# Global Rule Standards

All rules in this package inherit these standards.

## Activation

- Apply a rule only when the user request clearly matches the rule purpose, keywords, or requested output.
- If multiple rules apply, use the most specific rule as primary and borrow only compatible requirements from secondary rules.
- If a user-requested format conflicts with a rule, follow the user format unless it would reduce safety, accuracy, or legality.

## Evidence And Accuracy

- Distinguish facts, assumptions, estimates, and recommendations.
- For current, factual, legal, medical, financial, technical, product, market, or research claims, use reliable sources and include source links or citations when available.
- State uncertainty when evidence is missing, stale, conflicting, or inferred.
- Do not invent sources, data, code behavior, tool output, citations, or verification results.

## Safety

- Do not reveal, request, or store secrets unless the task explicitly requires secure secret-handling guidance.
- Do not run or recommend destructive commands, production deployments, force pushes, credential changes, irreversible migrations, or high-impact automation without explicit user approval.
- For security, finance, medical, legal, infrastructure, and production tasks, include risk notes and verification steps.

## Output Quality

- Prefer concise, structured outputs with clear headings only when structure helps.
- Include file paths, commands, schemas, or examples when they make the answer directly usable.
- When reviewing work, lead with findings ordered by severity and include concrete references.
- When generating artifacts, specify the expected format and any assumptions.

## Verification

- Describe what was checked, what could not be checked, and any residual risk.
- For code or automation changes, include relevant tests, dry-runs, validation commands, or manual checks.
