# Pharma Atlas Agent Rules

## Agent Behavioral Rules

- Always run lint and typecheck commands if available
- Never commit changes unless explicitly asked
- Keep responses concise and direct
- Follow existing code patterns and conventions

## Data Structure Rules (See DATA_STRUCTURE_GUIDE.md)

For rules about data organization and UI structure, refer to **DATA_STRUCTURE_GUIDE.md** which contains:

- **Hierarchy Rules:** Every section must contain at least one Wirkstoffgruppe level
  - The UI breaks when substances are placed directly in sections without the Wirkstoffgruppe wrapper
  - Single-substance Wirkstoffgruppen are fine as long as the level exists
  - The only problematic case: Section with only one entry that has only one substance

- **Mechanism-First Organization:** Default organization by Wirkmechanismus
  - Section level: Mechanism target or class
  - Wirkstoffgruppe level: Chemical/structural groups
  - Subgroups: Detailed mechanism or chemical subtypes (when meaningful)

- **Best Practices:** See DATA_STRUCTURE_GUIDE.md for complete examples
**Every section must contain at least one Wirkstoffgruppe (entry). Never put substances directly in a section without a Wirkstoffgruppe wrapper.**

#### Rationale
The "Wirkstoffgruppe" level is the standard entry point for all pharmacological information. Skipping this level breaks the consistent navigation structure and UI patterns. All substance information must flow through: Section → Wirkstoffgruppe → (Variants/Substances).

#### Required Structure
```
Section (e.g., "Antimetabolite")
  └── Wirkstoffgruppe (e.g., "Pyrimidin-Analoga") ← This level MUST exist
      └── Substances/Variants (e.g., "5-FU", "Capecitabin")
```

#### Forbidden Structure
```javascript
// BAD: Section directly contains variants without Wirkstoffgruppe
sections: [{
  title: "Adhäsions- und IgE-Inhibitoren",
  entries: [{
    name: "Natalizumab",  // Wrong: substance at Wirkstoffgruppe level
    ...
  }]
}]
```

#### Correct Structure
```javascript
// GOOD: Section contains Wirkstoffgruppe which contains variants
sections: [{
  title: "Sonstige Biologicals",  // Section level
  entries: [{
    name: "Adhäsions- und IgE-Inhibitoren",  // Wirkstoffgruppe level ← MUST exist
    variants: [
      { name: "Natalizumab", ... },
      { name: "Omalizumab", ... }
    ]
  }]
}]
```

---

### Rule: Organize by Mechanism/Substance Group
**Substances should be organized hierarchically by Wirkmechanismus or chemische Substanzgruppe.**

#### Principle
Create meaningful groupings at every level:
- **Section level**: Broad therapeutic categories (e.g., "Niedermolekulare Immunmodulatoren")
- **Wirkstoffgruppe level**: Mechanism-based or structural groups (e.g., "Aminosalicylate", "5-ASA-Derivate")
- **Subgroup/Variant level**: Specific substances organized by sub-mechanism or chemical subtype

#### When to Create Subgroups
Use subgroups when substances within a Wirkstoffgruppe have distinct:
- Mechanistic subtypes (e.g., different enzyme targets)
- Chemical subclasses (e.g., prodrugs vs. active forms)
- Therapeutic applications (e.g., intestinal vs. systemic)

#### Example: Aminosalicylate with Mechanism-Based Subgroups
```javascript
// Section → Wirkstoffgruppe → Mechanism Subgroups → Substances
sections: [{
  title: "Niedermolekulare Immunmodulatoren",
  entries: [{
    name: "Aminosalicylate",
    mechanism: [fact("Hemmung der Leukotrien- und Prostaglandin-Synthese")],
    variantsKind: "subgroups",
    variants: [
      {
        name: "5-ASA-Derivate",  // Subgroup by mechanism/chemistry
        variantsKind: "substances",
        variants: [
          { name: "Mesalazin", mechanism: [...] }
        ]
      },
      {
        name: "Sulfasalazin und Metaboliten",  // Subgroup for prodrug
        variantsKind: "substances", 
        variants: [
          { name: "Sulfasalazin", mechanism: [fact("Prodrug zu Sulfapyridin + 5-ASA")] }
        ]
      }
    ]
  }]
}]
```

#### Alternative: Flat Structure for Simple Groups
```javascript
// For groups with few substances and shared mechanism:
// Section → Wirkstoffgruppe → Substances (no intermediate subgroup)
entry("Hydroxychloroquin", {
  mechanism: [fact("Toll-like-Rezeptor-Inhibition")],
  // Direct substance listing when no meaningful subdivision exists
})
```

#### Key Decision Points
1. **Multiple substances with same mechanism** → Direct variants, no subgroups needed
2. **Multiple substances with related but distinct mechanisms** → Create subgroups
3. **Single substance** → No subgroup, but keep as variant for consistency
4. **Complex prodrugs/metabolites** → Subgroup for parent compound + active forms
**Never create entry-level groups (Wirkstoffgruppen) that contain only a single substance.**

#### Rationale
Groups with only one substance create unnecessary nesting in the navigation and UI. The navigation shows these as clickable items that lead to a page with just one entry card, which looks weird and provides poor UX.

#### When to Avoid
- Creating separate entries for groups with only 1 substance (e.g., "Integrin-Inhibitoren" with only Natalizumab)
- Splitting related single-substance groups into separate navigation items

#### Solutions
1. **Combine related single-substance groups** into one entry with subgroups or variants
2. **List substances directly** in the parent section's description or as inline items
3. **Use variants** within a broader category entry

#### Examples

**Bad:**
```javascript
// Separate entries, each with 1 substance
sections: [
  { title: "Integrin-Inhibitoren", entries: [integrinInhibitoren] }, // Only Natalizumab
  { title: "IgE-Inhibitoren", entries: [igeInhibitoren] }           // Only Omalizumab
]
```

**Good (separate Wirkstoffgruppen with 1 substance each, under common section):**
```javascript
// Two separate Wirkstoffgruppen under one "Sonstige" section
sections: [{
  title: "Sonstige Biologicals",  // Section level
  entries: [
    {
      name: "Integrin-Inhibitoren",  // Wirkstoffgruppe 1
      variants: [{ name: "Natalizumab", ... }]
    },
    {
      name: "IgE-Inhibitoren",  // Wirkstoffgruppe 2
      variants: [{ name: "Omalizumab", ... }]
    }
  ]
}]
```

**Also Good:**
```javascript
// Listed directly in parent section description
sections: [
  { 
    title: "Sonstige Biologicals",
    description: "Natalizumab (Integrin-Inhibitor), Omalizumab (IgE-Inhibitor)"
  }
]
```
