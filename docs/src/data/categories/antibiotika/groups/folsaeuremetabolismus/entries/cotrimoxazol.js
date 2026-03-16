(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.cotrimoxazol = entry("Cotrimoxazol", {
    substances: ["Trimethoprim/Sulfamethoxazol"],
    mechanism: [
      fact(
        "Kombinierte Hemmung der bakteriellen Folsäuresynthese",
        "Sulfamethoxazol hemmt die Dihydropteroatsynthase, Trimethoprim die Dihydrofolatreduktase"
      ),
    ],
    effectiveAgainst: [
      "Zahlreiche grampositive Bakterien",
      "Zahlreiche gramnegative Bakterien",
      fact("Wirksam gegen Pneumocystis jirovecii und Toxoplasma gondii"),
    ],
    cautions: [
      fact("Nicht wirksam gegen Pseudomonas"),
      fact("Nicht wirksam gegen Anaerobier"),
    ],
  });
})();
