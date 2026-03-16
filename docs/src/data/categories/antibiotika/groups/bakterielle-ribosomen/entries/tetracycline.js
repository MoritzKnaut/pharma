(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.tetracycline = entry("Tetracycline", {
    substances: ["Doxycyclin", "Minocyclin"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Bindung an die 30S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: [
      "Einige grampositive Bakterien",
      "Einzelne gramnegative Bakterien",
      fact(
        "Gute Wirkung gegen intrazelluläre Erreger und Atypiker",
        "Chlamydien, Mykoplasmen, Rickettsien"
      ),
    ],
  });
})();
