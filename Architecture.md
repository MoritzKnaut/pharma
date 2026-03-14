# Architecture

## Overview

This project is a small static single-page website that turns the raw notes in `Antibiotika.md` into a structured learning reference. The page is built around explicit overgroups, each of which owns its own second-level sections. That keeps navigation and content structure aligned. The published website lives inside `docs/` so GitHub Pages can serve one explicit folder while repository Markdown files stay outside the site.

## Main Building Blocks

### `docs/index.html`

Provides the page shell and the mounting points for the header, the two-step navigation, and the overgroup content panels.

### `docs/src/data/antibioticData.js`

Contains the canonical website content in one explicit object centered on `overgroups`:

- page metadata
- one learning overgroup for `Schnellübersicht` and `Merksätze`
- the four requested antibiotic overgroups
- second-level sections inside each overgroup
- optional short summaries on overgroups, sections, and cards
- cards or entries inside each section
- `Merksätze` cards with a label plus editable bullet items
- optional `substances` lists on entries and variants
- optional `sideEffects` lists on entries and variants
- optional `mechanism` lists on entries and variants
- optional `otherInfo` lists on entries and variants
- stable anchor targets for entries and variants, derived by the renderer
- collapsible section blocks, Wirkstoffgruppe cards, and card-internal info blocks, with all starting collapsed and header rows acting as the toggle surface
- global reset control that restores the initial collapsed page state
- fact items with `main`, optional `detail`, and optional muted-note presentation

This file is the intended editing surface for future content changes.

### `docs/src/app.js`

Reads the central data object, renders all visible sections, wires the active state for the two-step navigation, manages collapsible section blocks, Wirkstoffgruppe cards, and nested info blocks, starts them collapsed by default, expands only the relevant target path when navigation targets are used, and exposes a global reset control for returning to the initial collapsed page state. It also derives semantic tags such as grampositive, gramnegative, anaerobe, atypische, or intrazelluläre patterns from fact text, renders `Merksätze` as bullet lists, renders card buckets such as `Substanzen`, `Wirksamkeit`, `Nebenwirkungen`, `Wirkmechanismus`, `Merke`, and `Sonstiges`, nests `Grenzen` inside `Wirksamkeit`, resolves learning-card items to linked Wirkstoffgruppen, and promotes larger variant families into wider left-to-right layouts. It does not contain antibiotic facts itself; it only transforms data into HTML.

### `docs/src/styles.css`

Defines the visual system, responsive layout, group-specific accents, and the semantic color system for quick-glance fact tags. Styling depends on `data-group` attributes and semantic tag classes instead of content internals, so content and presentation stay loosely coupled.

### `docs/.nojekyll`

Ensures GitHub Pages serves the `docs/` folder as a plain static site without Jekyll processing.

## Responsibilities And Boundaries

- `Antibiotika.md` is the raw source note set.
- `docs/src/data/antibioticData.js` is the structured website content.
- `docs/src/app.js` is the only place that converts content into DOM markup.
- `docs/src/styles.css` is the only place that decides layout, color, spacing, and responsive behavior.
- `docs/` is the only folder GitHub Pages should publish.

The renderer must only consume the public shape of the `overgroups` data. Styling must only rely on stable IDs and `data-group` attributes.
Primary learning statements and secondary bracket-style details are separated in data so presentation can emphasize them differently without changing content.

## Data Flow

1. The browser loads `docs/index.html`.
2. `docs/src/data/antibioticData.js` defines `window.antibioticLibrary`.
3. `docs/src/app.js` reads that object, builds the two-step navigation, and fills the page placeholders.
4. CSS applies layout and group-specific visual treatment.

There is no build step, no backend, and no runtime fetching.

## Folder Structure

- `Antibiotika.md`: original notes that the site content is based on
- `docs/index.html`: static page shell for the published site
- `docs/src/data/antibioticData.js`: editable structured content
- `docs/src/app.js`: renderer and navigation behavior
- `docs/src/styles.css`: visual system and responsive layout
- `docs/.nojekyll`: GitHub Pages static-site marker
- root `*.md` files: repository documentation and source notes, intentionally outside the published site

## Constraints

- Keep content changes concentrated in `docs/src/data/antibioticData.js`.
- Keep site files inside `docs/` so GitHub Pages can publish one explicit folder.
- Keep rendering logic simple and data-driven.
- Keep navigation aligned with the content model: overgroup first, section second.
- Keep `Schnellübersicht` and `Merksätze` together under the dedicated learning overgroup.
- Keep Markdown source and documentation files at the repository root so they stay outside the published site.
- Preserve the four top-level groups:
  - Äußere Begrenzungen
  - Nukleinsäure und zugehörige Enzyme
  - Bakterielle Ribosomen
  - Folsäuremetabolismus
