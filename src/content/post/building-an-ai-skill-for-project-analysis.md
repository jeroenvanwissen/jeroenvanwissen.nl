---
categories:
  - Coding
  - AI
  - Open Source
date: 2026-02-27
description: I built a skill that analyzes codebases and generates structured task backlogs for AI coding agents.
draft: false
title: 'Building an AI Skill for Project Analysis'
type: blog
---

# Building an AI Skill for Project Analysis

> Over the last couple of weeks I've been working on a small open-source project called [project-analysis](https://github.com/jeroenvanwissen/project-analysis). It's a skill for AI coding agents that analyzes a codebase and generates a structured development backlog. It started as a personal itch and turned into something I think others might find useful too.

If you've ever dropped an AI coding agent into an existing project and asked it to "fix things" or "improve the codebase," you probably know the result. It either tries to do everything at once, or it picks something random to work on. There's no structure, no priority, no plan. It just... goes.

That's the problem I wanted to solve. Not the AI part itself, but giving it a proper starting point. A way to understand what's actually going on in a codebase before jumping in. But also leaving the room to pick up those tasks yourself, or adjust the plan before it generates anything.

## What it does

The skill runs a 4-phase analysis on a project:

1. **Deep Analysis** -- reads all source files, configs, tests, and documentation. It extracts coding conventions, categorizes findings by severity, triages TODO/FIXME/HACK markers, and measures quality baselines.
2. **Prioritize and Group** -- assigns priority and size estimates to each finding, organizes them into dependency-ordered waves, and assigns unique task IDs.
3. **Generate Output** -- produces task files, a backlog, workflow guide, coding conventions, and agent configuration files.
4. **Quality Check** -- validates all generated output against a checklist for consistency and completeness.

The interesting part is the checkpoint between phase 2 and 3. The skill pauses and presents you with a summary of what it found, the proposed waves, and lets you confirm or adjust before it generates anything. You stay in control.

## The multi-agent problem

One thing that kept bugging me was how every AI tool wants its own configuration file. Claude Code wants `.claude/CLAUDE.md`, GitHub Copilot wants `.github/copilot-instructions.md`, Cursor wants `.cursor/rules/`, Junie wants `.junie/guidelines.md`, and so on. If you use more than one of these, you end up duplicating the same coding conventions across multiple files. And they inevitably drift apart.

So the skill generates a single source of truth in `.ai/rules/` and then creates pointer files for whichever tools you actually use. No duplication, no drift. It auto-detects which tools are already configured in your project and pre-selects them during the checkpoint.

## Documentation-first projects

It also works for greenfield projects. If you have feature docs and technical docs but no code yet, the skill reads those instead and generates a backlog in build order: scaffolding first, then infrastructure, core features, secondary features, and polish. Handy when you're starting something new and want a structured plan to hand to an AI agent.

## Why a skill?

I could have built this as a CLI tool or a standalone script, but the whole point is that it runs inside the agent's context. It needs to read your files, understand your project structure, and generate output that fits. A skill is just a set of instructions and templates that the agent loads when you trigger it. No extra tooling, no dependencies.

You install it by copying the files into your agent's skills directory, and trigger it with something like "analyze this project" or "create a task backlog." That's it.

## Check it out

The project is on GitHub: [jeroenvanwissen/project-analysis](https://github.com/jeroenvanwissen/project-analysis). It's MIT licensed and works with OpenCode, Claude Code, and any agent that supports the skills pattern. If you try it out, I'd love to hear what you think.

<sub>last updated: 2026-02-27</sub>

I hope this post was helpful to you.
If you have any questions or feedback, feel free to contact me on
[Twitter/X](https://x.com/jvwissen),
[Bluesky](https://bsky.app/profile/jeroenvanwissen.nl), or
[Mastodon](https://mastodon.social/@jeroenvanwissen). I'd love to hear
from you! 🚀
