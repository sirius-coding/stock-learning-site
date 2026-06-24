# Retail Investor Training Import Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the full chapter structure of the `training/` series into the stock learning site as a standalone reading section.

**Architecture:** The new content lives under `docs/training/` with a single overview page plus one Markdown file per chapter. Navigation updates are limited to `docs/.vitepress/config.mjs` and the homepage entry cards.

**Tech Stack:** VitePress, Markdown

---

### Task 1: Add Training Overview and Chapter Pages

**Files:**
- Create: `docs/training/index.md`
- Create: `docs/training/00-preface.md`
- Create: `docs/training/01-facts.md`
- Create: `docs/training/02-advantages.md`
- Create: `docs/training/03-window-paper.md`
- Create: `docs/training/04-think-like-winners.md`
- Create: `docs/training/05-bias-and-decisions.md`
- Create: `docs/training/06-value.md`
- Create: `docs/training/07-essence.md`
- Create: `docs/training/08-great-businesses.md`
- Create: `docs/training/09-observation.md`
- Create: `docs/training/10-snowball.md`
- Create: `docs/training/11-object-timing-size.md`
- Create: `docs/training/12-market-pricing.md`
- Create: `docs/training/13-expectation-return.md`
- Create: `docs/training/14-cycles.md`
- Create: `docs/training/15-valuation.md`
- Create: `docs/training/16-a-share.md`
- Create: `docs/training/17-summary.md`

- [ ] Add a directory page explaining what this series covers and how to read it
- [ ] Add one Markdown file per chapter in reading order
- [ ] Keep chapter structure consistent across files

### Task 2: Update Navigation

**Files:**
- Modify: `docs/.vitepress/config.mjs`
- Modify: `docs/index.md`

- [ ] Add a top nav item for `散户修养`
- [ ] Add a new sidebar group with overview + all chapters in order
- [ ] Add or adjust a homepage entry card to expose the new section

### Task 3: Verify and Commit

**Files:**
- Test: `npm run docs:build`
- Test: `git status --short`

- [ ] Run a fresh production build
- [ ] Confirm chapter ordering and routes in the generated site
- [ ] Commit the imported section
