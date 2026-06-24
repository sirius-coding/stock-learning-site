# Stock Learning Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local VitePress-based stock learning knowledge site with preloaded study-plan and stock-note content.

**Architecture:** The site uses VitePress as a static documentation engine, with content stored as Markdown under `docs/` and a small amount of theme customization through `.vitepress/config.mjs` and `theme/custom.css`. The first version focuses on local development, clear navigation, and preloaded stock-learning content rather than dynamic publishing features.

**Tech Stack:** Node.js, npm, VitePress, Markdown, CSS

---

### Task 1: Initialize Repository and Project Metadata

**Files:**
- Create: `.gitignore`
- Create: `package.json`
- Modify: existing workspace root
- Test: `git status --short`

- [ ] **Step 1: Initialize git repository**

Run:

```bash
git init
```

Expected: command exits successfully and creates a `.git` directory.

- [ ] **Step 2: Create `.gitignore`**

Add:

```gitignore
node_modules
.vitepress/cache
.vitepress/dist
docs/.vitepress/cache
docs/.vitepress/dist
.superpowers
```

- [ ] **Step 3: Create `package.json`**

Add:

```json
{
  "name": "stock-learning-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.3"
  }
}
```

- [ ] **Step 4: Verify repository and files**

Run:

```bash
git status --short
```

Expected: `.gitignore`, `package.json`, and docs files appear as untracked changes.

- [ ] **Step 5: Commit**

```bash
git add .gitignore package.json docs/superpowers/specs/2026-06-24-stock-learning-site-design.md docs/superpowers/plans/2026-06-24-stock-learning-site.md
git commit -m "chore: initialize stock learning site project"
```

### Task 2: Install VitePress and Create Site Shell

**Files:**
- Create: `package-lock.json`
- Create: `docs/.vitepress/config.mjs`
- Create: `docs/.vitepress/theme/custom.css`
- Create: `docs/index.md`
- Test: `npm install`

- [ ] **Step 1: Install dependencies**

Run:

```bash
npm install
```

Expected: `node_modules/` and `package-lock.json` are created successfully.

- [ ] **Step 2: Create `docs/.vitepress/config.mjs`**

Add a config that defines site title, description, nav, sidebar, and theme CSS registration via the standard theme extension.

- [ ] **Step 3: Create `docs/.vitepress/theme/custom.css`**

Add minimal custom styles for:

```css
:root {
  --vp-c-brand-1: #335c4b;
  --vp-c-brand-2: #26483a;
  --vp-c-brand-3: #4a7864;
  --vp-c-text-1: #1d241f;
  --vp-c-bg: #f7f4ed;
  --vp-c-bg-soft: #efe9dc;
}
```

Also style homepage cards and note blocks so the site feels like a study handbook rather than a plain default template.

- [ ] **Step 4: Create homepage shell in `docs/index.md`**

Add:

```md
---
layout: home

hero:
  name: 股票学习手册
  text: 从零基础到建立自己的观察框架
  tagline: 一个面向长期学习的本地知识库，先学规则、框架和方法，再看技术和执行。
  actions:
    - theme: brand
      text: 开始 7 天学习计划
      link: /plan/7-day
    - theme: alt
      text: 查看股票知识总览
      link: /notes/intro-and-rules
---
```

Then add custom card-based entry content under the frontmatter.

- [ ] **Step 5: Verify install artifacts**

Run:

```bash
git status --short
```

Expected: dependency lockfile and VitePress config/theme files are present in working tree.

- [ ] **Step 6: Commit**

```bash
git add package-lock.json docs/.vitepress docs/index.md
git commit -m "feat: scaffold vitepress knowledge site"
```

### Task 3: Add Learning Plan Content

**Files:**
- Create: `docs/plan/7-day.md`
- Create: `docs/plan/60-minutes.md`
- Create: `docs/plan/checklist.md`
- Modify: `docs/.vitepress/config.mjs`
- Test: `npm run docs:build`

- [ ] **Step 1: Create `docs/plan/7-day.md`**

Add the approved 7-day study plan as structured headings and bullet lists.

- [ ] **Step 2: Create `docs/plan/60-minutes.md`**

Add the approved daily 60-minute schedule with per-day time blocks.

- [ ] **Step 3: Create `docs/plan/checklist.md`**

Add the approved 7-day checklist using Markdown task-list syntax.

- [ ] **Step 4: Wire plan pages into sidebar**

Modify `docs/.vitepress/config.mjs` so the Learning Plan section includes:

```js
{
  text: '学习计划',
  items: [
    { text: '7天学习计划', link: '/plan/7-day' },
    { text: '每天60分钟安排', link: '/plan/60-minutes' },
    { text: '7天打卡表', link: '/plan/checklist' }
  ]
}
```

- [ ] **Step 5: Build to verify Markdown and navigation**

Run:

```bash
npm run docs:build
```

Expected: build exits with code 0.

- [ ] **Step 6: Commit**

```bash
git add docs/plan docs/.vitepress/config.mjs
git commit -m "feat: add stock learning plan pages"
```

### Task 4: Add Stock Knowledge Notes

**Files:**
- Create: `docs/notes/intro-and-rules.md`
- Create: `docs/notes/market-structure.md`
- Create: `docs/notes/valuation-and-selection.md`
- Create: `docs/notes/technical-basics.md`
- Create: `docs/notes/intraday-tools.md`
- Create: `docs/notes/methodology-and-mindset.md`
- Modify: `docs/.vitepress/config.mjs`
- Test: `npm run docs:build`

- [ ] **Step 1: Create intro and trading basics page**

Add the previously summarized content for:

- stock basics
- trading rules
- entrust / order basics
- subscription / dividend / call auction framing

- [ ] **Step 2: Create market structure page**

Add:

- market structure
- STAR Market summary
- Hong Kong Connect differences

- [ ] **Step 3: Create valuation and selection page**

Add:

- PE / PB / PS / PCF / PEG overview
- good business / good company / good investment framework

- [ ] **Step 4: Create technical basics page**

Add:

- K-line basics
- volume relationship
- moving averages
- MACD basics
- Bollinger basics

- [ ] **Step 5: Create intraday tools page**

Add:

- handicap indicators
- intraday observation
- chip distribution
- short-term observation cautions

- [ ] **Step 6: Create methodology and mindset page**

Add:

- cognitive bias
- cycle awareness
- object / timing / position sizing
- what not to do as a beginner

- [ ] **Step 7: Wire note pages into sidebar**

Modify `docs/.vitepress/config.mjs` so the Stock Notes section includes links to all six note pages.

- [ ] **Step 8: Build to verify content pages**

Run:

```bash
npm run docs:build
```

Expected: build exits with code 0 and all pages render.

- [ ] **Step 9: Commit**

```bash
git add docs/notes docs/.vitepress/config.mjs
git commit -m "feat: add stock learning note pages"
```

### Task 5: Run Local Verification

**Files:**
- Modify: as needed if verification reveals issues
- Test: `npm run docs:build`
- Test: `npm run docs:dev -- --host 127.0.0.1`

- [ ] **Step 1: Run final production build**

Run:

```bash
npm run docs:build
```

Expected: build exits with code 0.

- [ ] **Step 2: Start local dev server**

Run:

```bash
npm run docs:dev -- --host 127.0.0.1
```

Expected: VitePress starts and prints a local URL.

- [ ] **Step 3: Review output and stop server**

Confirm:

- homepage loads
- sidebar is visible
- plan pages open
- note pages open

Then stop the server cleanly.

- [ ] **Step 4: Commit final verification fixes if needed**

```bash
git add .
git commit -m "fix: polish stock learning site verification issues"
```

### Self-Review

- Spec coverage: foundation, homepage, navigation, learning-plan pages, stock-note pages, local run flow, and visual direction are all covered by tasks 1-5.
- Placeholder scan: no TBD/TODO placeholders remain in the plan.
- Type consistency: file paths, scripts, and content sections are consistent with the approved design spec.
