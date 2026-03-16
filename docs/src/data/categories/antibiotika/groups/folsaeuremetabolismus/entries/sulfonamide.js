(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.sulfonamide = entry("Sulfonamide", {
    substances: ["Sulfamethoxazol"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Folsäuresynthese",
        "Blockade der Dihydropteroatsynthase"
      ),
    ],
    effectiveAgainst: [
      "Einige grampositive Bakterien",
      "Einige gramnegative Bakterien",
    ],
  });
})();
