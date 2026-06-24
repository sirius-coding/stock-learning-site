# Technical Analysis Tree Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a structured technical-analysis section with topic pages for K-line, moving averages, volume, MACD, Bollinger bands, intraday charts, chips, and handicap indicators.

**Architecture:** New topic pages live under `docs/technical/`. Navigation changes stay in `docs/.vitepress/config.mjs` and the homepage. Each topic page follows the same internal section model for consistency.

**Tech Stack:** VitePress, Markdown

---

### Task 1: Add Technical Analysis Pages

**Files:**
- Create: `docs/technical/index.md`
- Create: `docs/technical/k-line.md`
- Create: `docs/technical/moving-averages.md`
- Create: `docs/technical/volume.md`
- Create: `docs/technical/macd.md`
- Create: `docs/technical/bollinger-bands.md`
- Create: `docs/technical/intraday.md`
- Create: `docs/technical/chips.md`
- Create: `docs/technical/handicap.md`

- [ ] Add one overview page
- [ ] Add one page per topic
- [ ] Keep concept/signals/usage/risks consistent

### Task 2: Update Navigation and Homepage

**Files:**
- Modify: `docs/.vitepress/config.mjs`
- Modify: `docs/index.md`

- [ ] Add `技术分析` to top nav
- [ ] Add sidebar group with overview + all topic pages
- [ ] Expose the section from homepage cards

### Task 3: Verify and Commit

**Files:**
- Test: `npm run docs:build`
- Test: `git status --short`

- [ ] Run a fresh build
- [ ] Confirm the new routes render
- [ ] Commit the new section
