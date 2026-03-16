(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.folsaeureAntagonisten = entry("Folsäure-Antagonisten", {
    layout: "wide",
    variantsKind: "subgroups",
    variants: [
      {
        name: "Methotrexat",
        substances: ["Methotrexat"],
        mechanism: [
          fact(
            "Hemmung der Dihydrofolatreduktase",
            "Verdrängung der Dihydrofolsäure → Bildung von Purinnukleotiden↓"
          ),
        ],
        indications: [
          fact("Immunsuppression"),
          fact("Osteosarkom"),
        ],
        sideEffects: [
          fact("Myelotoxizität"),
          fact("Hepatotoxizität"),
          fact("Mukositis", "Stomatitis, Ösophagitis, Enteritis"),
        ],
        remember: [
          fact(
            "Gegenmaßnahme",
            "Folsäure als Rescue-Therapie"
          ),
        ],
      },
      {
        name: "Pemetrexed",
        substances: ["Pemetrexed"],
        mechanism: [
          fact(
            "Hemmung der Dihydrofolatreduktase",
            "Verdrängung der Dihydrofolsäure → Bildung von Purinnukleotiden↓"
          ),
        ],
        indications: [
          fact("Pleuramesotheliom"),
          fact("Nicht-kleinzelliges Lungenkarzinom"),
        ],
      },
    ],
  });
})();
