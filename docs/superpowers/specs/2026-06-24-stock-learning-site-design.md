# Stock Learning Site Design

**Goal:** Build a local static knowledge-base style website for stock learning notes, with the existing 7-day study plan and stock knowledge summaries preloaded as initial content.

**Context**

- Workspace: `/Users/murphy/Documents/stock`
- Current project state: effectively empty except for `search_index.json`
- User intent:
  - local site
  - static blog/docs site
  - knowledge-base style, not a feed-first blog
  - preload the existing study-plan and stock-note content

## 1. Product Direction

This site is a personal stock learning handbook rather than a generic blog. The primary use case is structured reading and long-term accumulation of notes. The first version should optimize for:

- fast local startup
- Markdown-based content editing
- clear topic navigation
- low maintenance
- easy future expansion

The site should feel like a study manual with strong navigation, not like a default framework demo.

## 2. Recommended Technical Approach

### Selected approach: VitePress

VitePress is the best fit because:

- it is naturally suited to knowledge-base and documentation-style sites
- sidebar and navigation setup are straightforward
- Markdown authoring is simple
- local development is lightweight
- future customization remains possible without introducing unnecessary complexity

### Alternatives considered

1. Astro with a docs-style setup
   - stronger presentation flexibility
   - heavier setup for the current goal

2. MkDocs
   - good docs experience
   - less aligned with the current Node environment and future frontend flexibility

## 3. Scope

### In scope for v1

- initialize a VitePress site in the current workspace
- create a custom homepage oriented around learning entry points
- configure top navigation and sidebar navigation
- preload study-plan content
- preload stock knowledge notes reorganized by topic
- make the site runnable locally

### Out of scope for v1

- CMS or admin backend
- authentication
- database
- comments
- search indexing beyond the built-in static experience
- article editing in browser
- remote deployment automation

## 4. Information Architecture

The site should start with the following structure:

- Home
- Learning Plan
  - 7-Day Study Plan
  - Daily 60-Minute Schedule
  - 7-Day Checklist
- Stock Notes
  - Intro and Trading Basics
  - Market Structure and Trading Contexts
  - Valuation and Selection Framework
  - Technical Analysis Basics
  - Intraday Tools and Short-Term Observation
  - Methodology and Mindset

## 5. Content Model

All content should be stored as Markdown files under `docs/`.

### Initial content pages

- `docs/index.md`
- `docs/plan/7-day.md`
- `docs/plan/60-minutes.md`
- `docs/plan/checklist.md`
- `docs/notes/intro-and-rules.md`
- `docs/notes/market-structure.md`
- `docs/notes/valuation-and-selection.md`
- `docs/notes/technical-basics.md`
- `docs/notes/intraday-tools.md`
- `docs/notes/methodology-and-mindset.md`

### Writing style

Pages should favor:

- short paragraphs
- flat bullet lists
- practical summaries
- explicit “common mistakes” or “things not to do”
- easy scanning for repeated study

## 6. UX and Visual Direction

### Overall feel

The site should feel like a learning handbook, not a template-generated docs portal.

### Homepage

The homepage should act as a study entry page rather than a generic hero banner.

It should include:

- site title
- one-line positioning statement
- three primary entry cards:
  - 7-Day Study Plan
  - Stock Knowledge Overview
  - Study by Topic

### Article pages

Article pages should keep the standard knowledge-base reading pattern:

- left sidebar for section navigation
- right table of contents
- readable content width
- highlighted callouts for key reminders where useful

### Visual language

- base background: off-white or light warm gray
- primary text: deep ink / near-black
- accent color: restrained dark green or muted gold-brown
- motion: minimal
- typography: default VitePress theme can be used initially, with light customization if needed

The first version should avoid spending time on ornamental design that does not improve readability.

## 7. File Structure

Expected project structure:

```text
/Users/murphy/Documents/stock
  package.json
  docs/
    index.md
    plan/
      7-day.md
      60-minutes.md
      checklist.md
    notes/
      intro-and-rules.md
      market-structure.md
      valuation-and-selection.md
      technical-basics.md
      intraday-tools.md
      methodology-and-mindset.md
    .vitepress/
      config.mjs
      theme/
        custom.css
```

## 8. Navigation Design

### Top navigation

Keep top-level navigation small:

- Home
- Learning Plan
- Stock Notes

### Sidebar

Sidebar should expose the main reading order directly:

- Learning Plan
  - 7-Day Study Plan
  - Daily 60-Minute Schedule
  - 7-Day Checklist
- Stock Notes
  - Intro and Trading Basics
  - Market Structure and Trading Contexts
  - Valuation and Selection Framework
  - Technical Analysis Basics
  - Intraday Tools and Short-Term Observation
  - Methodology and Mindset

## 9. Local Usage

The site should run locally with a minimal workflow:

```bash
npm install
npm run docs:dev
```

Optional production preview path:

```bash
npm run docs:build
npm run docs:preview
```

## 10. Risks and Constraints

- there is currently no existing git repository in this workspace, so the spec cannot be committed unless a repo is initialized later
- some source material came from prior summarization work rather than a structured local dataset, so first-version notes should be treated as curated study notes, not canonical originals
- VitePress homepage customization should remain modest to avoid unnecessary theme complexity

## 11. Success Criteria

The first version is successful if:

- the site starts locally without manual repair
- the homepage clearly routes the user into study content
- the sidebar structure matches the approved information architecture
- the 7-day plan content is preloaded
- the stock notes are split into topic pages and readable
- future content additions only require editing Markdown and config

## 12. Implementation Notes

Implementation should proceed in two phases:

1. foundation
   - initialize VitePress
   - configure package scripts
   - create navigation and theme overrides

2. content loading
   - add homepage
   - add plan pages
   - add stock note pages
   - verify local rendering and navigation
