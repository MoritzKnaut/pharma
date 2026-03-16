(function () {
  function fact(main, detail, options) {
    var item = {
      main: main,
    };

    if (!detail) {
      if (options && options.muted) {
        item.muted = true;
      }

      return item;
    }

    item.detail = detail;

    if (options && options.muted) {
      item.muted = true;
    }

    return item;
  }

  function referenceItem(main, target, detail, options) {
    var item = fact(main, detail, options);

    item.target = target;

    return item;
  }

  function getCategoryParts(categoryId) {
    window.pharmaAtlasCategoryParts = window.pharmaAtlasCategoryParts || {};

    if (!window.pharmaAtlasCategoryParts[categoryId]) {
      window.pharmaAtlasCategoryParts[categoryId] = {
        semanticTags: [],
        overgroups: {},
        entries: {},
      };
    }

    return window.pharmaAtlasCategoryParts[categoryId];
  }

  // Helper to create a Wirkstoffgruppe entry
  function entry(name, data) {
    var item = {
      name: name,
    };

    if (data.substances) {
      item.substances = data.substances;
    }
    if (data.mechanism) {
      item.mechanism = data.mechanism;
    }
    if (data.effectiveAgainst) {
      item.effectiveAgainst = data.effectiveAgainst;
    }
    if (data.cautions) {
      item.cautions = data.cautions;
    }
    if (data.indications) {
      item.indications = data.indications;
    }
    if (data.sideEffects) {
      item.sideEffects = data.sideEffects;
    }
    if (data.cave) {
      item.cave = data.cave;
    }
    if (data.remember) {
      item.remember = data.remember;
    }
    if (data.additional) {
      item.additional = data.additional;
    }
    if (data.variants) {
      item.variants = data.variants;
    }
    if (data.variantsKind) {
      item.variantsKind = data.variantsKind;
    }
    if (data.layout) {
      item.layout = data.layout;
    }
    if (data.overview) {
      item.overview = data.overview;
    }

    return item;
  }

  // Helper to create a variant entry
  function variant(name, data) {
    var item = {
      name: name,
    };

    if (data.substances) {
      item.substances = data.substances;
    }
    if (data.effectiveAgainst) {
      item.effectiveAgainst = data.effectiveAgainst;
    }
    if (data.cautions) {
      item.cautions = data.cautions;
    }
    if (data.cave) {
      item.cave = data.cave;
    }
    if (data.remember) {
      item.remember = data.remember;
    }
    if (data.additional) {
      item.additional = data.additional;
    }
    if (data.sideEffects) {
      item.sideEffects = data.sideEffects;
    }
    if (data.variants) {
      item.variants = data.variants;
    }
    if (data.variantsKind) {
      item.variantsKind = data.variantsKind;
    }

    return item;
  }

  var themes = {
    neutral: {
      accent: "#475569",
      accentSoft: "#eef2f7",
      accentStrong: "#334155",
    },
    teal: {
      accent: "#0f766e",
      accentSoft: "#e9f6f2",
      accentStrong: "#115e59",
    },
    amber: {
      accent: "#b7791f",
      accentSoft: "#fff5db",
      accentStrong: "#9a670f",
    },
    orange: {
      accent: "#b45309",
      accentSoft: "#fff3e4",
      accentStrong: "#92400e",
    },
    blue: {
      accent: "#1d4ed8",
      accentSoft: "#ebf2ff",
      accentStrong: "#1d4ed8",
    },
    magenta: {
      accent: "#8b1e54",
      accentSoft: "#fde7f1",
      accentStrong: "#9d174d",
    },
    navy: {
      accent: "#0f4c81",
      accentSoft: "#e6f0fa",
      accentStrong: "#0b3b63",
    },
    clay: {
      accent: "#9a3412",
      accentSoft: "#ffefe8",
      accentStrong: "#7c2d12",
    },
    rose: {
      accent: "#8b1e3f",
      accentSoft: "#fde8ef",
      accentStrong: "#7a1637",
    },
    violet: {
      accent: "#7c3aed",
      accentSoft: "#f5efff",
      accentStrong: "#6d28d9",
    },
  };

  var rendererConfig = {
    labels: {
      librarySwitcher: "Kategorie",
      pageControls: "Seitensteuerung",
      autoExpand: "Automatisch ausklappen",
      expandAll: "Alles ausklappen",
      collapseAll: "Alles einklappen",
      entryEyebrow: "Wirkstoffgruppe",
      pearlEyebrow: "Merksatz",
      quickReferencePrimary: "Typische Optionen",
      referenceIndexPrimary: "Medikamente",
      learningFocusFallback: "Fokus",
      learningWarningFallback: "Hinweise",
      emptyReferenceIndex: "Noch keine Einträge vorhanden.",
    },
    infoBuckets: [
      {
        kind: "substances",
        label: "Substanzen",
        title: "Substanzen",
        tone: "substances",
        source: "substances",
        listType: "plain",
      },
      {
        kind: "indications",
        label: "Indikationen",
        title: "Indikationen",
        tone: "indications",
        source: "indications",
      },
      {
        kind: "effectiveness",
        label: "Wirksamkeit",
        title: "Wirksamkeit",
        tone: "positive",
        source: "effectiveAgainst",
        subsections: [
          {
            source: "cautions",
            title: "Grenzen",
            tone: "warning",
            description: "",
          },
        ],
      },
      {
        kind: "side-effects",
        label: "Nebenwirkungen",
        title: "Nebenwirkungen",
        tone: "side-effects",
        source: "sideEffects",
      },
      {
        kind: "mechanism",
        label: "Wirkmechanismus",
        title: "Wirkmechanismus",
        tone: "mechanism",
        source: "mechanism",
      },
      {
        kind: "cave",
        label: "Cave",
        title: "Cave",
        tone: "cave",
        source: "cave",
      },
      {
        kind: "remember",
        label: "Merke",
        title: "Merke",
        tone: "note",
        source: "remember",
      },
      {
        kind: "additional",
        label: "Sonstiges",
        title: "Sonstiges",
        tone: "other",
        source: "additional",
      },
    ],
  };

  window.pharmaAtlasShared = {
    fact: fact,
    referenceItem: referenceItem,
    getCategoryParts: getCategoryParts,
    entry: entry,
    variant: variant,
    themes: themes,
    rendererConfig: rendererConfig,
  };
})();
