(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var variant = shared.variant;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.zytostatischeAntibiotika = entry("Zytostatische Antibiotika", {
    layout: "wide",
    variantsKind: "subgroups",
    variants: [
      {
        name: "Bleomycin / Actinomycin D",
        substances: ["Bleomycin", "Actinomycin D"],
        mechanism: [
          fact(
            "Interkalation und Alkylierung der DNA",
            "Behinderung des Ableseprozesses → RNA-Synthese↓"
          ),
        ],
        indications: [
          fact("Hodenkarzinom"),
          fact("Wilms-Tumor"),
        ],
        sideEffects: [
          fact("Lungenfibrose", "bei Bleomycin"),
        ],
      },
      {
        name: "Mitomycin",
        substances: ["Mitomycin"],
        mechanism: [
          fact(
            "Interkalation und Alkylierung der DNA",
            "Behinderung des Ableseprozesses → RNA-Synthese↓"
          ),
        ],
        indications: [
          fact("Palliative Chemotherapie verschiedener Tumoren"),
          fact("Intravesikal nach transurethraler Resektion eines Harnblasenkarzinoms"),
        ],
        sideEffects: [
          fact("Nephrotoxizität"),
          fact("Interstitielle Pneumonie"),
        ],
      },
    ],
  });
})();
