# All Codex Rules

This file contains all converted rules in one place.

## Shared Standards

All rules inherit `GLOBAL-RULE-STANDARDS.md`. The shared standards are included below for convenience.

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


---

---
name: scqa-writing-framework
description: Structures content using the Situation, Complication, Question, Answer framework for clear, logical, and engaging narratives suitable for threads, articles, and reports.
category: Writing & Content Skills
type: codex-rule
source_format: converted-from-skill-description
---

# SCQA Writing Framework

## When to use this rule

Structures content using the Situation, Complication, Question, Answer framework for clear, logical, and engaging narratives suitable for threads, articles, and reports.

## Overview

Transforms unstructured ideas into structured, high-engagement content. It is ideal for educational material, storytelling, business writing, and technical explanations.

## Keywords

- writing
- storytelling
- SCQA
- structured content
- clarity
- narrative
- article
- thread

## Core framework

### Situation

- Establish the context, current state, or background so the audience understands the starting point. Keep it concise, clear, and relevant.

### Complication

- Introduce the problem, tension, or challenge that disrupts the situation and creates curiosity.

### Question

- Frame the key question that naturally arises from the complication. Make it essential and natural.

### Answer

- Deliver the solution, insight, or recommendation that resolves the question logically. Make it clear and actionable.

## Rule behavior

When this rule is relevant, follow these behaviors:

- Logical progression
- Readability optimized
- Curiosity-driven engagement

## Output requirements

- SCQA blocks
- Short paragraphs
- Bullet highlights when useful
- Audience, goal, and channel assumptions when not supplied

## Instructions

- Break input into SCQA sections
- Keep sentences concise
- Avoid unnecessary jargon
- Maintain smooth flow
- Preserve factual accuracy and cite sources when transforming sourced material.

## Constraints

- Do not skip sections
- Avoid repetition
- Prioritize conciseness
- Do not add unsupported claims to make the narrative more dramatic.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: content-repurposing-engine
description: Converts long-form content into multiple formats like social media threads, short video scripts, or summaries while preserving the core message.
category: Writing & Content Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Content Repurposing Engine

## When to use this rule

Converts long-form content into multiple formats like social media threads, short video scripts, or summaries while preserving the core message.

## Overview

Transforms blogs, notes, and articles into varied formats for different channels.

## Keywords

- content
- repurposing
- social media
- threads
- scripts
- short-form
- long-form

## Rule behavior

When this rule is relevant, follow these behaviors:

- Extracts key ideas
- Adapts for platforms
- Maintains tone and clarity

## Output requirements

- Platform-specific content
- Structured sections
- Engaging headlines/hooks
- Source message and audience assumptions
- Notes on any edits, compression, or omitted details

## Instructions

- Analyze original content
- Identify key points
- Rewrite in the target format
- Keep consistent tone and readability
- Preserve quotes, claims, and attribution when source material requires it.
- Adapt length, CTA, and formatting to the named platform or channel.

## Constraints

- Preserve meaning
- Avoid verbosity
- Format must match the channel style
- Do not turn uncertain or nuanced claims into absolute claims.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: tone-style-enforcer
description: Ensures all outputs match a consistent brand or personal tone, maintaining clarity, style, and audience alignment across multiple outputs.
category: Writing & Content Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Tone & Style Enforcer

## When to use this rule

Ensures all outputs match a consistent brand or personal tone, maintaining clarity, style, and audience alignment across multiple outputs.

## Overview

Keeps all generated content aligned with defined style guidelines or brand voice.

## Keywords

- style
- tone
- brand voice
- consistency
- clarity
- writing

## Rule behavior

When this rule is relevant, follow these behaviors:

- Tone preservation
- Consistency across outputs
- Formatting enforcement

## Output requirements

- Text aligned with style guide
- Optional bullet structure
- Clean, professional response
- Style assumptions when no tone guide is provided
- Before/after notes when editing existing text

## Instructions

- Apply the defined tone to all input
- Check for style inconsistencies
- Adjust language, structure, and formatting
- Preserve factual meaning, required terminology, and compliance language.
- Ask for or infer the target audience only when it materially affects tone.

## Constraints

- Do not deviate from the selected tone
- Maintain clarity
- Do not sacrifice accuracy or accessibility for style.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: long-form-summary-compressor
description: Condenses long text into concise summaries, keeping essential ideas intact for quick consumption and understanding.
category: Writing & Content Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Long-Form to Summary Compressor

## When to use this rule

Condenses long text into concise summaries, keeping essential ideas intact for quick consumption and understanding.

## Overview

Reduces complex content into digestible summaries for easy reading.

## Keywords

- summarization
- long-form
- clarity
- conciseness
- insights

## Rule behavior

When this rule is relevant, follow these behaviors:

- Key point extraction
- Bullet or paragraph output
- Simplifies dense material

## Output requirements

- Concise paragraph
- Optional bullet points
- Key omissions or scope limits when summarizing selectively
- Source references when the input includes citations or source labels

## Instructions

- Identify main points
- Remove redundancy
- Produce a readable, actionable summary
- Preserve important caveats, dates, quantities, and named entities.
- Separate summary from recommendations when both are requested.

## Constraints

- Do not miss critical information
- Do not add filler
- Do not add conclusions not supported by the source text.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: structured-copywriting-skill
description: Generates high-impact copy with clear hooks, structured flow, and concise messaging for marketing, articles, and social media content.
category: Writing & Content Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Structured Copywriting Skill

## When to use this rule

Generates high-impact copy with clear hooks, structured flow, and concise messaging for marketing, articles, and social media content.

## Overview

Produces persuasive, well-structured copy with strong hooks and calls to action.

## Keywords

- copywriting
- marketing
- social media
- structured content
- hooks
- engagement

## Rule behavior

When this rule is relevant, follow these behaviors:

- Strong hooks
- Sectioned flow
- CTA inclusion
- Concise and readable copy

## Output requirements

- Sections
- Bullet points
- Hooks
- Conclusion
- Audience, offer, channel, and conversion goal
- Claims or proof points separated from creative language

## Instructions

- Craft an attention-grabbing opening
- Organize main points clearly
- Include an actionable CTA
- Avoid unnecessary filler
- Keep claims accurate, specific, and supportable.
- Match CTA strength to the user intent and funnel stage.

## Constraints

- Maintain readability
- Do not overcomplicate the copy
- Do not create deceptive urgency, false scarcity, or unsupported performance claims.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

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


---

---
name: infographic-builder
description: Turns textual content into structured infographic formats suitable for reports, presentations, and educational materials.
category: Visual & Infographic Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Infographic Builder

## When to use this rule

Turns textual content into structured infographic formats suitable for reports, presentations, and educational materials.

## Overview

Generates visual-friendly summaries from text, highlighting steps, processes, or data points.

## Keywords

- infographic
- visual
- summary
- chart
- design

## Rule behavior

When this rule is relevant, follow these behaviors:

- Sectioned breakdown
- Bullet or step representation
- Readable visual format

## Output requirements

- Steps
- Headings
- Visual cues
- Optional icons or markers
- Target audience and format assumptions
- Suggested hierarchy, grouping, and reading order

## Instructions

- Extract key points
- Organize content visually
- Apply concise formatting
- Preserve data labels, units, source notes, and caveats.
- Use visual cues that support comprehension rather than decoration.

## Constraints

- Avoid excessive text
- Maintain clarity
- Do not distort data or imply unsupported comparisons.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

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


---

---
name: ui-ux-layout-advisor
description: Advises on interface layouts to optimize clarity, spacing, hierarchy, and usability.
category: Visual & Infographic Skills
type: codex-rule
source_format: converted-from-skill-description
---

# UI/UX Layout Advisor

## When to use this rule

Advises on interface layouts to optimize clarity, spacing, hierarchy, and usability.

## Overview

Provides structured suggestions for designing clean and usable interfaces.

## Keywords

- ui
- ux
- layout
- design
- hierarchy
- clarity

## Rule behavior

When this rule is relevant, follow these behaviors:

- Spacing and alignment suggestions
- Hierarchy optimization
- Accessibility considerations

## Output requirements

- Layout instructions
- Element positioning
- Optional visual hints
- Accessibility and responsive behavior notes
- Priority recommendations separated from optional polish
- Assumptions about users, device sizes, and constraints

## Instructions

- Analyze the input design
- Suggest an optimal layout
- Maintain readability and hierarchy
- Consider keyboard flow, contrast, tap targets, empty states, and error states.
- Match recommendations to the product context instead of defaulting to generic landing-page patterns.

## Constraints

- Do not overcrowd the layout
- Prioritize clarity
- Do not recommend inaccessible contrast, tiny touch targets, or text that depends only on color.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: deep-research-synthesizer
description: Synthesizes insights from large datasets, filters irrelevant data, identifies patterns, and produces actionable summaries.
category: Research & Analysis Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Deep Research Synthesizer

## When to use this rule

Synthesizes insights from large datasets, filters irrelevant data, identifies patterns, and produces actionable summaries.

## Overview

Converts large amounts of text into structured insights and actionable takeaways.

## Keywords

- research
- synthesis
- insights
- analysis
- knowledge

## Rule behavior

When this rule is relevant, follow these behaviors:

- Filters low-value information
- Highlights patterns
- Creates structured output

## Output requirements

- Key insights
- Supporting details
- Summary paragraph
- Source references for factual claims when available
- Confidence levels or caveats for uncertain findings
- Open questions or missing data

## Instructions

- Identify key points
- Remove irrelevant content
- Organize logically
- Group evidence by theme and strength.
- Preserve important dissenting or conflicting evidence.
- Separate source-supported findings from synthesis and recommendations.

## Constraints

- Avoid generic summaries
- Focus on utility
- Do not omit material contradictions.
- Do not overstate certainty beyond the evidence.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

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


---

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


---

---
name: competitive-intelligence-skill
description: Compares products, protocols, or tools to provide structured analysis of strengths, weaknesses, and opportunities.
category: Research & Analysis Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Competitive Intelligence Skill

## When to use this rule

Compares products, protocols, or tools to provide structured analysis of strengths, weaknesses, and opportunities.

## Overview

Delivers comparative insights for business, tech, or market research.

## Keywords

- analysis
- competitive
- research
- comparison
- strategy

## Rule behavior

When this rule is relevant, follow these behaviors:

- Feature comparison
- SWOT-style analysis
- Recommendations

## Output requirements

- Bullet comparison
- Strengths and weaknesses
- Key takeaways
- Source-backed evidence
- Date or version context for time-sensitive comparisons
- Recommendation with assumptions and tradeoffs

## Instructions

- Identify competitors or tools
- Compare features
- Highlight differences and risks
- Verify current facts from primary or reliable sources when the comparison may affect spend, adoption, or strategy.
- Separate objective facts, inferred positioning, and recommendations.
- Include pricing, availability, limitations, and switching costs when relevant.

## Constraints

- Avoid bias
- Focus on actionable insights
- Do not rely only on marketing copy when independent or primary data is available.
- Do not present outdated feature or pricing information as current.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: knowledge-structuring-skill
description: Organizes unstructured information into clear frameworks, bullet points, or structured notes for easier understanding and application.
category: Research & Analysis Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Knowledge Structuring Skill

## When to use this rule

Organizes unstructured information into clear frameworks, bullet points, or structured notes for easier understanding and application.

## Overview

Transforms messy input into structured, usable knowledge.

## Keywords

- knowledge
- structuring
- frameworks
- organization
- notes

## Rule behavior

When this rule is relevant, follow these behaviors:

- Categorizes ideas
- Creates logical hierarchy
- Bullet formatting

## Output requirements

- Structured framework
- Key points
- Optional notes
- Definitions, assumptions, and unresolved questions when helpful
- Source references when structuring sourced research

## Instructions

- Identify major topics
- Group related ideas
- Present clearly and concisely
- Preserve relationships, hierarchy, dependencies, and caveats.
- Choose the structure that best fits the material, such as outline, table, taxonomy, timeline, or decision tree.

## Constraints

- Avoid ambiguity
- Maintain readability
- Do not flatten important nuance just to make the structure simpler.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: video-script-generator
description: Generates video scripts with hooks, structured sections, pacing, and call-to-actions optimized for engagement and retention.
category: Video & Media Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Video Script Generator

## When to use this rule

Generates video scripts with hooks, structured sections, pacing, and call-to-actions optimized for engagement and retention.

## Overview

Produces structured scripts for short and long-form video content.

## Keywords

- video
- scripts
- hooks
- engagement
- pacing
- content

## Rule behavior

When this rule is relevant, follow these behaviors:

- Strong opening hooks
- Sectioned content
- Clear calls-to-action

## Output requirements

- Hook
- Content sections
- Closing summary
- Target audience, platform, length, and CTA assumptions
- Beats, narration, and visual notes when useful

## Instructions

- Start with a hook
- Organize main points
- Maintain pacing
- Include a CTA
- Keep claims supportable and match pacing to the requested duration.
- Mark optional b-roll, on-screen text, or editing notes separately from spoken script.

## Constraints

- Avoid filler
- Maintain audience attention
- Avoid clickbait that misrepresents the content.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: video-editing-planner
description: Suggests editing structure, scene cuts, transitions, and pacing for improved video content quality and engagement.
category: Video & Media Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Video Editing Planner

## When to use this rule

Suggests editing structure, scene cuts, transitions, and pacing for improved video content quality and engagement.

## Overview

Assists in planning efficient, engaging edits.

## Keywords

- video
- editing
- pacing
- transitions
- scenes

## Rule behavior

When this rule is relevant, follow these behaviors:

- Scene breakdown
- Transition suggestions
- Pacing optimization

## Output requirements

- Editing steps
- Scene notes
- Transition plan
- Asset assumptions and missing asset notes
- Timing, pacing, and accessibility recommendations

## Instructions

- Identify key scenes
- Suggest cuts and transitions
- Optimize for engagement
- Preserve narrative continuity and factual meaning.
- Include caption, audio, and contrast considerations when relevant.

## Constraints

- Avoid excessive edits
- Preserve story clarity
- Do not recommend effects that obscure important information.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

---
name: hook-generator
description: Produces attention-grabbing hooks for videos, social posts, and content intros to maximize engagement.
category: Video & Media Skills
type: codex-rule
source_format: converted-from-skill-description
---

# Hook Generator

## When to use this rule

Produces attention-grabbing hooks for videos, social posts, and content intros to maximize engagement.

## Overview

Creates compelling openings to capture attention immediately.

## Keywords

- hook
- attention
- engagement
- intro
- viral

## Rule behavior

When this rule is relevant, follow these behaviors:

- Short and impactful hooks
- Curiosity-driven phrasing
- Adaptable to content type

## Output requirements

- Hook sentence
- Optional follow-up intro
- Audience and platform assumptions
- Multiple variants when exploration is useful

## Instructions

- Focus on curiosity or bold statements
- Keep the hook concise
- Match audience interest
- Keep hooks truthful to the content that follows.
- Vary angle, specificity, and emotional intensity across variants.

## Constraints

- Avoid generic hooks
- Maintain relevance
- Do not use misleading clickbait or unsupported claims.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.


---

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


---

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


---

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


---

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


---

---
name: devops-assistant
description: Assists in version control, deployment, and automation tasks, ensuring smooth DevOps operations and workflow efficiency.
category: Coding & Automation Skills
type: codex-rule
source_format: converted-from-skill-description
---

# DevOps Assistant

## When to use this rule

Assists in version control, deployment, and automation tasks, ensuring smooth DevOps operations and workflow efficiency.

## Overview

Supports development workflows by managing versioning, deployment, and automation tasks.

## Keywords

- devops
- automation
- deployment
- git
- workflow

## Rule behavior

When this rule is relevant, follow these behaviors:

- Commit and version guidance
- Deployment suggestions
- Workflow optimization
- Safety gate identification
- Dry-run and rollback planning

## Output requirements

- Current state and assumptions
- Stepwise commands or actions
- Risk level and approval requirements
- Verification and rollback plan
- Automation recommendations, when safe

## Instructions

- Analyze project requirements
- Inspect git status, branch, remotes, config, and relevant deployment files before suggesting actions.
- Prefer dry-runs, previews, and non-destructive checks before state-changing commands.
- Ask for explicit approval before production deployments, force pushes, destructive filesystem changes, credential changes, database migrations, or irreversible infrastructure actions.
- Never print or commit secrets; refer to secret names and secure storage locations instead.
- Optimize workflow efficiency only after preserving safety and recoverability.

## Constraints

- Ensure accuracy
- Avoid redundant steps
- Do not run destructive commands without explicit user approval.
- Do not assume a deployment target, environment, or remote branch when it can be verified.
- Include rollback guidance for high-impact changes.

## Codex execution notes

- Follow the shared standards in `../../GLOBAL-RULE-STANDARDS.md`.
- Apply this rule only when the user request clearly matches the rule purpose.
- Do not force this rule onto unrelated tasks.
- Keep the final output practical, concise, and directly usable.
