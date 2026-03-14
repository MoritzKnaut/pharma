# Description

## Overview

The website is a compact learning reference for four anti-infective topic libraries:

- `Antibiotika`
- `Antimykotika`
- `Antiparasitika`
- `Virostatika`

Both libraries use the same single-page interaction model: first an overgroup, then the concrete section inside that overgroup.

## Core Features

### Topic Switcher

The page provides a topic switcher in the left sidebar. It swaps the complete content library while keeping the same layout, collapsible behavior, and navigation model. The active topic is selected via the `?thema=` query parameter.

### Antibiotic Library

The antibiotic content remains organized into the four requested groups:

- Äußere Begrenzungen
- Nukleinsäure und zugehörige Enzyme
- Bakterielle Ribosomen
- Folsäuremetabolismus

It also keeps the dedicated learning overgroup with `Anhand Erreger` and `Prägemuster`.

### Antimycotic Library

The antimycotic content is organized into four groups:

- Azol-Antimykotika
- Polyen-Antimykotika
- Echinocandine
- Weitere Antimykotika

It uses one focused support section: `Anhand Erreger`.

The antimycotic library stays intentionally compact and shows only:

- the four main antifungal groups
- each group’s main Wirkort
- the relevant Wirkstoffe inside those groups
- the most important target patterns such as Hefen, Schimmelpilze, Dermatophyten, Aspergillose, Kryptokokkose, and Onychomykosen

### Antiparasitic Library

The antiparasitic content is organized into three groups:

- Antiprotozoika
- Anthelminthika
- Ektoparasitizide

It uses one focused support section: `Anhand Erreger`.

The antiparasitic library stays intentionally compact and shows only:

- the main antiparasitic groups
- the relevant substances inside those groups
- the central mechanisms where they are explicitly given in the source
- the most important target patterns such as Protozoen, Nematoden, Cestoden, Trematoden, Skabies, Läuse, and Malaria

### Antiviral Library

The antiviral content is organized into four groups:

- Antivirale Pharmaka gegen Herpesviridae
- Antivirale Pharmaka gegen Influenzaviren
- Antiretrovirale Therapie bei HIV
- Antivirale Pharmaka gegen Hepatitis B und C

It uses one focused support section: `Anhand Erreger`.

The antiviral library stays intentionally compact and shows only:

- the main antiviral target areas from the source chapter
- the most important substances and substance groups
- core mechanisms where they are central for understanding
- the most important target patterns such as Herpes simplex, Varizella zoster, CMV, Influenza A/B, HIV, Hepatitis B, and Hepatitis C

### Learning Overgroups

Support material stays in explicit learning overgroups where it adds value. The antibiotic library uses `Anhand Erreger` and `Prägemuster`; the antimycotic, antiparasitic, and antiviral libraries currently use only `Anhand Erreger`.

The learning sections use linked cards so relevant items jump into the matching Wirkstoffgruppe cards whenever a target exists.

## Behavior And Presentation Rules

- Navigation is single-page, anchor-based, and two-step:
  - first the overgroup
  - then the section inside that overgroup
- The topic switcher changes the active library and reloads the page with the matching `?thema=` parameter.
- Section blocks can be collapsed and expanded by clicking their full header row.
- The compact overview cards can also be collapsed and expanded by clicking their full header row.
- Wirkstoffgruppe cards can also be collapsed and expanded by clicking their full header row.
- The card-internal content buckets can also be collapsed and expanded by clicking their full header row.
- The dedicated collapse button text is replaced by a chevron indicator.
- Section blocks start collapsed by default.
- Wirkstoffgruppe cards also start collapsed by default.
- Card-internal content buckets also start collapsed by default.
- Navigation into a section collapses the other section blocks and expands only the relevant target path.
- Clicking the same section navigation link again collapses that section back.
- In-page links expand the necessary parents first and then scroll to the linked target so the final position stays correct.
- Global `Alles ausklappen` and `Alles einklappen` actions in the left navigation expand or restore the full collapsed state for sections, Wirkstoffgruppen, and card-internal content buckets.
- Each top-level overgroup also provides local `Alles ausklappen` and `Alles einklappen` actions for just that group’s content.
- Below the navigation links, bucket bubbles such as `Substanzen`, `Wirksamkeit`, or `Wirkmechanismus` can be activated to auto-expand those matching content buckets whenever a section path is opened.
- The left navigation highlights the active section and its parent overgroup based on the current viewport position, including short pages and near-page-end states.
- Facts inside cards are shown with strong visual hierarchy:
  - primary learning statement first
  - additional example or bracket-style detail below it with less emphasis
- Bracket-style detail is only used for true add-on information; the main line always needs to stand on its own.
- Helper copy around sections and cards stays minimal and visually muted so the names and facts remain dominant.
- Top-level overgroups use a single visible heading line instead of stacked kicker-plus-title headings.
- The left navigation uses the same top-level headings as the visible overgroup headers instead of a separate label-plus-detail combination.
- Parenthetical subtitle styling is reserved for compact overview cards; Wirkstoffgruppen and subgroups keep one direct heading line for cleaner alignment.
- Key learning categories such as grampositive, gramnegative, anaerobe, atypische, Hefen, Schimmelpilze, Dermatophyten, Kryptokokken, Nematoden, Cestoden, Trematoden, Skabies, Herpes, Influenza, or Hepatitis are color-coded so they can be recognized at a glance.
- Each Wirkstoffgruppe card shows content in consistent buckets:
  - Substanzen
  - Wirksamkeit
  - Nebenwirkungen
  - Wirkmechanismus
  - Merke
  - Sonstiges
- `Grenzen` is no longer a standalone bucket. It appears as a clearly highlighted warning subsection inside `Wirksamkeit`.
- `Nebenwirkungen` and `Wirkmechanismus` are shown only when the respective card actually contains content.
- The `Substanzen` box stays visually muted and lists only a few important example agents for quick orientation.
- The `Sonstiges` box is even quieter, including its text content, and sits at the bottom of cards as a secondary footer-style block.
- Wirkstoffgruppen use a responsive grid that stays stable across wide and narrow screens.
- Longer Wirkstoffgruppen and subgroup titles reserve consistent heading space so neighboring cards stay aligned more reliably.
- The page uses a deliberately clean, simple visual style, spreads content across the available browser width, and works without a build process.

## Publishing Contract

- GitHub Pages should publish the `docs/` directory.
- The published website files live in:
  - `docs/index.html`
  - `docs/src/app.js`
  - `docs/src/styles.css`
  - `docs/src/data/antibioticData.js`
- Repository-only Markdown files such as `Architecture.md`, `Description.md`, `Antibiotika.md`, `Antimykotika.md`, `Antiparasitika.md`, and `Virostatika.md` stay at the repository root and are not part of the published site.

## Editing Contract

- Future content edits should normally happen in `docs/src/data/antibioticData.js`.
- `Antibiotika.md`, `Antimykotika.md`, `Antiparasitika.md`, and `Virostatika.md` remain the original note sources and reference texts.
- The site is presented as a learning overview and does not claim to replace therapy guidelines.
