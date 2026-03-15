# Architecture

## Overview

This project is a small static single-page website that presents a growing **Pharma-Atlas**. The page stays renderer-driven, but the medical content is no longer stored in one monolithic file. Instead, every drug category owns its own folder with a small composition file and smaller content parts so the data stays readable, reviewable, and directly editable by humans.

The current atlas contains:

- `Antibiotika`
- `Antimykotika`
- `Antiparasitika`
- `Virostatika`
- `Immunsuppressiva` as an empty scaffold for the next expansion step

## Main Building Blocks

### `docs/index.html`

Provides the static page shell and loads the data files in explicit order:

1. shared schema and renderer configuration
2. one category file per drug category
3. the collection composition root
4. the renderer

### `docs/src/data/shared.js`

Contains the shared editing vocabulary:

- `fact(...)` for editable fact rows
- `referenceItem(...)` for explicit learning-link rows
- `getCategoryParts(...)` for assembling one category from smaller files
- shared themes
- shared renderer labels
- info-bucket definitions

This file is the only shared data dependency that category files import indirectly through the global `window.pharmaAtlasShared` object.

### `docs/src/data/categories/<category>/...`

Each category folder owns exactly one atlas category. The folder is split into:

- `index.js`: small category composition root
- `semanticTags.js`: tags used only by this category
- `learning.js`: top learning/support overgroup
- `groups/*.js`: one file per pharmacology overgroup

Each group file contains only the sections and entries for that overgroup.

Example:

- `docs/src/data/categories/antibiotika/index.js`
- `docs/src/data/categories/antibiotika/semanticTags.js`
- `docs/src/data/categories/antibiotika/learning.js`
- `docs/src/data/categories/antibiotika/groups/*.js`

### `docs/src/data/atlasCollection.js`

Composes the shared renderer configuration and the ordered category list into one explicit public collection: `window.pharmaAtlasCollection`.

This is the only composition root for site data.

### `docs/src/app.js`

Reads `window.pharmaAtlasCollection`, resolves the active category from the query parameter, resolves the active page view (`Start` or one selected overgroup), renders navigation and content, manages collapsible UI state, persists the selected auto-expand buckets in browser storage, and builds learning cross-links.

It also supports two kinds of top reference sections:

- `quickReference`: manually curated cards such as existing pathogen overviews
- `referenceIndex`: automatically generated cards derived from entry or variant data such as `indications`

Entry sections can optionally hide their own visible heading when they only serve as an internal grouping layer. This keeps categories with flatter structures aligned with the same renderer without forcing redundant intermediate boxes.

Learning links are now explicit. When a visible label should point to a different entry name, the data uses `referenceItem(...)` instead of a hidden global alias list.

### `docs/src/styles.css`

Contains the shared visual system, responsive layout, and bucket styling. Styling depends on generic classes and theme variables, not on category-specific markup forks.

## Responsibilities And Boundaries

- `docs/src/data/shared.js` defines the shared schema and renderer vocabulary.
- Each category folder in `docs/src/data/categories/` defines one category and only that category.
- `docs/src/data/atlasCollection.js` only assembles existing pieces; it does not own medical facts.
- `docs/src/app.js` only renders the public data shape; it does not contain domain content.
- `docs/src/styles.css` only owns presentation.

Medical content must live only in the category data files. There are no separate root Markdown note sources anymore.

## Data Flow

1. The browser loads `docs/index.html`.
2. `docs/src/data/shared.js` defines the shared schema and renderer configuration.
3. Each file inside a category folder registers one category part in `window.pharmaAtlasCategoryParts`.
4. Each category `index.js` composes those parts into one category in `window.pharmaAtlasCategories`.
5. `docs/src/data/atlasCollection.js` assembles the ordered category list in `window.pharmaAtlasCollection`.
6. `docs/src/app.js` selects the active category from `?kategorie=` with backward-compatible support for `?thema=`.
7. `docs/src/app.js` selects the active content view from `?gruppe=` or, for older deep links, infers the correct overgroup from the current hash.
8. The renderer builds either:
   - the category start overview with compact group and Wirkstoffgruppen summaries
   - or exactly one selected overgroup with its full sections and cards
9. The renderer still builds generated `referenceIndex` sections such as future indication-based overviews.

There is no build step, no backend, and no runtime fetching.

## Folder Structure

- `docs/index.html`: published page shell
- `docs/src/data/shared.js`: shared schema, labels, themes, and generic helper functions
- `docs/src/data/categories/<category>/index.js`: category composition root
- `docs/src/data/categories/<category>/semanticTags.js`: category-specific tags
- `docs/src/data/categories/<category>/learning.js`: category learning overgroup
- `docs/src/data/categories/<category>/groups/*.js`: one group file per overgroup
- `docs/src/data/atlasCollection.js`: category composition root
- `docs/src/app.js`: generic renderer, category/start-view navigation, and interaction logic
- `docs/src/styles.css`: shared visual system
- `docs/.nojekyll`: GitHub Pages static-site marker

## Constraints

- Keep `shared.js` generic. Category-specific tags or learning-link rules do not belong there.
- Keep one category folder per category, with a small `index.js` and smaller content files below it.
- Keep category part files focused on content, not rendering logic.
- Keep top “turned around” views data-driven:
  - existing curated pathogen views may stay `quickReference`
  - new indication-based views should use `referenceIndex`
- Keep the section layer optional in the UI:
  - use visible sections when they add real grouping value
  - use hidden sections only as a technical composition layer for direct entry-card rendering
- Keep category navigation query-driven:
  - `?kategorie=` selects the category
  - `?gruppe=` selects one overgroup
  - no `?gruppe=` means the category start overview
- Keep learning links explicit when labels intentionally differ from entry names.
- Keep cross-group learning links route-aware so links still work when only one overgroup is rendered.
- Keep `indications` optional so legacy categories do not need placeholder data.
- Keep all medical source data inside `docs/src/data/categories/`.
- Keep the site static and GitHub-Pages-compatible.
