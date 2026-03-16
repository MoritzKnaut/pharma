(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.polyenAntimykotikaEntry = entry("Polyen-Antimykotika", {
    variantsKind: "substances",
    mechanism: [
      fact("Polyen: Bindung an Ergosterol"),
      fact("Membrandurchlässigkeit steigt", "fungizide Wirkung"),
    ],
    variants: [
      {
        name: "Amphotericin B",
        effectiveAgainst: [
          fact("Hefen", "invasive Candidose"),
          "Kryptokokkose",
          fact("Schimmelpilze", "Aspergillose"),
        ],
        notes: [
          fact("Lokal oder intravenös"),
          fact("Nur lipidformulierte Präparate verwenden"),
        ],
      },
      {
        name: "Nystatin",
        effectiveAgainst: [fact("Hefen", "Candidose")],
        notes: [
          fact("Nur lokale Anwendung möglich"),
          fact("Kann bei Immunsuppression prophylaktisch peroral gegeben werden"),
          fact("Lokal an Haut und Schleimhaut"),
        ],
      },
    ],
  });
})();
