(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var variant = shared.variant;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.purinAnaloga = entry("Purin-Analoga", {
    layout: "wide",
    variantsKind: "subgroups",
    remember: [
      fact("Purin-Antagonisten = Purin-Analoga", "Synonyme Begriffe"),
    ],
    variants: [
      {
        name: "HGPRT-Hemmer",
        substances: ["Azathioprin", "6-Mercaptopurin"],
        mechanism: [
          fact(
            "Einbau einer falschen Base",
            "DNA-Replikation↓ (HGPRT-Hemmer)"
          ),
        ],
        indications: [
          fact("Immunsuppression"),
          fact("Akute Leukämien"),
        ],
        remember: [
          fact("Wechselwirkung mit Allopurinol"),
          fact("Nutzung als Immunsuppressivum"),
        ],
      },
      {
        name: "Fludarabin",
        substances: ["Fludarabin"],
        mechanism: [
          fact(
            "Einbau einer falschen Base",
            "DNA-Replikation↓ (DNA-Polymerase-Hemmer)"
          ),
        ],
        indications: [
          fact("CLL"),
        ],
        sideEffects: [
          fact("Myelotoxizität"),
        ],
      },
    ],
  });
})();
