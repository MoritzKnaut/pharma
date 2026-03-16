(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.imidazole = entry("Imidazole", {
    variantsKind: "substances",
    mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
    notes: [fact("Vor allem lokal angewendete Azole")],
    variants: [
      {
        name: "Clotrimazol",
        effectiveAgainst: [fact("Hefen", "v.a. Candidose")],
        notes: [fact("Lokale Anwendung")],
      },
      {
        name: "Ketoconazol",
        notes: [
          fact("Vor allem lokal angewendet"),
          fact("Orale Anwendung wird wegen der Nebenwirkungen heute kaum noch genutzt"),
        ],
      },
      {
        name: "Bifonazol",
        effectiveAgainst: [fact("Dermatophytosen")],
        notes: [fact("Lokale Anwendung")],
      },
    ],
  });
})();
