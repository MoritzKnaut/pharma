(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.topoisomeraseI = entry("Topoisomerase-I-Hemmer", {
    layout: "wide",
    substances: ["Irinotecan", "Topotecan"],
    mechanism: [
      fact(
        "Hemmung der Topoisomerase I",
        "DNA-Replikation↓"
      ),
    ],
    indications: [
      fact("Ovarialkarzinom"),
      fact("Kolorektales Karzinom"),
    ],
    sideEffects: [
      fact("U.a. myelotoxisch", "dosislimitierend bei Topotecan"),
    ],
  });
})();
