# Technical Analysis Basic and Advanced Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand all technical-analysis topics with separate basic and advanced pages while preserving the current overview pages.

**Architecture:** The new pages live under `docs/technical/` alongside the existing topic overview pages. Navigation is expanded in `docs/.vitepress/config.mjs` into grouped topic items with overview/basic/advanced links.

**Tech Stack:** VitePress, Markdown

---

### Task 1: Add Basic Pages

**Files:**
- Create: `docs/technical/k-line-basic.md`
- Create: `docs/technical/moving-averages-basic.md`
- Create: `docs/technical/volume-basic.md`
- Create: `docs/technical/macd-basic.md`
- Create: `docs/technical/bollinger-bands-basic.md`
- Create: `docs/technical/intraday-basic.md`
- Create: `docs/technical/chips-basic.md`
- Create: `docs/technical/handicap-basic.md`

- [ ] Add beginner-facing pages with concept, common signals, basic usage, and common mistakes

### Task 2: Add Advanced Pages

**Files:**
- Create: `docs/technical/k-line-advanced.md`
- Create: `docs/technical/moving-averages-advanced.md`
- Create: `docs/technical/volume-advanced.md`
- Create: `docs/technical/macd-advanced.md`
- Create: `docs/technical/bollinger-bands-advanced.md`
- Create: `docs/technical/intraday-advanced.md`
- Create: `docs/technical/chips-advanced.md`
- Create: `docs/technical/handicap-advanced.md`

- [ ] Add deeper pages covering context, false signals, edge cases, and usage boundaries

### Task 3: Update Navigation

**Files:**
- Modify: `docs/.vitepress/config.mjs`

- [ ] Convert technical-analysis sidebar into grouped topic navigation
- [ ] Keep the overview page visible while exposing basic and advanced pages

### Task 4: Verify and Commit

**Files:**
- Test: `npm run docs:build`
- Test: `git status --short`

- [ ] Run a fresh build
- [ ] Confirm all routes render
- [ ] Commit the layered technical-analysis expansion
