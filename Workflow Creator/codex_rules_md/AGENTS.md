# AGENTS.md

Use these rules when assisting with this repository.

## General operating rules

- Inspect relevant files before editing code.
- Make the smallest safe change that solves the request.
- Avoid adding dependencies unless the user approves or the task clearly requires it.
- Preserve existing structure, names, and behavior unless the request asks for changes.
- Explain what changed and why after making edits.
- When a specialized rule file applies, follow it as an additional instruction layer.
- All specialized rules inherit `GLOBAL-RULE-STANDARDS.md`.
- Do not run or recommend destructive git, deployment, filesystem, credential, migration, or production actions without explicit user approval.
- Use citations or source links for current, factual, research, financial, legal, medical, product, or market claims when sources are available.
- Distinguish verified facts from assumptions, estimates, and recommendations.

## Available rule groups

### Writing & Content Skills

- `rules/writing-and-content-skills/scqa-writing-framework.md`: Structures content using the Situation, Complication, Question, Answer framework for clear, logical, and engaging narratives suitable for threads, articles, and reports.
- `rules/writing-and-content-skills/content-repurposing-engine.md`: Converts long-form content into multiple formats like social media threads, short video scripts, or summaries while preserving the core message.
- `rules/writing-and-content-skills/tone-style-enforcer.md`: Ensures all outputs match a consistent brand or personal tone, maintaining clarity, style, and audience alignment across multiple outputs.
- `rules/writing-and-content-skills/long-form-summary-compressor.md`: Condenses long text into concise summaries, keeping essential ideas intact for quick consumption and understanding.
- `rules/writing-and-content-skills/structured-copywriting-skill.md`: Generates high-impact copy with clear hooks, structured flow, and concise messaging for marketing, articles, and social media content.

### Visual & Infographic Skills

- `rules/visual-and-infographic-skills/excalidraw-diagram-generator.md`: Converts textual concepts or workflows into clear diagram instructions suitable for Excalidraw or other visual tools.
- `rules/visual-and-infographic-skills/infographic-builder.md`: Turns textual content into structured infographic formats suitable for reports, presentations, and educational materials.
- `rules/visual-and-infographic-skills/flowchart-decision-builder.md`: Generates decision trees and flowcharts from textual input to simplify complex decision-making processes.
- `rules/visual-and-infographic-skills/ui-ux-layout-advisor.md`: Advises on interface layouts to optimize clarity, spacing, hierarchy, and usability.

### Research & Analysis Skills

- `rules/research-and-analysis-skills/deep-research-synthesizer.md`: Synthesizes insights from large datasets, filters irrelevant data, identifies patterns, and produces actionable summaries.
- `rules/research-and-analysis-skills/onchain-transaction-analyzer.md`: Analyzes blockchain transactions by tracing wallets, contracts, and token movements and providing simple, understandable explanations.
- `rules/research-and-analysis-skills/source-validation-skill.md`: Validates the credibility of information sources, highlighting reliability, relevance, and potential biases.
- `rules/research-and-analysis-skills/competitive-intelligence-skill.md`: Compares products, protocols, or tools to provide structured analysis of strengths, weaknesses, and opportunities.
- `rules/research-and-analysis-skills/knowledge-structuring-skill.md`: Organizes unstructured information into clear frameworks, bullet points, or structured notes for easier understanding and application.

### Video & Media Skills

- `rules/video-and-media-skills/video-script-generator.md`: Generates video scripts with hooks, structured sections, pacing, and call-to-actions optimized for engagement and retention.
- `rules/video-and-media-skills/video-editing-planner.md`: Suggests editing structure, scene cuts, transitions, and pacing for improved video content quality and engagement.
- `rules/video-and-media-skills/hook-generator.md`: Produces attention-grabbing hooks for videos, social posts, and content intros to maximize engagement.
- `rules/video-and-media-skills/caption-subtitle-formatter.md`: Formats captions and subtitles for readability, timing, and accessibility across videos.

### Coding & Automation Skills

- `rules/coding-and-automation-skills/code-review-skill.md`: Reviews code for bugs, inefficiencies, and adherence to best practices, providing actionable improvement suggestions.
- `rules/coding-and-automation-skills/workflow-automation-agent.md`: Breaks complex tasks into step-by-step workflows, mapping actions to tools, optimizing execution, and improving efficiency.
- `rules/coding-and-automation-skills/skill-creator-meta-skill.md`: Generates new AI skills in `.md` format, providing structured name, description, and instruction for future use.
- `rules/coding-and-automation-skills/devops-assistant.md`: Assists in version control, deployment, and automation tasks, ensuring smooth DevOps operations and workflow efficiency.

## Selection rule

- Use the most specific applicable rule.
- If multiple rules apply, combine them without creating conflicting output requirements.
- If the user asks for a format that conflicts with a rule, prioritize the user request.
- If a secondary rule adds useful structure, apply only the parts that do not conflict with the primary rule or global safety standards.
