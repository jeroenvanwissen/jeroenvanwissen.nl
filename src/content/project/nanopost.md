---
type: project
draft: false
date: 2026-02-28
title: nanopost
categories:
  - Coding
  - JavaScript / TypeScript
  - CLI Tool
  - Open Source
description: A tiny CLI for capturing short posts, dev notes, and status updates as Markdown files inside your project
status: active
tech:
  - TypeScript
  - Node.js
  - CLI
  - Markdown
  - pnpm
  - Vitest
---

# nanopost

> Write small thoughts. Commit them to your repo.

A tiny CLI tool for capturing short posts, dev notes, and status updates as Markdown files directly inside your project. No CMS. No UI. No friction.

## What It Does

nanopost makes it easy to document your development journey, capture quick thoughts, and maintain a development log without leaving the command line. Perfect for developers who want to keep notes, progress updates, or blog posts in their repository alongside their code.

## Key Features

### Multiple Input Methods

- **Inline**: Fastest way to capture thoughts
- **Piped input**: Powerful for capturing command output
- **Interactive**: Full editor experience when needed

### Flexible Post Types

Configure multiple post types (blog, devlog, notes, etc.) with their own:

- Content directories
- Filename formats
- Frontmatter schemas
- Date formats

### Plugin System

Extensible plugin architecture for post-processing:

- Run hooks after posts are saved
- Load plugins from local `.nanopost/plugins/` or npm packages
- Pass custom configuration to plugins
- Chain multiple plugins sequentially

### Smart Frontmatter

Type-aware frontmatter generation ensures proper YAML formatting:

- String, boolean, number, array, date, and object types
- Schema validation
- Customizable defaults per post type

## Quick Start

```bash
# Install globally
npm install -g @jeroenvanwissen/nanopost

# Initialize in your project
nanopost init

# Create a post (inline)
nanopost Today we started working on a new feature

# Create a post (interactive)
nanopost new

# Pipe command output
git diff | nanopost --title "Refactor notes"
```

## Configuration

Posts are configured in `.nanopost/config.json`:

```json
{
  "defaultType": "blog",
  "editor": "code --wait",
  "postTypes": {
    "blog": {
      "contentDir": "content/blog",
      "filename": {
        "format": "{date}-{title}",
        "maxSlugLength": 60
      },
      "frontmatter": {
        "schema": {
          "title": "string",
          "date": "date",
          "tags": "array"
        },
        "defaults": {
          "draft": false
        }
      }
    }
  }
}
```

## Use Cases

- **Development Logs**: Track daily progress and decisions
- **Quick Notes**: Capture ideas without context switching
- **Blog Drafts**: Write posts in your code editor
- **Command Output**: Save command results with context
- **Project Documentation**: Maintain an evolving project journal

## Philosophy

If it ever starts feeling like a CMS, it's doing too much. nanopost stays minimal, CLI-first, and developer-friendly.

## Links

- [GitHub Repository](https://github.com/jeroenvanwissen/nanopost 'nanopost on GitHub')
- [npm Package](https://www.npmjs.com/package/@jeroenvanwissen/nanopost 'nanopost on npm')
