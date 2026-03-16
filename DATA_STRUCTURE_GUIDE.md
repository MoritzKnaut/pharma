# Pharma Atlas Data Structure Guide

This document describes how to structure data when adding new medicament groups to the Pharma Atlas. Follow these guidelines to maintain consistency across all categories.

> **IMPORTANT:** This is the primary reference for data structure. Before adding any data, read this entire guide. The atlas is a learning overview, not a drug database—never include dosing, pharmacokinetics, manufacturer info, or exhaustive side effect lists.

> **GOLD STANDARD:** The **Antibiotika** category (`docs/src/data/categories/antibiotika/`) is the perfect example of correct data structure. Use it as reference for:
> - Mechanism-first organization
> - Proper Wirkstoffgruppe hierarchy
> - Creating meaningful subgroups by chemical/structural type
> - Consistent section grouping

## Core Concept

The Pharma Atlas is a **learning overview system**, not a drug database. Data should be structured for quick comprehension during learning, not exhaustive completeness.

## Quick Reference: Category Structure

```
docs/src/data/categories/<category-id>/
├── index.js              # Category composition root
├── semanticTags.js       # Category-specific tags
├── learning.js           # Overview/reference section
└── groups/
    ├── <group-1>/        # One folder per pharmacology overgroup
    │   ├── _main.js      # Overgroup header and sections array
    │   └── entries/      # Individual entry files
    │       ├── entry-a.js
    │       └── ...
    └── ...
```

> **File Size Rule:** Keep files small. No file should exceed ~80 lines. If a group has 3+ entries, use the folder structure with separate entry files.

## Data Patterns with Examples

### 1. Facts (`fact()`)

Facts are the basic unit of information with required `main` text and optional `detail`:

```javascript
// Simple fact
fact("Grampositive Bakterien")

// Fact with detail
fact(
  "Viele grampositive Bakterien",
  "inkl. MRE, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
)

// Muted fact (shown in gray)
fact(
  "Trimethoprim wird meist nicht allein eingesetzt",
  null,
  { muted: true }
)
```

**Rules:**
- Keep main text concise (max 5-6 words preferred)
- Never include dosing, prices, manufacturer info, or exhaustive side effects

### 2. Entry Structure (Wirkstoffgruppen)

```javascript
{
  name: "Makrolide",                  // Primary display name
  layout: "wide",                     // Optional: "wide" for complex groups
  
  // Simple substance list (or omit to use variants)
  substances: ["Azithromycin", "Clarithromycin", "Erythromycin"],
  
  // Info buckets (all optional)
  mechanism: [fact("Hemmung der Proteinsynthese")],           // Wirkmechanismus
  effectiveAgainst: [fact("Grampositive Bakterien")],         // Wirksamkeit
  cautions: [fact("Keine Wirkung gegen MRSA")],               // Grenzen
  indications: [fact("Pharyngitis", "Streptokokken")],       // Indikationen
  sideEffects: [fact("GI-Beschwerden", "Diarrhö")],          // Nebenwirkungen
  notes: [fact("Kreuzallergie mit Cephalosporinen")],        // Merke
  otherInfo: [fact("Für schwere Infektionen i.v. verfügbar")], // Sonstiges
  
  // Variant subgroups (optional)
  variants: [...],
  variantsKind: "subgroups" | "substances"   // How to render variants
}
```

### 3. Variants: Subgroups vs Substances

**As subgroups** (default - renders as separate cards):

```javascript
{
  name: "Penicilline",
  mechanism: [fact("β-Lactam: Hemmung der Zellwandsynthese")],
  variants: [
    {
      name: "Klassische Penicilline",
      substances: ["Penicillin G", "Penicillin V"],
      effectiveAgainst: [fact("Streptokokken")]
    },
    {
      name: "Aminopenicilline",
      substances: ["Ampicillin", "Amoxicillin"],
      effectiveAgainst: [fact("Erweitertes Spektrum")]
    }
  ]
  // variantsKind defaults to "subgroups"
}
```

**As substances** (renders in gray Substanzen bucket):

```javascript
{
  name: "Triazole",
  variantsKind: "substances",
  mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
  variants: [
    {
      name: "Fluconazol",
      effectiveAgainst: [
        fact("Hefen", "Candidose"),
        "Kryptokokkose"
      ],
      notes: [fact("Per os oder intravenös")]
    },
    {
      name: "Voriconazol",
      effectiveAgainst: [
        fact("Hefen", "Candidose"),
        fact("Aspergillose", "Standardtherapie")
      ]
    }
  ]
}
```

### 4. Reference Items (`referenceItem()`)

Used when a visible label should link to a differently named entry:

```javascript
referenceItem(
  "Tigecyclin",                           // visible label
  "Glycylcycline (z.B. Tigecyclin)",     // target entry name
  "z.B. bei schweren grampositiven Infektionen"  // optional detail
)
```

### 5. Overgroup Structure

```javascript
parts.overgroups.<overgroupId> = {
  id: "unique-overgroup-id",           // URL-friendly ID
  kind: "antibiotic",                  // "antibiotic", "antifungal", "antiviral", etc.
  theme: themes.blue,                  // visual theme (see below)
  title: "Display Title",              // shown in navigation
  kicker: "Short Description",         // shown below title
  description: "",                     // optional longer description
  sections: [...]                      // content sections
}
```

**Theme options:** `neutral`, `teal`, `amber`, `orange`, `blue`, `magenta`, `navy`, `clay`, `rose`, `violet`

### 6. Section Structure

```javascript
{
  id: "unique-section-id",            // URL anchor
  type: "entries",                    // "entries", "quickReference", "referenceIndex"
  title: "Section Title",
  hideTitle: false,                   // set true for flat layouts
  layout: "wide",                     // "wide" or default (optional)
  entries: [...]                     // entry cards
}
```

### 7. Learning/Overview Structure

```javascript
{
  id: "quick-reference",
  type: "quickReference",             // or "referenceIndex" for auto-generated
  title: "Anhand Erreger",
  cards: [
    {
      title: "Grampositive Erreger",
      items: [
        "Penicilline",                          // direct reference
        fact("Cephalosporine", "alle Generationen"),
        referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
      ],
      focusLabel: "Besonders wirksam",
      focusItems: ["Glykopeptide", "Oxazolidinone"]
    }
  ]
}
```

### 8. Semantic Tags

Tags highlight important concepts automatically using regex:

```javascript
parts.semanticTags = [
  { label: "Grampositiv", tone: "grampositive", match: /grampositiv/i },
  { label: "Gramnegativ", tone: "gramnegative", match: /gramnegativ/i },
  { label: "Anaerobier", tone: "anaerobic", match: /\banaerob/i },
  { label: "Pseudomonas", tone: "pseudomonas", match: /pseudomonas/i },
  { label: "MRSA", tone: "mrsa", match: /mrsa/i }
]
```

## File Templates

### Template 1: Simple Entry File (1-2 entries)

```javascript
(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("<category>");

  parts.overgroups.<camelCaseId> = {
    id: "kebab-case-id",
    kind: "<category-kind>",
    theme: themes.<color>,
    title: "Display Title",
    kicker: "Mechanism/Category Summary",
    sections: [
      {
        id: "section-id",
        type: "entries",
        hideTitle: true,
        entries: [
          {
            name: "Wirkstoffgruppe Name",
            substances: ["Substanz 1"],
            mechanism: [fact("Mechanism")],
            effectiveAgainst: [fact("Coverage")]
          }
        ]
      }
    ]
  };
})();
```

### Template 2: Split Structure (3+ entries)

**Entry file:** `groups/<group>/entries/makrolide.js`

```javascript
(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var parts = shared.getCategoryParts("<category>");

  parts.entries = parts.entries || {};
  parts.entries.makrolide = entry("Makrolide", {
    substances: ["Azithromycin", "Clarithromycin", "Erythromycin"],
    mechanism: [
      fact("Hemmung der bakteriellen Proteinsynthese", "Bindung an 50S")
    ],
    effectiveAgainst: [
      fact("Intrazelluläre Erreger und Atypiker", "Chlamydien, Mykoplasmen"),
      fact("Einige grampositive Bakterien", "z.B. Streptokokken")
    ]
  });
})();
```

**Main file:** `groups/<group>/_main.js`

```javascript
(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("<category>");

  var entries = [
    parts.entries.makrolide,
    parts.entries.tetracycline,
    // ... more entries
  ].filter(Boolean);

  parts.overgroups.<camelCaseId> = {
    id: "kebab-case-id",
    kind: "<category-kind>",
    theme: themes.<color>,
    title: "Display Title",
    kicker: "Mechanism/Category Summary",
    sections: [
      {
        id: "section-id",
        type: "entries",
        hideTitle: true,
        entries: entries
      }
    ]
  };
})();
```

### Template 3: Category Index

```javascript
(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("<category>");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.<category> = {
    id: "<category>",
    label: "Display Label",
    theme: themes.<color>,
    page: {
      title: "Page Title",
      description: "Meta description for SEO",
      navIntro: "Short intro shown in sidebar"
    },
    renderer: {
      semanticTags: parts.semanticTags
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.<group1>,
      parts.overgroups.<group2>
    ]
  };
})();
```

## Common Patterns Cheat Sheet

| Pattern | Structure |
|---------|-----------|
| **Mechanism** | `fact("Hemmung der [Zielstruktur]", "[Detail]")` |
| **Coverage** | `fact("[Stärke] gegen [Organismen]", "[Beispiele]")` |
| **Caution** | `fact("Keine Wirkung gegen [X]")` |
| **Note** | `fact("[Klinischer Tipp]", "[Erläuterung]")` |

## Best Practices

### Hierarchy Rules

#### Always Include Wirkstoffgruppe Level
**Every section must contain at least one Wirkstoffgruppe (entry). Never put substances directly in a section without a Wirkstoffgruppe wrapper.**

The "Wirkstoffgruppe" level is the standard entry point for all pharmacological information. **The UI breaks when this level is missing** because navigation expects that intermediate layer. Without it, clicking a section takes you directly to substances, bypassing the expected card structure.

All substance information must flow through: **Section → Wirkstoffgruppe → (Variants/Substances)**.

```
Section (e.g., "Antimetabolite")
  └── Wirkstoffgruppe (e.g., "Pyrimidin-Analoga") ← This level MUST exist
      └── Substances/Variants (e.g., "5-FU", "Capecitabin")
```

**Forbidden (Missing Wirkstoffgruppe Level):**
```javascript
// BAD: Section directly contains substances without Wirkstoffgruppe
sections: [{
  title: "Topoisomerase-Hemmer",
  entries: [
    { name: "Etoposid", ... },  // Wrong: substance at section level
    { name: "Irinotecan", ... }
  ]
}]
```

**Correct:**
```javascript
// GOOD: Section contains Wirkstoffgruppe which contains substances
sections: [{
  title: "Topoisomerase-Hemmer",
  entries: [
    {
      name: "Topoisomerase-II-Hemmer",  // Wirkstoffgruppe level ← MUST exist
      substances: ["Etoposid"]  // OK: Single substance is fine!
    },
    {
      name: "Topoisomerase-I-Hemmer",   // Another Wirkstoffgruppe
      substances: ["Irinotecan", "Topotecan"]
    }
  ]
}]
```

**Key Point:** Having a Wirkstoffgruppe with only one substance is **perfectly fine** if it represents a clinically meaningful mechanism class. The UI issue only occurs when the Wirkstoffgruppe level itself is missing.

---

#### Wirkstoffgruppen Should Be Groups, Not Individual Substances

**Wirkstoffgruppen (entries) should represent pharmacological or chemical GROUPS, not individual drug names.**

The entry name should describe the **mechanism class** or **substance group**, not a specific drug. Individual drugs should be listed as `substances` or `variants` within the group.

**Correct Pattern:**
```javascript
// GOOD: Entry name is a mechanism/substance GROUP
entry("HCA2-Rezeptor-Agonisten", {  // Mechanism group
  mechanism: [fact("Blockiert Einwanderung neutrophiler Granulozyten")],
  substances: ["Dimethylfumarat"]
})

entry("Toll-like-Rezeptor-Inhibitoren", {  // Mechanism group
  mechanism: [fact("Inhibition von TLR auf dendritischen Zellen")],
  substances: ["Hydroxychloroquin"]
})

// OR group by chemical/structural class:
entry("Fumarate", {  // Chemical group
  mechanism: [...],
  substances: ["Dimethylfumarat"]
})

entry("Chinoline", {  // Chemical group  
  mechanism: [...],
  substances: ["Hydroxychloroquin"]
})
```

**Incorrect Pattern:**
```javascript
// BAD: Entry name is an individual substance
entry("Dimethylfumarat", {  // Wrong - this is a drug name, not a group
  mechanism: [...]
  // No substances array - the entry IS the substance
})

entry("Hydroxychloroquin", {  // Wrong - this is a drug name, not a group
  mechanism: [...]
}
```

**Rationale:**
The Wirkstoffgruppe level should be a **categorization layer**, not just a wrapper around individual drugs. When the entry name equals a specific drug name, the hierarchy becomes flat and loses its organizational value.

**Exception for Truly Unique Substances:**
When a substance is genuinely one-of-a-kind with no related compounds and no meaningful mechanism/chemical classification exists, using the substance name as the entry name is acceptable. This should be rare.

**Examples of valid exceptions:**
- **Praziquantel** - Sole representative of pyrazinoisoquinoline derivatives for trematodes/cestodes
- **Glatirameracetat** - Unique random copolymer of amino acids with no chemical class peers
- **Ribavirin** - Broad-spectrum antiviral with unique guanosine analog structure

In these cases, consider whether the mechanism of action (even if unclear) could serve as the group name instead. If not, the individual substance name is permissible.

---

**A Wirkstoffgruppe containing only one substance is perfectly acceptable** if it represents a clinically or pharmacologically meaningful category.

**When Single-Substance Groups Are Fine:**
- Mechanism-based classification with only one representative drug (e.g., Topoisomerase-II-Hemmer with only Etoposid)
- Unique therapeutic class with no related substances
- Placeholder for future expansion

**Example - OK Single-Substance:**
```javascript
// GOOD: Meaningful mechanism class with one drug
entry("Topoisomerase-II-Hemmer", {
  mechanism: [fact("Hemmung der Topoisomerase II")],
  substances: ["Etoposid"]  // Only one, but pharmacologically distinct
})

// GOOD: Section with multiple entries, some single-substance
sections: [{
  title: "Topoisomerase-Hemmer",
  entries: [
    { name: "Anthracycline", substances: ["Doxorubicin", "Daunorubicin", ...] },  // Multiple
    { name: "Topoisomerase-I-Hemmer", substances: ["Irinotecan", "Topotecan"] },   // Multiple
    { name: "Topoisomerase-II-Hemmer", substances: ["Etoposid"] }                 // Single - OK!
  ]
}]
```

**UI Consideration:**
The only UI issue occurs when a section contains **only ONE** entry with **only ONE** substance. In this case, the navigation leads directly to a single card, which looks weird. The solution is to either:
1. Ensure sections have multiple entries (even if some are single-substance)
2. Combine truly isolated single-substance entries into broader "Sonstige" sections

**Example - Problematic (Fix This):**
```javascript
// BAD: Section with only one entry that has only one substance
sections: [{
  title: "Integrin-Inhibitoren",  // Section
  entries: [
    { name: "Integrin-Inhibitoren", substances: ["Natalizumab"] }  // Only entry + only substance
  ]
}]

// GOOD: Combined into broader section
sections: [{
  title: "Sonstige Biologicals",  // Broader section
  entries: [
    { name: "Integrin-Inhibitoren", substances: ["Natalizumab"] },  // Single - OK
    { name: "IgE-Inhibitoren", substances: ["Omalizumab"] }          // Another entry
  ]
}]
```

---

### General DOs and DON'Ts
- Keep facts concise and scannable (main: 3-6 words)
- Group related substances under common mechanisms
- Use `variantsKind: "substances"` for individual drugs with shared mechanisms
- Use `referenceItem()` when label ≠ target name
- Use `layout: "wide"` for complex Wirkstoffgruppen
- Hide section titles when they don't add value (`hideTitle: true`)

### DON'T:
- Include dosing, treatment regimens, or pharmacokinetic details
- List rare or theoretical side effects
- Duplicate information across entries
- Create sections with only one entry (flatten instead)
- Include manufacturer names or drug costs

## Adding New Data

### For 1-2 entries:
1. Create new file in `groups/` folder
2. Use `shared.getCategoryParts("<category>")` to get parts object
3. Register overgroup as `parts.overgroups.<id>`
4. Add to overgroups array in `index.js`

### For 3+ entries:
1. Create folder `groups/<group-name>/`
2. Create `_main.js` for overgroup header
3. Create `entries/` subfolder with one file per entry
4. Each entry registers as `parts.entries.<entryId>`
5. `_main.js` imports entries and builds sections
6. Add to overgroups array in `index.js`

### New Category:
1. Create folder `docs/src/data/categories/<new-category>/`
2. Create `index.js`, `semanticTags.js`, `learning.js`
3. Create `groups/` subfolder with group files
4. Add to `docs/src/data/atlasCollection.js`
5. Choose appropriate theme color

## System Architecture

See `Architecture.md` for overall system design and `Description.md` for user-facing features.
