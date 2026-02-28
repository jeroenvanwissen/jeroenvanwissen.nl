---
type: project
draft: false
date: 2026-02-26
title: project-analysis
categories:
  - AI Agents
  - Developer Tools
  - Open Source
  - Coding
description: An AI skill that analyzes codebases and generates structured task backlogs with coding conventions for multiple AI coding assistants
status: active
tech:
  - AI Agents
  - Markdown
  - Task Management
  - Code Analysis
  - Multi-Agent Systems
---

# project-analysis

An AI skill that analyzes your codebase or project documentation and generates a complete development backlog with prioritized tasks, coding conventions, and configuration files for multiple AI coding assistants.

## What It Does

This skill runs a comprehensive 4-phase analysis on your project and produces:

- **Task Backlog**: Prioritized, dependency-ordered development waves
- **Individual Task Files**: Detailed tasks with acceptance criteria and test requirements
- **Coding Conventions**: Single source of truth for all AI tools
- **Multi-Agent Configuration**: Setup files for Claude Code, GitHub Copilot, JetBrains Junie, Cursor, and Aider
- **Quality Baseline**: Coverage, lint, complexity, and dependency health metrics

## How It Works

### Phase 1: Deep Analysis

Reads all source files, configs, tests, and documentation. Extracts coding conventions, categorizes findings by severity (Critical/High/Medium/Low), triages TODO/FIXME/HACK markers, and measures quality baselines.

### Phase 2: Prioritize and Group

Assigns priority and size estimates to each finding, organizes them into dependency-ordered waves (A, B, C), and assigns unique task IDs.

### Checkpoint: User Validation

Before generating files, the skill presents a summary for you to review:

- Findings by priority
- Proposed task waves
- Architecture observations
- Quality metrics
- AI tool selection

### Phase 3: Generate Output

Creates all task files, backlog, workflow guides, coding conventions, and agent configuration files for your selected tools.

### Phase 4: Quality Check

Validates generated output for consistency, completeness, and proper cross-referencing.

## Multi-Agent Support

The skill auto-detects and configures multiple AI coding assistants:

- **Claude Code** (`.claude/CLAUDE.md`)
- **GitHub Copilot** (`.github/copilot-instructions.md`)
- **JetBrains Junie** (`.junie/guidelines.md`)
- **Cursor** (`.cursor/rules/`)
- **Aider** (`.aider.conf.yml`)

All tools reference a single source of truth (`.ai/rules/`) - no rule duplication!

## Generated Structure

```
AGENTS.md
.ai/rules/
  project.md
  code-style.md
  testing.md
  security.md
tasks/
  BACKLOG.md
  README.md
  A1-task.md
  B1-task.md
.claude/CLAUDE.md
.github/copilot-instructions.md
.junie/guidelines.md
.cursor/rules/
.aider.conf.yml
```

## Installation

### OpenCode (Global)

```bash
mkdir -p ~/.config/opencode/skills/project-analysis
cp -r . ~/.config/opencode/skills/project-analysis/
```

### Claude Code (Global)

```bash
mkdir -p ~/.claude/skills/project-analysis
cp -r . ~/.claude/skills/project-analysis/
```

## Usage

Trigger the skill with any of these phrases:

- "analyze this project"
- "create a task backlog"
- "onboard this codebase"
- "set up coding standards"
- "generate tasks"
- "scaffold from docs"

## Use Cases

- **New Project Onboarding**: Quickly understand a codebase structure
- **Technical Debt Assessment**: Identify and prioritize improvements
- **AI Tool Setup**: Configure multiple AI assistants at once
- **Project Planning**: Generate structured development roadmaps
- **Quality Baseline**: Establish measurable quality metrics
- **Team Alignment**: Share consistent coding conventions

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/project-analysis 'project-analysis on GitHub')
