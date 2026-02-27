---
categories:
  - tools
  - development
date: 2026-02-27
description: A tiny CLI for capturing dev notes and short posts as Markdown files right inside your project.
draft: true
title: 'nanopost: Write Small Thoughts, Commit Them to Your Repo'
type: blog
---

I built a small tool called [nanopost](https://github.com/jeroenvanwissen/nanopost). It's a CLI for capturing short posts, dev notes, and status updates as Markdown files inside your project. No CMS, no UI, no friction.

The idea came from a simple frustration: I wanted to document what I was working on without leaving the terminal. A quick note about a refactor, a decision I made, a weird bug I found. But opening a note-taking app or a project management tool felt like too much context switching. I just wanted to type something and have it saved in my repo.

## What it does

You run `nanopost` with your thought, and it creates a Markdown file with proper frontmatter. That's it.

```bash
nanopost Today we started working on a new tool called nanopost.
```

This creates a file like `2026-02-27-today-we-started-working.md` in your project with frontmatter that includes a title, date, and any tags or status you want to add.

You can also pipe content into it:

```bash
git diff | nanopost --title "Refactor notes"
echo "Shipped a small improvement" | nanopost
```

Or run it interactively:

```bash
nanopost new
```

It figures out what you want based on input precedence: stdin first, then positional args, then interactive prompts.

## Plugins

The part I spent the most time on was the plugin system. Plugins let you hook into the lifecycle after a post is saved. Want to send a notification to Slack? Post to a feed somewhere? Generate an index? You can do all of that with a simple plugin.

Plugins live in `.nanopost/plugins/` in your project, or you can install them from npm as `nanopost-plugin-<name>`. They're just CommonJS modules that export a simple interface:

```javascript
module.exports = {
  name: 'notify',
  async onPostSaved({ filePath, frontmatter, body }) {
    console.log(`Post saved: ${frontmatter.title} → ${filePath}`);
  },
};
```

You register them in `.nanopost/config.json` and they run automatically. If a plugin fails, nanopost logs a warning and continues. No post data is lost.

## Why I built it

I've used a lot of note-taking tools over the years. Notion, Obsidian, Bear, plain text files in a notes folder. They all work fine, but they all require me to go somewhere else. I wanted something that lived inside my project, versioned with my code, that I could grep through or reference in commits.

There's also something nice about keeping your dev notes in the same place as your code. It's all part of the same history. You can look back and see what you were thinking when you made a change. Or share a post with someone by just committing it.

## No CMS

One thing I didn't want was for this to turn into a CMS. It's not trying to manage a blog or generate a site. It's just a way to capture thoughts quickly. If you want to turn those thoughts into something else later, you can. But the tool itself stays simple.

If it ever starts feeling like a CMS, it's doing too much.

## Check it out

The project is on GitHub: [jeroenvanwissen/nanopost](https://github.com/jeroenvanwissen/nanopost). It's MIT licensed and works wherever Node.js runs. If you try it out, let me know what you think.
