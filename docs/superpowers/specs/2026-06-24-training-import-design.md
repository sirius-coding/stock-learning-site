# Retail Investor Training Import Design

**Goal:** Import the `training/` series ("一个散户的自我修养") into the local stock learning site as a dedicated top-level reading section with one page per chapter and a directory page.

## Direction

This import should preserve the original reading order rather than re-compressing the content into topic summaries again.

The section should:

- live alongside the existing learning-plan and stock-note sections
- expose a dedicated overview page
- keep one page per chapter
- use a consistent chapter template

## Information Architecture

- 散户修养
  - 导读
  - 序言，前言
  - 第1章 到 第17章

## Page Structure

Each chapter page should include:

- chapter positioning
- core points
- detailed summary
- what beginners should remember
- source mapping

## Scope

### In scope

- add overview page
- add chapter pages
- update top nav
- update sidebar
- optionally expose the section from homepage entry cards

### Out of scope

- full raw-text archival import
- search customization
- cross-link graph between all chapters

## Success Criteria

- all chapters are reachable from sidebar
- chapter order matches the source order
- build succeeds
- the new section does not disrupt the existing site structure
