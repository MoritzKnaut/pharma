# Description

## Overview

The website is a compact **Pharma-Atlas** for clearly separated drug categories. It currently provides five selectable categories:

- `Antibiotika`
- `Antimykotika`
- `Antiparasitika`
- `Virostatika`
- `Immunsuppressiva`

`Immunsuppressiva` is intentionally still empty. The structure is present so the next data expansion can happen directly in its own category file.

## Core Features

### Category Switcher

The left sidebar switches the entire atlas category. The active category is selected through the query parameter `?kategorie=`. Existing links with `?thema=` continue to work.

### Start View And Group Selection

Each category now opens in a compact `Start` view. This page shows the available groups and their Wirkstoffgruppen in summary form so the user can pick a focused path first.

Selecting a group in the left navigation switches the page to that one overgroup only. The full content for other groups is no longer rendered at the same time. The `Start` view remains selectable in the navigation so the user can return to the overview at any point.

### Category-Specific Data Files

Each category is edited in its own folder under `docs/src/data/categories/`. The content is split into smaller files for learning sections, semantic tags, and pharmacology groups. There are no separate medication Markdown source files anymore.

### Learning Overviews

Categories can expose a top “turned around” view in two ways:

- manually curated `quickReference` sections, currently used for existing `Anhand Erreger` overviews
- generated `referenceIndex` sections, intended for new categories such as indication-based views

This allows the atlas to keep classic pathogen-based overviews while adding future disease/indication-driven views without duplicating medication facts across multiple files.

Learning links are explicit in the data. When a visible label should point to a differently named entry, that row carries its own target instead of relying on hidden global alias rules.

### Medication Cards

Entry and variant cards can show these information buckets when data exists:

- `Substanzen`
- `Indikationen`
- `Wirksamkeit`
- `Nebenwirkungen`
- `Wirkmechanismus`
- `Merke`
- `Sonstiges`

Legacy categories do not need `Indikationen`. The bucket stays hidden unless data is present.

## Behavior And Rules

- Navigation is now view-based at the category level:
  - first the `Start` view or one overgroup
  - then the section inside the selected overgroup
- The selected overgroup is stored in `?gruppe=`.
- The main content starts directly with the overview cards or the selected group panel. There is no separate hero panel.
- Older deep links without `?gruppe=` still open the correct overgroup when the hash points to a section, entry, or variant.
- Selected group pages use one outer content panel on the right side, with the group header rendered inside that panel.
- On desktop, the left navigation keeps the full viewport height and scrolls internally when its content is longer than the screen.
- The shared shell stays visually neutral across categories. Accent colors are used on the concrete overgroups instead of on whole categories.
- Section blocks, reference cards, entry cards, and info buckets start collapsed.
- The section layer is only shown when it adds real structure. Flatter categories can render their entry cards directly without an extra intermediate heading box.
- If a section would otherwise contain exactly one entry with the same title, that content is rendered directly in the section so the user does not have to expand the same label twice.
- Wirkstoffgruppe cards use the full available section width. If they contain subgroup/variant cards across two rows, those rows are balanced as evenly as possible.
- Global expand/collapse controls still work.
- The `Automatisch ausklappen` controls remain visible in the navigation in every view, including the `Start` view, keep their active state while navigating, and are applied again after navigation or hash-based deep links.
- In-page learning links still expand the required parents first and then scroll to the target.
- Cross-group learning links switch to the correct overgroup before jumping to the target entry.
- Generated `referenceIndex` sections derive their cards directly from entry or variant fields such as `indications`.
- Existing manual `Anhand Erreger` overviews stay available where they already add value.
- Group labels stay consistent across navigation, overview cards, and page metadata by using the overgroup title as the canonical heading.

## Current Category Scope

### Antibiotika

Keeps the existing pharmacology structure and the curated learning sections `Anhand Erreger` and `Prägemuster`.

### Antimykotika

Keeps the existing four antifungal groups and the curated `Anhand Erreger` overview.

### Antiparasitika

Keeps the existing antiparasitic groups and the curated `Anhand Erreger` overview.

### Virostatika

Keeps the existing antiviral groups and the curated `Anhand Erreger` overview.

### Immunsuppressiva

Provides the empty scaffold for the next category. It already includes an automatically generated top section `Anhand Indikationen`, which currently shows an empty-state message until data is added.

## Editing Contract

- Future content edits should happen in the category folders under `docs/src/data/categories/`.
- Shared labels, bucket definitions, themes, and generic helper functions live in `docs/src/data/shared.js`.
- Category-specific semantic tags live beside the category they belong to.
- New categories should get their own dedicated folder and be added to `docs/src/data/atlasCollection.js`.
- New indication-based top views should be modeled through `indications` data on entries or variants plus a `referenceIndex` section.
- The site is a learning overview and does not replace therapy guidelines.
