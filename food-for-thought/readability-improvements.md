# Blog Post Readability Overhaul — Implementation Guide

## Context

This document describes a set of readability and layout improvements for the blog/posts section of jeroenvanwissen.com. The current design has full-width text, high-contrast white-on-black body copy, tight spacing, and no use of the side margins. The goal is to significantly improve reading comfort and use the freed-up horizontal space for supplementary navigation.

A reference HTML mockup is included alongside this file (`mockup.html`) — use it as the visual source of truth for all changes described below.

---

## Overview of Changes

There are two categories of work:

1. **CSS/typography improvements** to the existing post content area (can be done purely in stylesheets)
2. **New sidebar component** with table of contents, reading progress, and topic tags (requires HTML/template changes + a small JS module)

---

## Part 1: Typography & Spacing Improvements

These changes apply to the blog post/article pages only, not the homepage or other sections.

### 1.1 Constrain Content Width

**Problem:** Lines of text stretch to the full viewport width (~120+ characters per line). This makes it hard for the eye to track back to the start of the next line.

**Solution:** Cap the article content column at `680px` (roughly 65 characters per line at the body font size).

```css
/* The article/post content container */
max-width: 680px;
```

Do NOT just set `max-width` on the body or a global wrapper — this should only affect the article content column, because the new layout uses a CSS grid with a sidebar beside it (see Part 2).

### 1.2 Reduce Body Text Brightness

**Problem:** Pure white (`#ffffff`) text on a near-black background causes eye strain on longer reads due to excessive contrast (halation effect).

**Solution:** Use a softer off-white for body text. Keep headings and `<strong>` elements brighter for hierarchy.

```css
:root {
  --text: #c8c8cc;          /* Body text — soft, easy on the eyes */
  --text-muted: #78787e;    /* Meta info, captions, sidebar text */
  --text-bright: #ececf0;   /* Headings, bold text, emphasis */
}

body {
  color: var(--text);       /* Was #ffffff or similar */
}

strong, b {
  color: var(--text-bright);
}
```

### 1.3 Increase Line Height

**Problem:** Lines of text are too close together, making paragraphs feel dense and hard to scan.

**Solution:** Set `line-height` to `1.72` on the body (up from what is likely `1.4`–`1.5`).

```css
body {
  line-height: 1.72;
}
```

### 1.4 Increase Paragraph Spacing

**Problem:** The gap between paragraphs is not distinct enough from the line spacing within paragraphs, making it hard to see where one paragraph ends and the next begins.

**Solution:** Set paragraph `margin-bottom` to `1.35em`.

```css
p {
  margin-bottom: 1.35em;
}
```

### 1.5 Add More Space Above Section Headings

**Problem:** `<h2>` section headings sit too close to the preceding paragraph, weakening their role as section dividers.

**Solution:** Add generous top margin to `h2` elements inside posts.

```css
h2 {
  margin-top: 3rem;      /* Creates clear visual break before new sections */
  margin-bottom: 0.75rem;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--accent);   /* Keep the existing pink accent color */
}
```

### 1.6 Style Inline Code Snippets

**Problem:** Inline `<code>` elements (like `.claude/CLAUDE.md`) blend into the surrounding text too much. They're styled with the accent color but have no background, making them hard to distinguish at a glance.

**Solution:** Give inline code a subtle background, border, and padding so they read as distinct tokens.

```css
code {
  font-family: 'JetBrains Mono', monospace; /* Or your preferred mono font */
  font-size: 0.82em;
  background: rgba(255, 255, 255, 0.06);
  color: var(--accent);
  padding: 0.15em 0.45em;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
```

If you don't already load JetBrains Mono, add it via Google Fonts or replace with your existing monospace font.

### 1.7 Improve Ordered List Styling

**Problem:** Default ordered list numbering doesn't stand out visually.

**Solution:** Use CSS counters with accent-colored numbers and proper indentation.

```css
ol {
  list-style: none;
  counter-reset: step;
  padding: 0;
  margin-bottom: 1.35em;
}

ol li {
  counter-increment: step;
  padding-left: 2.2rem;
  position: relative;
  margin-bottom: 0.65em;
}

ol li::before {
  content: counter(step) ".";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
```

### 1.8 Frosted Glass Nav Bar

**Problem:** The navigation bar uses a solid background. A translucent blur effect gives it depth while letting users see content scroll beneath.

**Solution:**

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #252528;
  padding: 0.8rem 2rem;
}
```

---

## Part 2: Page Layout — Grid with Sidebar

### 2.1 Grid Layout

Replace the current single-column post layout with a CSS grid that places the article content in a fixed-width center column and a sidebar to its right.

```css
:root {
  --content-width: 680px;
  --sidebar-width: 240px;
}

.page-wrapper {
  display: grid;
  grid-template-columns: 1fr var(--content-width) var(--sidebar-width) 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem; /* 6rem top accounts for fixed navbar */
}

.content {
  grid-column: 2;
}

.sidebar {
  grid-column: 3;
  position: relative;
}
```

The `1fr` columns on either side absorb the remaining viewport space evenly, keeping the content + sidebar centered.

### 2.2 Sticky Sidebar

The sidebar should stick to the top of the viewport as the user scrolls, so the TOC and progress remain visible.

```css
.sidebar-inner {
  position: sticky;
  top: 5rem; /* Clears the fixed navbar */
}
```

### 2.3 Responsive Collapse

On viewports narrower than `1060px`, collapse to a single column and hide the sidebar. The sidebar content is supplementary — the post should work perfectly without it.

```css
@media (max-width: 1060px) {
  .page-wrapper {
    grid-template-columns: 1fr;
    max-width: var(--content-width);
    gap: 0;
  }
  .content { grid-column: 1; }
  .sidebar { display: none; }
}
```

---

## Part 3: Sidebar Contents

The sidebar has three sections. All text in the sidebar uses `--text-muted` (#78787e) as the base color to keep it subordinate to the main content.

### 3.1 Table of Contents (TOC)

An auto-generated list of `<h2>` headings from the post, with the currently visible section highlighted.

**HTML structure:**

```html
<div class="toc-label">On this page</div>
<ul class="toc" id="toc">
  <li><a href="#section-id">Section title</a></li>
  <!-- Repeat for each h2 -->
</ul>
```

**CSS:**

```css
.toc-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.toc {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.toc a {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.35rem 0.75rem;
  border-left: 2px solid transparent;
  border-radius: 0 4px 4px 0;
  transition: all 0.2s;
  line-height: 1.4;
}

.toc a:hover {
  color: var(--text-bright);
  border-left-color: var(--accent);
  background: rgba(232, 77, 202, 0.06);
}

.toc a.active {
  color: var(--accent);
  border-left-color: var(--accent);
  background: rgba(232, 77, 202, 0.12);
}
```

**JavaScript — active section tracking:**

```javascript
function updateTOC() {
  const headings = document.querySelectorAll('h2[id]');
  const links = document.querySelectorAll('.toc a');
  let current = '';

  headings.forEach(h => {
    if (window.scrollY >= h.offsetTop - 120) {
      current = h.id;
    }
  });

  links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateTOC, { passive: true });
```

**Important:** Every `<h2>` in the post content needs an `id` attribute that matches the `href` in the TOC links. If your blog framework already generates heading IDs (most Markdown renderers do), use those. Otherwise, generate slug-style IDs from the heading text.

### 3.2 Reading Progress

A thin progress indicator showing how far through the article the reader is. Displayed both in the sidebar and as a 2px accent-colored bar fixed to the top of the viewport.

**HTML:**

```html
<!-- Top of the page, outside the grid -->
<div class="top-progress" id="topProgress"></div>

<!-- Inside sidebar -->
<div class="reading-progress-section">
  <div class="progress-label">
    <span>Progress</span>
    <span id="progressPercent">0%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill" id="progressFill"></div>
  </div>
  <div class="reading-time">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    ~5 min read
  </div>
</div>
```

**CSS:**

```css
.top-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--accent);
  z-index: 200;
  width: 0%;
  transition: width 0.1s linear;
}

.reading-progress-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.progress-track {
  width: 100%;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  width: 0%;
  transition: width 0.15s ease-out;
}
```

**JavaScript:**

```javascript
function updateProgress() {
  const article = document.querySelector('.content');
  const rect = article.getBoundingClientRect();
  const articleTop = rect.top + window.scrollY;
  const articleHeight = rect.height;
  const viewportHeight = window.innerHeight;
  const scrolled = window.scrollY - articleTop + viewportHeight * 0.5;
  const progress = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));

  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('topProgress').style.width = progress + '%';
  document.getElementById('progressPercent').textContent = Math.round(progress) + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress(); // Initialize on page load
```

**Reading time calculation:** If your blog framework doesn't already calculate reading time, count the words in the post and divide by 200 (average reading speed). Display as "~X min read".

### 3.3 Topic Tags

A set of pill-shaped tags related to the post content. These can link to a filtered list of posts by tag, or be purely decorative.

**HTML:**

```html
<div class="tags-section">
  <div class="tags-label">Topics</div>
  <div class="tags">
    <span class="tag">AI agents</span>
    <span class="tag">developer tools</span>
    <!-- etc. -->
  </div>
</div>
```

**CSS:**

```css
.tags-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.tags-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.72rem;
  padding: 0.25em 0.65em;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text-muted);
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}

.tag:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(232, 77, 202, 0.12);
}
```

Tags should ideally come from the post's frontmatter/metadata. If a tagging system doesn't exist yet, this can be added later — the styling is ready.

---

## Part 4: Article Header Improvements

The article header area (title, lead paragraph, meta) benefits from a few structural tweaks.

### 4.1 Meta Line

Add a meta line above the title showing the date and estimated reading time.

```html
<div class="article-meta">Feb 2026 · 5 min read</div>
```

```css
.article-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

### 4.2 Header Divider

Separate the header from the body with a bottom border.

```css
.article-header {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}
```

### 4.3 Lead Paragraph

The introductory blockquote-style paragraph already has an accent left border — keep it, but make its text slightly muted to differentiate it from the body.

```css
.article-lead {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.65;
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
}
```

---

## Summary of CSS Variables

For consistency, here's the full set of CSS custom properties used across all changes. Adapt these to match your existing accent color if it's not exactly this value.

```css
:root {
  --bg: #0d0d0d;
  --surface: #161618;
  --border: #252528;
  --text: #c8c8cc;
  --text-muted: #78787e;
  --text-bright: #ececf0;
  --accent: #e84dca;              /* Your existing pink */
  --accent-dim: rgba(232, 77, 202, 0.12);
  --accent-glow: rgba(232, 77, 202, 0.06);
  --code-bg: rgba(255, 255, 255, 0.06);
  --content-width: 680px;
  --sidebar-width: 240px;
}
```

---

## Implementation Order

Recommended sequence to minimize disruption:

1. **Add CSS variables** to your root stylesheet
2. **Apply typography changes** (1.1–1.7) — these are pure CSS and immediately improve readability with no HTML changes
3. **Add the grid layout** (2.1–2.3) — wrap existing post content in the new grid structure
4. **Add the sidebar HTML** (3.1–3.3) — empty sidebar that fills in with TOC, progress, tags
5. **Add the JavaScript** (scroll tracking for TOC + progress)
6. **Add article header improvements** (4.1–4.3)
7. **Test responsive behavior** — verify the sidebar collapses cleanly below 1060px

---

## Reference

The companion file `mockup.html` contains a complete, self-contained implementation of all changes described above using the actual content from the "Building an AI Skill for Project Analysis" post. Open it in a browser to see the target result.
