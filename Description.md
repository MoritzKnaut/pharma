# Description

## Overview

The website is a compact **Pharma-Atlas** for clearly separated drug categories. Categories include Antibiotika, Antidiabetika, Antimykotika, Antiparasitika, Virostatika, Immunsuppressiva, and Zytostatika.

> **Note:** For data editing guidelines, see `DATA_STRUCTURE_GUIDE.md`. For system architecture, see `Architecture.md`.

## Core Features

### Category Switcher

The left sidebar switches the entire atlas category. The active category is selected through the query parameter `?kategorie=`. Existing links with `?thema=` continue to work.

### Start View And Group Selection

Each category now opens in a compact `Start` view. This page shows the available groups and their Wirkstoffgruppen in summary form so the user can pick a focused path first.

If a category contains `Links`, that block is shown as a distinct full-width shortcut card above the pharmacology groups so it reads as a separate navigation layer.

Selecting a group in the left navigation switches the page to that one overgroup only. The full content for other groups is no longer rendered at the same time. Returning to the category overview happens through the current category link in the category switcher.

### Learning Overviews

Categories can expose a top "turned around" view in two ways:

- manually curated `quickReference` sections, currently used for existing `Anhand Erreger` overviews
- generated `referenceIndex` sections, intended for new categories such as indication-based views

### Medication Cards

Entry and variant cards can show information buckets when data exists: Substanzen, Indikationen, Wirksamkeit, Nebenwirkungen, Wirkmechanismus, Merke, and Sonstiges. Legacy categories do not need `Indikationen`.

### Immunsuppressiva

The `Immunsuppressiva` category is organized into pharmacologically distinct main blocks. It now separates:

- zytostatic / cytotoxic immunosuppressants
- activation-inhibiting immunosuppressants
- leukocyte-migration inhibitors
- glucocorticoids
- biologicals / antibodies
- pleiotropic immunomodulators

This category therefore mixes classic transplant and autoimmune drugs with targeted antibody therapies, while keeping each mechanism family in its own visible navigation block.

## Behavior And Rules

- Navigation is now view-based at the category level:
  - first the category overview through the current category link
  - or one overgroup through the overgroup links
  - then the visible section, Wirkstoffgruppe, or subgroup inside an overgroup
- The sidebar no longer shows a separate `Start` link. Returning to the overview happens through the current category link in the category switcher.
- The sidebar always shows the available section and Wirkstoffgruppe links for the pharmacology overgroups.
- If a Wirkstoffgruppe renders its own subgroup cards, those subgroup links also appear nested in the sidebar.
- The `Start` page shows the same visible hierarchy depth as the sidebar, including subgroup links where those subgroup cards exist.
- On desktop, the browser page itself stays fixed to the viewport. The left navigation panel and the right content panel each scroll inside their own area.
- In the desktop sidebar, only the link list scrolls. `Seitensteuerung` and `Automatisch ausklappen` stay visible below the scrolling navigation.
- `Links` stay compact and only reveal their inner navigation when that overgroup is selected.
- The selected overgroup is stored in `?gruppe=`.
- The main content starts directly with the overview cards or the selected group panel. There is no separate hero panel.
- Older deep links without `?gruppe=` still open the correct overgroup when the hash points to a section, entry, or variant.
- Selected group pages use one outer content panel on the right side, with the group header rendered inside that panel.
- On desktop, the left navigation and the main content each keep the full viewport height and scroll internally when their content is longer than the screen.
- The shared shell stays visually neutral across categories. Accent colors are used on the concrete overgroups instead of on whole categories.
- Section blocks, reference cards, entry cards, and info buckets start collapsed.
- Collapsed boxes can be expanded by clicking anywhere on their visible box, not only on the small toggle icon.
- Collapsed intermediate groups and Wirkstoffgruppen are shown slightly muted so expanded cards stand out more clearly.
- The section layer is only shown when it adds real structure. Flatter categories can render their entry cards directly without an extra intermediate heading box.
- If an overgroup only has one technical section, that section can stay hidden so the user does not see the same hierarchy level twice.
- If a section would otherwise contain exactly one entry with the same title, that content is rendered directly in the section so the user does not have to expand the same label twice.
- Wirkstoffgruppe cards use the full available section width. If they contain subgroup/variant cards across two rows, those rows are balanced as evenly as possible.
- Subgroup variants such as generation or class groups render as their own collapsible cards.
- Substance variants such as individual drug names render inside the gray `Substanzen` bucket instead of as separate subgroup cards.
- Those nested substance cards are collapsible themselves and use the same standard inner info-box styling as the rest of the atlas.
- Global expand/collapse controls still work.
- The `Automatisch ausklappen` controls remain visible in the navigation in every view, including the `Start` view, keep their active state while navigating, and are applied again after navigation or hash-based deep links.
- In-page learning links still expand the required parents first and then scroll to the target.
- Links to individual cards inside `Links` also expand the targeted learning card automatically.
- Cross-group learning links switch to the correct overgroup before jumping to the target entry.
- Generated `referenceIndex` sections derive their cards directly from entry or variant fields such as `indications`.
- Existing manual `Anhand Erreger` overviews stay available where they already add value.
- Every `Links` overgroup also includes a second section `Anhang Erkrankung`, which is currently an empty placeholder.
- Group labels stay consistent across navigation, overview cards, and page metadata by using the overgroup title as the canonical heading.

## See Also

- `Architecture.md` - System design and technical architecture
- `DATA_STRUCTURE_GUIDE.md` - Data structure specifications and examples
