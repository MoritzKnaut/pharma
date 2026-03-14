# Description

## Overview

The website is a compact learning reference for antibiotic classes and their typical activity spectra. It is based on `Antibiotika.md` and uses a two-step page structure: first an overgroup, then the concrete Wirkstoffgruppe inside it.

## Core Features

### Four Main Antibiotic Groups

The antibiotic content itself remains organized into the four requested groups:

- Äußere Begrenzungen
- Nukleinsäure und zugehörige Enzyme
- Bakterielle Ribosomen
- Folsäuremetabolismus

Each group contains the relevant antibiotic classes and, where needed, clearly separated subgroups such as cephalosporin generations or penicillin variants.

### Learning Overgroup

The page also contains a dedicated learning overgroup that collects the compact support material in one place:

- Schnellübersicht
- Merksätze

This keeps the learning aids together instead of scattering them outside the main navigation model.
`Merksätze` follows `Schnellübersicht` in the same column so the quick review flow stays top to bottom.

### Quick Learning Overview

The `Schnellübersicht` section groups typical options by pathogen pattern, for example:

- grampositive Erreger
- gramnegative Erreger
- Pseudomonas aeruginosa
- Anaerobier
- Atypiker
- MRSA
- VRE

This section is meant for rapid review before diving into the full class details.
Its listed options are rendered as colored Wirkstoffgruppe links that jump into the matching content cards, one line per option, with qualifiers shown inside the same link chip.
Its section labels also carry stronger meaning cues, for example emphasized `Besonders ...` blocks and red `Nicht wirksam` blocks.

### Clinical Memory Anchors

The `Merksätze` section surfaces short “Super-Kurz-Merke” cards for quick repetition.
These cards use the same semantic badges as the rest of the page, show the key items as colored Wirkstoffgruppe links, and use a stronger background than the quick-reference cards.

## Behavior And Presentation Rules

- Navigation is single-page, anchor-based, and two-step:
  - first the overgroup
  - then the section inside that overgroup
- Section blocks can be collapsed and expanded by clicking their full header row.
- The `Schnellübersicht` cards can also be collapsed and expanded by clicking their full header row.
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
- Key learning categories such as grampositive, gramnegative, anaerobe, atypische, or intrazelluläre patterns are color-coded so they can be recognized at a glance.
- Each antibiotic card shows content in consistent buckets:
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
- Dense outer-boundary sections such as `β-Lactam-Antibiotika` and `Zellwand- und Membranwirksame Antibiotika` use the full width so their card families can be read left to right.
- In the DNA-/RNA section, `Nitroimidazole` and `Ansamycine` share the row evenly beneath the full-width `Fluorchinolone` block on wider screens.
- On wide screens, the `Schnellübersicht` uses a balanced five-column layout so the ten cards sit in two even rows.
- Hovering a card emphasizes it while the rest of the page cards fade back gently, making the current focus area easier to scan without overly dimming the page.
- The page uses a deliberately clean, simple visual style, spreads content across the available browser width, and works without a build process.

## Publishing Contract

- GitHub Pages should publish the `docs/` directory.
- The published website files live in:
  - `docs/index.html`
  - `docs/src/app.js`
  - `docs/src/styles.css`
  - `docs/src/data/antibioticData.js`
- Repository-only Markdown files such as `Architecture.md`, `Description.md`, and `Antibiotika.md` stay at the repository root and are not part of the published site.

## Editing Contract

- Future content edits should normally happen in `docs/src/data/antibioticData.js`.
- `Antibiotika.md` remains the original note source and reference text.
- The site is presented as a learning overview and does not claim to replace therapy guidelines.
