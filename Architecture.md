# Architecture

## Overview

This project is a small static single-page website that turns the raw notes in `Antibiotika.md`, `Antimykotika.md`, `Antiparasitika.md`, and `Virostatika.md` into structured learning references. The page supports four topic libraries that share the same renderer and visual system. Each library is built around explicit overgroups, each of which owns its own second-level sections. The published website lives inside `docs/` so GitHub Pages can serve one explicit folder while repository Markdown files stay outside the site.

## Main Building Blocks

### `docs/index.html`

Provides the page shell and the mounting points for the topic switcher, the header, the two-step navigation, and the overgroup content panels.

### `docs/src/data/antibioticData.js`

Contains the canonical website content in one explicit collection centered on `libraries`:

- one library for `Antibiotika`
- one library for `Antimykotika`
- one library for `Antiparasitika`
- one library for `Virostatika`
- one shared renderer configuration for labels, info buckets, semantic tags, and learning-link aliases
- page metadata per library
- theme colors per library and per overgroup
- optional focused support overgroups such as `Anhand Erreger` and `Prägemuster`
- topic-specific overgroups and second-level sections inside each library
- optional short summaries on overgroups, sections, and cards
- cards or entries inside each section
- compact pattern cards with a label plus editable bullet items
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

Reads the central library collection, selects the active topic library from the `?thema=` query parameter, reads the shared renderer configuration, renders all visible sections, wires the active state for the two-step navigation, manages collapsible section blocks, Wirkstoffgruppe cards, and nested info blocks, starts them collapsed by default, expands only the relevant target path when navigation targets are used, and exposes a global reset control for returning to the initial collapsed page state. It also renders the topic switcher, updates document metadata per library, applies library and overgroup theme colors as CSS variables, derives semantic tags from renderer-configured definitions, renders compact pattern cards as bullet lists, renders info buckets from renderer-configured bucket definitions, resolves learning-card items to linked Wirkstoffgruppen through renderer-configured aliases, and promotes larger variant families into wider left-to-right layouts. It does not contain domain facts itself; it only transforms data into HTML.

### `docs/src/styles.css`

Defines the shared visual system, responsive layout, topic-specific accents, and the semantic color system for quick-glance fact tags. Styling depends on renderer-provided CSS custom properties, generic classes, and semantic tag classes instead of hardcoded topic IDs, so content and presentation stay loosely coupled.

### `docs/.nojekyll`

Ensures GitHub Pages serves the `docs/` folder as a plain static site without Jekyll processing.

## Responsibilities And Boundaries

- `Antibiotika.md`, `Antimykotika.md`, `Antiparasitika.md`, and `Virostatika.md` are the raw source note sets.
- `docs/src/data/antibioticData.js` is the structured website content collection.
- `docs/src/app.js` is the only place that converts content into DOM markup.
- `docs/src/styles.css` is the only place that decides layout, color, spacing, and responsive behavior.
- `docs/` is the only folder GitHub Pages should publish.

The renderer must only consume the public shape of the `renderer`, `libraries`, and `overgroups` data. Styling must only rely on generic classes and CSS custom properties that the renderer derives from data. Primary learning statements and secondary bracket-style details are separated in data so presentation can emphasize them differently without changing content.

## Data Flow

1. The browser loads `docs/index.html`.
2. `docs/src/data/antibioticData.js` defines `window.medicationLibraryCollection` with both content and renderer configuration.
3. `docs/src/app.js` selects the active library, reads the renderer configuration, builds the topic switcher and two-step navigation, and fills the page placeholders.
4. CSS applies layout and group-specific visual treatment.

There is no build step, no backend, and no runtime fetching.

## Folder Structure

- `Antibiotika.md`: original source notes for the antibiotic library
- `Antimykotika.md`: original source notes for the antifungal library
- `Antiparasitika.md`: original source notes for the antiparasitic library
- `Virostatika.md`: original source notes for the antiviral library
- `docs/index.html`: static page shell for the published site
- `docs/src/data/antibioticData.js`: editable structured content collection
- `docs/src/app.js`: renderer and navigation behavior
- `docs/src/styles.css`: visual system and responsive layout
- `docs/.nojekyll`: GitHub Pages static-site marker
- root `*.md` files: repository documentation and source notes, intentionally outside the published site

## Constraints

- Keep content changes concentrated in `docs/src/data/antibioticData.js`.
- Keep site files inside `docs/` so GitHub Pages can publish one explicit folder.
- Keep rendering logic simple and data-driven.
- Keep the shared renderer generic enough to handle all topic libraries without topic-specific HTML forks or hardcoded domain mappings.
- Keep navigation aligned with the content model: overgroup first, section second.
- Keep optional support sections explicit instead of mixing them into pharmacology groups.
- Keep Markdown source and documentation files at the repository root so they stay outside the published site.
- Preserve the four top-level antibiotic groups:
  - Äußere Begrenzungen
  - Nukleinsäure und zugehörige Enzyme
  - Bakterielle Ribosomen
  - Folsäuremetabolismus
- Preserve the four top-level antimycotic groups:
  - Azol-Antimykotika
  - Polyen-Antimykotika
  - Echinocandine
  - Weitere Antimykotika
- Preserve the three top-level antiparasitic groups:
  - Antiprotozoika
  - Anthelminthika
  - Ektoparasitizide
- Preserve the three top-level antiviral groups:
  - Antivirale Pharmaka gegen Herpesviridae
  - Antivirale Pharmaka gegen Influenzaviren
  - Antiretrovirale Therapie bei HIV
  - Antivirale Pharmaka gegen Hepatitis B und C
