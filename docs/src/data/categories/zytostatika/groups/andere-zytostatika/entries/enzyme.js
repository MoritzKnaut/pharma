(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.enzyme = entry("Enzyme", {
    layout: "wide",
    substances: ["L-Asparaginase"],
    mechanism: [
      fact(
        "Spaltung der Aminosäure L-Asparagin",
        "Essenziell für z.B. ALL-Zellpopulationen"
      ),
    ],
    indications: [
      fact("Akute Leukämien"),
    ],
    sideEffects: [
      fact("Häufig allergische Reaktionen"),
      fact("Blutungs- und/oder Thromboseneigung"),
    ],
  });
})();
