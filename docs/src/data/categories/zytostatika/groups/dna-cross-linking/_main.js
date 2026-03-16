(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.dnaCrossLinking = {
    id: "dna-cross-linking",
    kind: "section",
    theme: themes.violet,
    title: "DNA-Cross-Linking",
    sections: [
      {
        id: "dna-cross-linking-substanzen",
        type: "entries",
        hideTitle: true,
        title: "DNA-Cross-Linking-Substanzen",
        description: "Alkylanzien und Alkylanzien-ähnliche Substanzen (Platin-Derivate) → DNA-Vernetzung und Strangbrüche",
        entries: [
          parts.entries.alkylanzien,
          parts.entries.platinDerivate,
        ],
      },
    ],
  };
})();
