(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.allylamine = entry("Allylamine", {
    substances: ["Terbinafin"],
    mechanism: [
      fact(
        "Hemmung der Squalenepoxidase",
        "dadurch gestörte Ergosterol-Synthese"
      ),
    ],
    effectiveAgainst: ["Dermatophytosen"],
    remember: [fact("Per os oder lokal")],
  });
})();
